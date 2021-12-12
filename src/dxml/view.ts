import { insertGapStyle, PositionType } from './util';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'd-view': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        class?: string;
        layout?: 'row' | 'col' | 'inline';
        gap?: string;
        'align-items'?: PositionType;
      }, HTMLElement>; // Normal web component
    }
  }
}

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

if (customElements && !customElements.get(View.tag)) {
	customElements.define(View.tag, View);
}
