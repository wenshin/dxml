export type Mask = 'none' | 'black' | 'white' | string;
export type AlignItemsType = 'start' | 'middle' | 'end';

export type PositionType =
  | 'top'
  | 'right-top'
  | 'right'
  | 'right-bottom'
  | 'bottom'
  | 'left-bottom'
  | 'left'
  | 'left-top'
  | 'center';

export type FloadPositionType =
  | PositionType
  | 'top-outside'
  | 'right-top-outside'
  | 'right-top-corner-outside'
  | 'top-right-outside'
  | 'right-outside'
  | 'right-bottom-outside'
  | 'right-bottom-corner-outside'
  | 'bottom-right-outside'
  | 'bottom-outside'
  | 'bottom-left-outside'
  | 'left-bottom-outside'
  | 'left-bottom-corner-outside'
  | 'left-outside'
  | 'top-left-outside'
  | 'left-top-outside'
  | 'left-top-corner-outside';

interface LayoutElementAtrributes {
  class?: string;
  /**
   * 子元素之间的间隙
   */
  gap?: string;
  /**
   * 子元素在父元素的位置
   */
  'place-items'?: PositionType;
}

interface InlineLayoutElementAtrributes {
  class?: string;
  /**
   * 子元素之间的间隙
   */
  gap?: string;
  /**
   * 子元素对齐
   */
  'align-items'?: AlignItemsType;
  /**
   * 子元素布局类型
   */
  layout?: 'row' | 'col';
}

interface FloatAttributes {
  'z-index'?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'd-view': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> &
          LayoutElementAtrributes & {
            /**
             * 子元素布局类型
             */
            layout?: 'row' | 'col';
          },
        HTMLElement
      >; // Normal web component
      'd-layer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> &
          LayoutElementAtrributes &
          FloatAttributes & {
            'z-index'?: string;
            mask?: Mask;
          },
        HTMLElement
      >; // Normal web component
      'd-row': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> &
          LayoutElementAtrributes & {
            /**
             * stretch | 1 | 2 | 3
             */
            fraction?: 'stretch' | string;
          },
        HTMLElement
      >; // Normal web component
      'd-col': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> &
          LayoutElementAtrributes & {
            /**
             * stretch | 1 | 2 | 3
             */
            fraction?: 'stretch' | string;
          },
        HTMLElement
      >; // Normal web component
      'd-content': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & InlineLayoutElementAtrributes,
        HTMLElement
      >; // Normal web component
      'd-float': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> &
          InlineLayoutElementAtrributes &
          FloatAttributes & {
            /**
             * float 元素在父元素的位置
             */
            position?: FloadPositionType;
          },
        HTMLElement
      >; // Normal web component
      'd-text': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          class?: string;
          /**
           * 裁剪文本上下的行高空白
           */
          crop?: 'auto' | string; // 1px
        },
        HTMLElement
      >; // Normal web component
    }
  }
}
