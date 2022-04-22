import { ShapeAttributes } from '.';

interface CSSDimensionAttr {
  dprValue: number;
  value: number;
  unit: string;
  css: string;
}

interface CssAttrs {
  width: CSSDimensionAttr;
  height: CSSDimensionAttr;
  dataUrl: string;
}

interface ParsedAttrs {
  stroke: {
    size: CSSDimensionAttr;
    color: string;
    pattern: number[];
  };
  size: { width: number; height: number };
  fill?: string;
}

export function drawShapeSVG(
  dom: HTMLElement,
  shapeAttrs: ShapeAttributes
): CssAttrs | undefined {
  if (!shapeAttrs.type) {
    throw new Error('shape is needed');
  }
  const stroke = parseStroke(shapeAttrs.stroke);
  let sizeAttr = shapeAttrs.size;
  if (!sizeAttr) {
    sizeAttr = `${dom.clientWidth + stroke.size.value * 2}px ${
      dom.clientHeight + stroke.size.value * 2
    }px`;
  }
  const size = parseSize(sizeAttr);
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', size.width.css);
  svg.setAttribute('height', size.height.css);
  svg.setAttribute('version', '1.1');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttributeNS(
    'http://www.w3.org/2000/xmlns/',
    'xmlns:xlink',
    'http://www.w3.org/1999/xlink'
  );
  svg.setAttribute(
    'viewBox',
    `0 0 ${size.width.dprValue} ${size.height.dprValue}`
  );
  switch (shapeAttrs.type) {
    case 'triangle':
      return {
        width: size.width,
        height: size.height,
        dataUrl: drawTriangle(svg, {
          stroke,
          size: {
            width: size.width.dprValue,
            height: size.height.dprValue,
          },
          fill: shapeAttrs.fill,
        }),
      };
    case 'ellipse':
      return {
        width: size.width,
        height: size.height,
        dataUrl: drawEllipse(svg, {
          stroke,
          size: {
            width: size.width.dprValue,
            height: size.height.dprValue,
          },
          fill: shapeAttrs.fill,
        }),
      };
    default:
      break;
  }
}

function drawTriangle(svg: SVGElement, attrs: ParsedAttrs): string {
  const { stroke, size, fill } = attrs;
  const polygon = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'polygon'
  );
  polygon.setAttribute('fill', fill || 'none');
  const strokeWidth =
    stroke.size.unit === 'px' ? stroke.size.dprValue : stroke.size.value;
  const halfStrokeWidth = Math.floor(strokeWidth / 2);
  polygon.setAttribute(
    'points',
    [
      [0 + stroke.size.value, size.height - halfStrokeWidth],
      [size.width / 2, 0 + stroke.size.value],
      [size.width - stroke.size.value, size.height - halfStrokeWidth],
    ]
      .map((v) => v.join(','))
      .join(' ')
  );
  polygon.setAttribute('stroke', stroke.color || '#000');
  polygon.setAttribute('stroke-width', strokeWidth.toString());
  polygon.setAttribute('stroke-dasharray', stroke.pattern.join(' '));
  svg.appendChild(polygon);
  return 'data:image/svg+xml;base64,' + btoa(getSVGFile(svg.outerHTML));
}

function drawEllipse(svg: SVGElement, attrs: ParsedAttrs): string {
  const { stroke, size, fill } = attrs;
  const ellipse = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'ellipse'
  );
  ellipse.setAttribute('fill', fill || 'none');
  const strokeWidth =
    stroke.size.unit === 'px' ? stroke.size.dprValue : stroke.size.value;
  const halfStrokeWidth = Math.floor(strokeWidth / 2);
  ellipse.setAttribute('cx', String(size.width / 2));
  ellipse.setAttribute('cy', String(size.height / 2));
  ellipse.setAttribute('rx', String(size.width / 2 - halfStrokeWidth));
  ellipse.setAttribute('ry', String(size.height / 2 - halfStrokeWidth));
  ellipse.setAttribute('stroke', stroke.color || '#000');
  ellipse.setAttribute('stroke-width', strokeWidth.toString());
  ellipse.setAttribute('stroke-dasharray', stroke.pattern.join(' '));
  svg.appendChild(ellipse);
  return 'data:image/svg+xml;base64,' + btoa(getSVGFile(svg.outerHTML));
}

export function drawRetangle(elem: HTMLElement, shapeAttrs: ShapeAttributes) {
  if (shapeAttrs.size) {
    const size = parseSize(shapeAttrs.size);
    elem.style.width = size.width.css;
    elem.style.height = size.height.css;
  }
  if (shapeAttrs.stroke) {
    const stroke = parseStroke(shapeAttrs.stroke);
    elem.style.border = `${stroke.type} ${stroke.size.css} ${stroke.color}`;
  }
  if (shapeAttrs.fill) {
    elem.style.background = shapeAttrs.fill;
  }
}

function getSVGFile(svg: string) {
  return `<?xml version="1.0" standalone="no"?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  ${svg}`;
}

function parseSize(size?: string) {
  if (!size) {
    return {
      width: createDimensionObj(0, 'px'),
      height: createDimensionObj(0, 'px'),
    };
  }
  const [widthstr, heightstr] = size.split(' ');
  const width = parseDimension(widthstr);
  let height = parseDimension(heightstr || widthstr);
  if (!width) {
    throw new Error('size is needed');
  }
  return { width, height };
}

function parseDimension(value: string): CSSDimensionAttr {
  const [, numstr, unit] = value.match(/([\d.]+)([a-zA-Z]*)/) || [];
  if (numstr) {
    if (unit && unit !== 'px') {
      throw new Error('only support px');
    }
    const num = parseFloat(numstr);
    return createDimensionObj(num, unit);
  }
  return createDimensionObj(0, 'px');
}

function parseStroke(stroke?: string) {
  if (!stroke) {
    return {
      size: createDimensionObj(1, 'px'),
      color: '#000',
      pattern: [],
    };
  }
  const [type, size, color] = stroke.split(' ');
  const sizeObj = parseDimension(size);
  let linePattern: number[] = [];
  if (type === 'dash') {
    linePattern = [8, 2];
  } else if (type !== 'solid') {
    linePattern = type.split(',').map((v) => parseFloat(v));
  }
  return {
    size: sizeObj,
    color,
    type,
    pattern: linePattern,
  };
}

function createDimensionObj(num: number, unit: string) {
  const newUnit = unit || 'px';
  return {
    dprValue: num * window.devicePixelRatio,
    value: num,
    unit: newUnit,
    css: `${num}${newUnit}`,
  };
}
