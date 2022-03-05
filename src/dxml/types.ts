export type Mask = 'none' | 'black' | 'white' | string;
export type AlignItemsType = 'start' | 'center' | 'end';

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
  /**
   * 子元素布局类型
   */
  layout?: 'row' | 'col';
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
   * 子元素在父元素的位置
   */
  'place-items'?: PositionType;
  /**
   * 子元素布局类型
   */
  layout?: 'row' | 'col';
  /**
   * 设置元素和兄弟元素的比例 stretch | 1 | 2 | 3
   */
  fraction?: 'stretch' | string;
}

interface FloatAttributes {
  'z-index'?: string;
}

export interface ShapeAttributes {
  /**
   * default is retangle
   */
  type?:
    | 'triangle'
    // | 'rectangle'
    | 'pentagon'
    | 'polygon'
    | 'pentagram'
    | 'ellipse';
  /**
   * sides of polygons, great than 2.
   */
  sides?: number;
  /**
   * 描边，格式: "size color style"
   * 设备像素 px；物理像素 pt；密度独立像素 dp；
   *
   * 1. style: solid | dash
   * 2. size: 支持 px 和不带单位，web 平台 px 即 dp，不带单位则严格的 1 物理像素
   * 3. color: 颜色
   */
  stroke?: string;
  /**
   * 填充内容
   * 1. color
   * 2. gradient
   * 3. image url or image base64Url
   * 4. blur
   */
  fill?: string;
  /**
   * 1. width: width equal to height, if shape is polygon, it means equilateral sides;
   * 2. width height
   */
  size?: string;
  /**
   * 阴影
   */
  shadow?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'd-view': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & LayoutElementAtrributes,
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
      'd-shape': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> &
          InlineLayoutElementAtrributes &
          ShapeAttributes,
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
