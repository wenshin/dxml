import { getLineHeight } from './util';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'd-text': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          class?: string;
        },
        HTMLElement
      >; // Normal web component
    }
  }
}

export class Text extends HTMLElement {
  static tag = 'd-text';
  static id = 'd-text-id';
  delta: number = 0;
  constructor() {
    // 必须首先调用 super 方法
    super();
    if (!document.getElementById(Text.id)) {
      const style = document.createElement('style');
      style.id = Text.id;
      style.textContent = `${Text.tag} {
        display: inline-block;
        box-sizing: border-box;
        overflow: visible;
      }`;
      document.head.appendChild(style);
    }
  }

  connectedCallback() {
    this.updateStyle();
  }

  attributeChangedCallback(name: string) {
    if (name === 'style' || name === 'class') {
      this.updateStyle();
    }
  }

  updateStyle() {
    const elem = this.children.length ? this.children[0] as HTMLElement : this;
    let lineHeight = getLineHeight(elem);
    const style = window.getComputedStyle(elem);
    const fontSize = parseFloat(style.fontSize);
    if (lineHeight > fontSize) {
      const delta = (lineHeight - fontSize) / 2;
      if (this.delta !== delta) {
        this.delta = delta;
        this.style.margin = `-${delta}px 0`;
      }
    }
  }
}

if (!customElements.get(Text.tag)) {
	customElements.define(Text.tag, Text);
}
