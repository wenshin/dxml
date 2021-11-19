import { View } from './view';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'd-row': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          class?: string;
          height?: 'equal' | 'stretch' | string;
          'align-items'?: 'start' | 'end';
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

      style.textContent = `${View.tag} > ${Row.tag} {
        position: relative;
        display: block;
        width: 100%;
        box-sizing: border-box;
        flex: none;
      }
      ${View.tag} > ${Row.tag}[align-items="center"] {
        display: flex;
        align-items: center;
      }
      ${View.tag} > ${Row.tag}[align-items="start"] {
        display: flex;
        align-items: start;
      }
      ${View.tag} > ${Row.tag}[align-items="end"] {
        display: flex;
        align-items: end;
      }
      ${View.tag} > ${Row.tag}[height="equal"] {
        height: 1px;
        flex: 1;
      }
      ${View.tag} > ${Row.tag}[height="stretch"] {
        height: 0px;
        flex: 1;
      }`;
      document.head.appendChild(style);
    }
  }

  connectedCallback() {
    const height = this.getAttribute('height');
    if (height !== 'equal' && height !== 'stretch' && height) {
      this.style.height = height;
    }
    const alignItems = this.getAttribute('align-items');
    if (!alignItems) {
      this.setAttribute('align-items', 'center');
    }
    if (this.parentElement) {
      this.parentElement.setAttribute('role', 'row-container');
    }
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'height') {
      this.style.height = newValue;
    }
  }
}

customElements.define(Row.tag, Row);
