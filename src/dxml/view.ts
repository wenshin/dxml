import { insertGapStyle } from './util';

export class View extends HTMLElement {
  static tag = 'd-view';
  static id = 'd-view-id';

  connectedCallback() {
    const gap = this.getAttribute('gap');
    if (gap) {
      insertGapStyle(gap);
    }
  }
}

if (window.customElements && !window.customElements.get(View.tag)) {
	window.customElements.define(View.tag, View);
}
