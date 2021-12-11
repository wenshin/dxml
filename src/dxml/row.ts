import { PositionType } from './util';
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'd-row': React.DetailedHTMLProps<
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

export class Row extends HTMLElement {
  static tag = 'd-row';
  static id = 'd-row-id';

  connectedCallback() {
    const dimension = this.getAttribute('dimension');
    if (dimension !== 'stretch' && dimension && this.parentElement) {
      this.style.flexGrow = dimension;
    }
  }
}

if (customElements && !customElements.get(Row.tag)) {
	customElements.define(Row.tag, Row);
}
