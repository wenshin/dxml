import { getFlexAlignCSS } from "./util";
import { View } from "./view";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'd-row': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          class?: string;
          dimension?: 'stretch' | string;
        },
        HTMLElement
      >; // Normal web component
    }
  }
}

export class Row extends HTMLElement {
  static tag = 'd-row';
  static id = 'd-row-id';
  constructor() {
    // 必须首先调用 super 方法
    super();
  }

  connectedCallback() {
    const dimension = this.getAttribute('dimension');
    if (dimension !== 'stretch' && dimension && this.parentElement) {
      this.style.flexGrow = dimension;
    }
  }
}

customElements.define(Row.tag, Row);
