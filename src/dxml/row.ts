import { insertDimensionStyle, insertGapStyle } from './util';

export class Row extends HTMLElement {
  static tag = 'd-row';
  static id = 'd-row-id';

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

if (window.customElements && !window.customElements.get(Row.tag)) {
	window.customElements.define(Row.tag, Row);
}
