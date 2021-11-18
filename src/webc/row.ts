declare global {
  namespace JSX {
    interface IntrinsicElements {
      'd-view': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { class?: string; }, HTMLElement>; // Normal web component
    }
  }
}

export class View extends HTMLElement {
  static tag = 'd-view';
  static id = 'd-view-id';
  constructor() {
    // 必须首先调用 super 方法
    super();

    if (!document.getElementById(View.id)) {
      const style = document.createElement('style')
      style.id = View.id
      style.textContent = `${View.tag} {
        position: relative;
        display: block;
        height: 100%;
        width: 100%;
        overflow: visible;
        box-sizing: border-box;
      }`
      document.head.appendChild(style)
    }
  }
}

customElements.define(View.tag, View);
