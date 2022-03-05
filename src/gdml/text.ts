import { getLineHeight, insertCropStyle, insertStyleElement } from './util';

export class Text extends HTMLElement {
  static tag = 'd-text';
  static id = 'd-text-id';
  delta: number = 0;

  connectedCallback() {
    const crop = this.getAttribute('crop');
    if (crop === 'auto') {
      // 性能太差，暂时不实现
      // this.updateStyle();
    } else if (crop) {
      insertCropStyle(crop);
    }
  }

  attributeChangedCallback(name: string) {
    const crop = this.getAttribute('crop');
    if (crop === 'auto' && (name === 'style' || name === 'class')) {
      // 性能太差，暂时不实现
      // this.updateStyle();
    }
  }

  updateStyle() {
    const elem = this.children.length
      ? (this.children[0] as HTMLElement)
      : this;
    let lineHeight = getLineHeight(elem);
    const style = window.getComputedStyle(elem);
    const fontSize = parseFloat(style.fontSize);
    if (lineHeight > fontSize) {
      const delta = (lineHeight - fontSize) / 2;
      if (this.delta !== delta) {
        this.delta = delta;
        const id = `${Text.tag}-crop-${delta}`;
        this.classList.add(id);
        insertStyleElement(
          id,
          `
          ${Text.tag}.${id}::before, ${Text.tag}.${id}::after {
            margin-top: -${delta}px;
          }
        `
        );
      }
    }
  }
}

if (window.customElements && !window.customElements.get(Text.tag)) {
  window.customElements.define(Text.tag, Text);
}
