import { getFlexAlignCSS } from "./util";
import { View } from "./view";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'd-col': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          class?: string;
          dimension?: 'stretch' | string;
        },
        HTMLElement
      >; // Normal web component
    }
  }
}

export class Col extends HTMLElement {
  static tag = 'd-col';
  static id = 'd-col-id';
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

customElements.define(Col.tag, Col);