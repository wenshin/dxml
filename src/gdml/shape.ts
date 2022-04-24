import { ShapeAttributes } from '.';
import { drawRetangle, drawShapeSVG } from './drawShapeSVG';
import { insertSizeStyle } from './util';

/**
 * 由内容决定尺寸的元素，如 text、image。即 inline 元素，默认为 inline-block 类型。
 */
export class Shape extends HTMLElement {
  static tag = 'd-shape';
  static id = 'd-shape-id';

  connectedCallback() {
    this.draw();
  }

  attributeChangedCallback(name: string) {
    console.log('shape attributeChangedCallback', name);
    if (['type', 'size', 'sides', 'stroke', 'fill', 'shadow'].includes(name)) {
      this.draw();
    }
  }

  draw() {
    const type = this.getAttribute('type') as ShapeAttributes['type'] | null;
    const size = this.getAttribute('size') || undefined;
    if (size) {
      insertSizeStyle(size);
    }
    if (type) {
      const drawObj = drawShapeSVG(this, {
        type,
        size,
        sides: parseInt(this.getAttribute('sides') || ''),
        stroke: this.getAttribute('stroke') || '',
        fill: this.getAttribute('fill') || '',
        shadow: this.getAttribute('shadow') || '',
      });
      if (drawObj) {
        this.style.background = `url(${drawObj?.dataUrl}) center/contain no-repeat`;
      }
    } else {
      drawRetangle(this, {
        size,
        sides: parseInt(this.getAttribute('sides') || ''),
        stroke: this.getAttribute('stroke') || '',
        fill: this.getAttribute('fill') || '',
        shadow: this.getAttribute('shadow') || '',
      });
    }
  }
}

if (window.customElements && !window.customElements.get(Shape.tag)) {
  window.customElements.define(Shape.tag, Shape);
}
