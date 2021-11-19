import { View } from './view';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'd-col': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          class?: string;
          width?: 'equal' | 'stretch' | string;
          'align-items'?: 'start' | 'end';
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

      style.textContent = `${View.tag} > ${Col.tag} {
        position: relative;
        display: block;
        height: 100%;
        box-sizing: border-box;
        flex: none;
      }
      ${View.tag} > ${Col.tag}[align-items="start"] {
        display: flex;
        align-items: start;
      }
      ${View.tag} > ${Col.tag}[align-items="end"] {
        display: flex;
        align-items: end;
      }
      ${View.tag} > ${Col.tag}[width="equal"] {
        width: 1px;
        flex: 1;
      }
      ${View.tag} > ${Col.tag}[width="stretch"] {
        width: 0px;
        flex: 1;
      }`;
      document.head.appendChild(style);
    }
  }

  connectedCallback() {
    const width = this.getAttribute('width');
    if (width !== 'equal' && width !== 'stretch' && width) {
      this.style.width = width;
    }
    const alignItems = this.getAttribute('align-items');
    if (!alignItems) {
      this.setAttribute('align-items', 'center');
    }
    if (this.parentElement) {
      this.parentElement.setAttribute('role', 'col-container');
    }
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'width') {
      this.style.width = newValue;
    }
  }
}

customElements.define(Col.tag, Col);
