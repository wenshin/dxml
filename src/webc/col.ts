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

    if (!document.getElementById(Col.id)) {
      const style = document.createElement('style');
      style.id = Col.id;

      style.textContent = `${Col.tag} {
        position: relative;
        display: inline-flex;
        flex-direction: column;
        box-sizing: border-box;
        flex: none;
      }
      ${Col.tag} > *,
      ${Col.tag} > ${View.tag} {
        height: auto;
      }
      ${getFlexAlignCSS(Col.tag)}
      ${Col.tag} > [dimension] {
        overflow: auto;
        flex: 1;
      }
      ${Col.tag} > [dimension="stretch"] {
        overflow: auto;
        flex: 1;
      }`;
      document.head.appendChild(style);
    }
  }

  connectedCallback() {
    const dimension = this.getAttribute('dimension');
    if (dimension !== 'stretch' && dimension && this.parentElement) {
      this.style.flexGrow = dimension;
    }
  }
}

customElements.define(Col.tag, Col);
