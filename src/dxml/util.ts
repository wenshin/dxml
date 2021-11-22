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
    align-items: start;
    justify-content: start;
  }
  ${tag}[align-items="left"] {
    align-items: center;
    justify-content: end;
  }
  ${tag}[align-items="right"] {
    align-items: center;
    justify-content: start;
  }
  ${tag}[align-items="bottom"] {
    align-items: end;
    justify-content: center;
  }
  ${tag}[align-items="right-top"] {
    align-items: start;
    justify-content: end;
  }
  ${tag}[align-items="right-bottom"] {
    align-items: end;
    justify-content: end;
  }
  ${tag}[align-items="left-top"] {
    align-items: start;
    justify-content: start;
  }
  ${tag}[align-items="left-bottom"] {
    align-items: end;
    justify-content: start;
  }`;
}