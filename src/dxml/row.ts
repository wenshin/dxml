import { insertFractionStyle, insertGapStyle } from './util';

export class Row extends HTMLElement {
  static tag = 'd-row';
  static id = 'd-row-id';

  connectedCallback() {
    const fraction = this.getAttribute('fraction');
    if (fraction !== 'stretch' && fraction && this.parentElement) {
      insertFractionStyle(fraction);
    }
    const gap = this.getAttribute('gap');
    if (gap) {
      insertGapStyle(gap);
    }
  }
}

if (window.customElements && !window.customElements.get(Row.tag)) {
  window.customElements.define(Row.tag, Row);
}
