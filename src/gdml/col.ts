import { insertFractionStyle, insertGapStyle } from './util';

export class Col extends HTMLElement {
  static tag = 'd-col';
  static id = 'd-col-id';

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

if (window.customElements && !window.customElements.get(Col.tag)) {
  window.customElements.define(Col.tag, Col);
}
