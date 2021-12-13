/**
 * 由内容决定尺寸的元素，如 text、image。即 inline 元素，默认为 inline-block 类型。
 */
export class Elem extends HTMLElement {
  static tag = 'd-elem';
  static id = 'd-elem-id';
}

if (window.customElements && !window.customElements.get(Elem.tag)) {
	window.customElements.define(Elem.tag, Elem);
}
