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

    if (!document.getElementById(Row.id)) {
      const style = document.createElement('style');
      style.id = Row.id;

      style.textContent = `${Row.tag} {
        position: relative;
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        flex: none;
        height: fit-content;
      }
      ${Row.tag} > *,
      ${Row.tag} > ${View.tag} {
        width: auto;
      }
      ${getFlexAlignCSS(Row.tag)}
      ${Row.tag} > [dimension] {
        width: 1px;
        min-width: 1px;
        overflow: auto;
        flex: 1;
      }
      ${Row.tag} > [dimension="stretch"] {
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

customElements.define(Row.tag, Row);
