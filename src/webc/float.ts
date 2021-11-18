import { Layer } from "./layer";

type Align = 'top' | 'right-top' | 'right' | 'right-bottom' | 'bottom' | 'left-bottom' | 'left' | 'left-top' | 'center';
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'd-float': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { align?: Align; class?: string; },
        HTMLElement>; // Normal web component
    }
  }
}

/**
 * float element 可以设置相对父容器的浮动定位，float 必须放在 layer 标签内使用
 * 属性
 * 1. align: top、right-top、right、right-bottom、bottom、left-bottom、left、left-top、center
 */
export class Float extends HTMLElement {
  static id = 'd-float-id';
  static tag = 'd-float';
  constructor() {
    // 必须首先调用 super 方法
    super();

    if (!document.getElementById(Float.id)) {
      const style = document.createElement('style')
      style.id = Float.id

      style.textContent = `${Layer.tag} > ${Float.tag} {
        position: absolute;
        box-sizing: border-box;
        display: block;
        pointer-events: auto;
      }`
      document.head.appendChild(style)
    }
  }

  connectedCallback() {
    const oldStyle = this.getAttribute('style') || '';
    const align = this.getAttribute('align') || 'left-top';
    switch (align) {
      case 'top':
        this.setAttribute('style', 'top: 0px; left: 50%; transform: translate(-50%, 0);' + oldStyle)
        break;
      case 'right-top':
        this.setAttribute('style', 'top: 0px; right: 0px;' + oldStyle)
        break;
      case 'right':
        this.setAttribute('style', 'right: 0px; top: 50%; transform: translate(0, -50%);' + oldStyle)
        break;
      case 'right-bottom':
        this.setAttribute('style', 'right: 0px; bottom: 0px;' + oldStyle)
        break;
      case 'bottom':
        this.setAttribute('style', 'bottom: 0px; left: 50%; transform: translate(-50%, 0);' + oldStyle)
        break;
      case 'left-bottom':
        this.setAttribute('style', 'left: 0px; bottom: 0px;' + oldStyle)
        break;
      case 'left':
        this.setAttribute('style', 'left: 0px; top: 50%; transform: translate(0, -50%);' + oldStyle)
        break;
      case 'left-top':
        this.setAttribute('style', 'left: 0px; top: 0px;' + oldStyle)
        break;
      case 'center':
        this.setAttribute('style', 'left: 50%; top: 50%; transform: translate(-50%, -50%);' + oldStyle)
        break;
      default:
        break;
    }
    console.log('align', align);
  }
}

customElements.define(Float.tag, Float);
