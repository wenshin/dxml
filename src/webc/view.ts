import { Col } from "./col";
import { Row } from "./row";
import { getFlexAlignCSS, PositionType } from "./util";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'd-view': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        class?: string;
        layout?: 'row' | 'col';
        dimension?: 'equal' | 'stretch' | string;
        'align-items'?: PositionType;
      }, HTMLElement>; // Normal web component
    }
  }
}

export class View extends HTMLElement {
  static tag = 'd-view';
  static id = 'd-view-id';
  constructor() {
    // 必须首先调用 super 方法
    super();

    if (!document.getElementById(View.id)) {
      const style = document.createElement('style');
      style.id = View.id;
      style.textContent = `${View.tag} {
        position: relative;
        height: 100%;
        width: 100%;
        display: block;
        box-sizing: border-box;
        flex: none;
      }
      ${View.tag}[align-items],
      ${View.tag}[layout] {
        display: flex;
      }
      ${View.tag}[layout="col"] {
        flex-direction: column;
      }
      ${getFlexAlignCSS(View.tag)}
      ${View.tag}[layout="row"] > *,
      ${View.tag}[layout="row"] > ${View.tag} {
        width: auto;
      }
      ${View.tag}[layout="row"] > [dimension] {
        width: 1px;
        min-width: 1px;
        overflow: auto;
        flex: 1;
      }
      ${View.tag}[layout="row"] > [dimension="stretch"] {
        overflow: auto;
        flex: 1;
      }
      ${View.tag}[layout="col"] > *,
      ${View.tag}[layout="col"] > ${View.tag} {
        height: auto;
      }
      ${View.tag}[layout="col"] > [dimension] {
        overflow: auto;
        flex: 1;
      }
      ${View.tag}[layout="col"] > [dimension="stretch"] {
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

customElements.define(View.tag, View);
