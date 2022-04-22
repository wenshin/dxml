export function findAncestor(
  elem: HTMLElement,
  judge: (e: HTMLElement) => boolean
): HTMLElement | null {
  if (elem.parentElement && judge(elem.parentElement)) {
    return elem.parentElement;
  }
  if (elem.parentElement) {
    return findAncestor(elem.parentElement, judge);
  }
  return null;
}

/**
 * 这块操作很容导致 recalc style 和 layout 性能问题，严重可以达到 10ms 及以上
 * @param elem
 * @returns
 */
export function getLineHeight(elem: HTMLElement) {
  if (!elem.parentNode) return 0;
  const temp = document.createElement('span');
  temp.classList.add('text-corp-elem');
  temp.innerHTML = 'A';
  elem.appendChild(temp);
  return temp.offsetHeight;
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

export function insertSpanStyle(span: string) {
  const id = `d-span-${span}`;
  insertStyleElement(id, `[span][span="${span}"] { flex-grow: ${span}; }`);
}

export function insertGapStyle(gap: string) {
  const [rowGap, colGap] = gap.split(' ');
  const id = `d-gap-${rowGap}-${colGap || rowGap}`;
  insertStyleElement(
    id,
    `[gap="${gap}"] > * { margin-bottom: ${rowGap}px; }
    [layout-items="horizontal"][gap="${gap}"] > * { margin-right: ${rowGap}px; }
    [layout-items="inline"][gap="${gap}"] > * { margin-right: ${rowGap}px; margin-bottom: ${
      colGap || rowGap
    }px; }`
  );
}

export function insertCropStyle(crop: string) {
  const id = `d-text-crop-${crop}`;
  insertStyleElement(
    id,
    `[crop="${crop}"]::before, [crop="${crop}"]::after { margin-top: -${crop}px; }`
  );
}
