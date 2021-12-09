import { PositionType } from './util';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'd-float': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { align?: PositionType; class?: string },
        HTMLElement
      >; // Normal web component
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
      const style = document.createElement('style');
      style.id = Float.id;

      style.textContent = `${Float.tag} {
        position: absolute;
        box-sizing: border-box;
        display: block;
        pointer-events: auto;
      }
      ${Float.tag}[align="top"] {
        top: 0px;
        left: 50%;
        transform: translate(-50%, 0);
      }
      ${Float.tag}[align="right-top"] {
        top: 0px;
        right: 0px;
      }
      ${Float.tag}[align="right"] {
        right: 0px;
        top: 50%;
        transform: translate(0, -50%);
      }
      ${Float.tag}[align="right-bottom"] {
        bottom: 0px;
        right: 0;
      }
      ${Float.tag}[align="bottom"] {
        bottom: 0px;
        left: 50%;
        transform: translate(-50%, 0);
      }
      ${Float.tag}[align="left-bottom"] {
        left: 0px;
        bottom: 0px;
      }
      ${Float.tag}[align="left"] {
        left: 0px;
        top: 50%;
        transform: translate(0, -50%);
      }
      ${Float.tag}[align="left-top"] {
        left: 0px;
        top: 0px;
      }
      ${Float.tag}[align="center"] {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }`;
      document.head.appendChild(style);
    }
  }

  connectedCallback() {
    const align = this.getAttribute('align');
    if (!align) {
      this.setAttribute('align', 'left-top');
    }
  }
}

if (!customElements.get(Float.tag)) {
	customElements.define(Float.tag, Float);
}
