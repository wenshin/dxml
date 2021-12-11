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
}

if (customElements && !customElements.get(Float.tag)) {
	customElements.define(Float.tag, Float);
}
