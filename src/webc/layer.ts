type Mask = 'none' | string;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'd-layer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          class?: string;
          mask?: Mask;
        }, HTMLElement>; // Normal web component
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
      const style = document.createElement('style')
      style.id = Layer.id
      style.textContent = `${Layer.tag} {
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
        display: block;
        height: 100%;
        width: 100%;
        overflow: visible;
      }`
      document.head.appendChild(style)
    }
  }

  connectedCallback() {
    const mask = this.getAttribute('mask') || 'none';
    switch (mask) {
      case 'none':
        this.setAttribute('style', 'pointer-events: none; background-color: transparent;')
        break;
      default:
        this.setAttribute('style', `backgroun-color: ${mask};`)
        break;
    }
  }
}

customElements.define(Layer.tag, Layer);
