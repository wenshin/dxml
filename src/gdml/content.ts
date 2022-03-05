/**
 * 由内容决定尺寸的元素，如 text、image。即 inline 元素，默认为 inline-block 类型。
 */
export class Content extends HTMLElement {
  static tag = 'd-content';
  static id = 'd-content-id';
}

if (window.customElements && !window.customElements.get(Content.tag)) {
  window.customElements.define(Content.tag, Content);
}
