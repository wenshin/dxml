import { insertDimensionStyle, insertGapStyle } from './util';

export class Col extends HTMLElement {
  static tag = 'd-col';
  static id = 'd-col-id';

  connectedCallback() {
    const dimension = this.getAttribute('dimension');
    if (dimension !== 'stretch' && dimension && this.parentElement) {
      insertDimensionStyle(dimension);
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
