import { insertDimensionStyle, insertGapStyle, PositionType } from './util';
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'd-col': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          class?: string;
          /**
           * stretch | 1 | 2 | 3
           */
          dimension?: 'stretch' | string;
          'align-items'?: PositionType;
          gap?: string;
        },
        HTMLElement
      >; // Normal web component
    }
  }
}

export class Col extends HTMLElement {
  static tag = 'd-col';
  static id = 'd-col-id';

  connectedCallback() {
    const dimension = this.getAttribute('dimension');
    if (dimension !== 'stretch' && dimension && this.parentElement) {
      insertDimensionStyle(dimension)
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
