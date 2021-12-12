export type PositionType = 'top' | 'right-top' | 'right' | 'right-bottom' | 'bottom' | 'left-bottom' | 'left' | 'left-top' | 'center';

export function findAncestor(elem: HTMLElement, judge: (e: HTMLElement) => boolean): HTMLElement | null {
  if (elem.parentElement && judge(elem.parentElement)) {
    return elem.parentElement
  }
  if (elem.parentElement) {
    return findAncestor(elem.parentElement, judge)
  }
  return null;
}

export function getFlexAlignCSS(tag: string) {
  return `${tag}[align-items] {
    display: flex;
  }
  ${tag}[align-items="center"] {
    align-items: center;
    justify-content: center;
  }
  ${tag}[align-items="top"] {
    align-items: flex-start;
    justify-content: center;
  }
  ${tag}[align-items="bottom"] {
    align-items: flex-end;
    justify-content: center;
  }
  ${tag}[align-items="left"] {
    align-items: center;
    justify-content: flex-start;
  }
  ${tag}[align-items="left-top"] {
    align-items: flex-start;
    justify-content: flex-start;
  }
  ${tag}[align-items="left-bottom"] {
    align-items: flex-end;
    justify-content: flex-start;
  }
  ${tag}[align-items="right"] {
    align-items: center;
    justify-content: flex-end;
  }
  ${tag}[align-items="right-top"] {
    align-items: flex-start;
    justify-content: flex-end;
  }
  ${tag}[align-items="right-bottom"] {
    align-items: flex-end;
    justify-content: flex-end;
  }`;
}

/**
 * 这块操作很容导致 recalc style 和 layout 性能问题，严重可以达到 10ms 及以上
 * @param elem
 * @returns
 */
export function getLineHeight(elem: HTMLElement) {
  if (!elem.parentNode) return 0;
  const temp = document.createElement(elem.tagName === 'D-TEXT' ? 'span' : elem.tagName);
  const style = window.getComputedStyle(elem);
  temp.setAttribute("style", "margin:0; padding:0; width: 0; "
      + "position: absolute; "
      + "visbility: hidden; "
      + "line-height:" + style.lineHeight + "; "
      + "font-family:" + style.fontFamily + "; "
      + "font-size:" + style.fontSize);
  temp.innerHTML = "A";

  elem.parentNode.appendChild(temp);
  const lineHeight = temp.offsetHeight;
  elem.parentNode.removeChild(temp);
  return lineHeight;
}


export function insertStyleElement(id: string, content: string) {
  let style = document.getElementById(id);
  if (!style) {
    style = document.createElement('style');
    style.id = id;
    style.textContent = content;
    document.head.appendChild(style);
  }
}

export function insertDimensionStyle(dimension: string) {
  const id = `d-dimension-${dimension}`;
  insertStyleElement(id, `[dimension][dimension="${dimension}"] { flex-grow: ${dimension}; }`)
}

export function insertGapStyle(gap: string) {
  const [rowGap, colGap] = gap.split(' ');
  const id = `d-gap-${rowGap}-${colGap || rowGap}`;
  insertStyleElement(id, `[gap="${gap}"] > * { margin-right: ${rowGap}; margin-bottom: ${colGap || rowGap}; }`)
}