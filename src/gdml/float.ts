/**
 * float element 可以设置相对父容器的浮动定位，float 必须放在 layer 标签内使用
 * 属性
 * 1. align: top、right-top、right、right-bottom、bottom、left-bottom、left、left-top、center
 */
export class Float extends HTMLElement {
  static id = 'd-float-id';
  static tag = 'd-float';
}

if (window.customElements && !window.customElements.get(Float.tag)) {
  window.customElements.define(Float.tag, Float);
}
