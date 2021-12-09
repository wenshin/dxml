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
  constructor() {
    // 必须首先调用 super 方法
    super();

    if (!document.getElementById(Layer.id)) {
      const style = document.createElement('style');
      style.id = Layer.id;
      style.textContent = `${Layer.tag} {
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
        display: block;
        height: 100%;
        width: 100%;
        overflow: visible;
      }
      ${Layer.tag}[mask="none"] {
        pointer-events: none;
        background-color: transparent;
      }
      ${Layer.tag}[mask="white"] {
        background-color: #ffffffbb;
      }
      ${Layer.tag}[mask="black"] {
        background-color: #00000073;
      }`;
      document.head.appendChild(style);
    }
  }

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

if (!customElements.get(Layer.tag)) {
	customElements.define(Layer.tag, Layer);
}
