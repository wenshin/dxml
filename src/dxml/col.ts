import { insertDimensionStyle, insertStyleElement, PositionType } from './util';
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
      insertDimensionStyle(this, dimension)
    }
  }
}

if (customElements && !customElements.get(Col.tag)) {
	customElements.define(Col.tag, Col);
}
