type Mask = 'none' | 'black' | 'white' | string;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'd-layer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          class?: string;
          mask?: Mask;
        },
        HTMLElement
      >; // Normal web component
    }
  }
}

// layer stack management
export class Layer extends HTMLElement {
  static id = 'd-layer-id';
  static tag = 'd-layer';

  connectedCallback() {
    const mask = this.getAttribute('mask') || 'none';
    switch (mask) {
      case 'none':
      case 'white':
      case 'black':
        break;
      default:
        this.setAttribute('style', `background-color: ${mask};`);
        break;
    }
  }
}

if (window.customElements && !window.customElements.get(Layer.tag)) {
	window.customElements.define(Layer.tag, Layer);
}
