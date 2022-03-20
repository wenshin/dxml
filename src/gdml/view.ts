import { AlignItemsType, LayoutAtrributes, PositionType } from '.';
import { insertGapStyle, insertSpanStyle } from './util';

const ALIGN_ITEMS_CONFIG = {
  col: [
    ['left-top', 'start'],
    ['right-top', 'start'],
    ['top', 'start'],
    ['left', 'center'],
    ['center', 'center'],
    ['right', 'center'],
    ['left-bottom', 'end'],
    ['bottom', 'end'],
    ['right-bottom', 'end'],
  ],
  row: [
    ['left-top', 'start'],
    ['right-top', 'end'],
    ['top', 'center'],
    ['left', 'start'],
    ['center', 'center'],
    ['right', 'end'],
    ['left-bottom', 'start'],
    ['bottom', 'center'],
    ['right-bottom', 'end'],
  ],
};

/**
 * 默认 viewport 模式
 */
export class View extends HTMLElement {
  static tag = 'd-view';
  static id = 'd-view-id';

  connectedCallback() {
    const span = this.getAttribute('span');
    if (span !== 'stretch' && span && this.parentElement) {
      insertSpanStyle(span);
    }
    const gap = this.getAttribute('gap');
    if (gap) {
      insertGapStyle(gap);
    }
    const layout = this.getAttribute(
      'layout-items'
    ) as LayoutAtrributes['layout-items'];
    const alignItems = this.getAttribute('align-items') as AlignItemsType;
    const placeItems = this.getAttribute('place-items') as PositionType;
    const alignConfig =
      ALIGN_ITEMS_CONFIG[layout as keyof typeof ALIGN_ITEMS_CONFIG];
    if (!alignConfig) return;
    for (const conf of alignConfig) {
      if (placeItems === conf[0] && alignItems && alignItems !== conf[1]) {
        const view = document.createElement(View.tag);
        view.setAttribute('align-items', alignItems);
        if (layout) {
          view.setAttribute('layout-items', layout);
        }
        const elems = Array.from(this.children);
        for (let i = 0; i < elems.length; i++) {
          const elem = elems[i];
          this.removeChild(elem);
          view.appendChild(elem);
        }
        this.appendChild(view);
      }
    }
  }
}

if (window.customElements && !window.customElements.get(View.tag)) {
  window.customElements.define(View.tag, View);
}
