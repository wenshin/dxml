import React from 'react';

export type Mask = 'none' | 'black' | 'white' | string;
export type AlignItemsType = 'justify' | 'start' | 'center' | 'end';

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

export type FloatPositionType =
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

interface CommonStyleAttributes {
  /**
   * 描边，格式: "size color style"
   * 设备像素 px；物理像素 pt；密度独立像素 dp；
   *
   * 1. style: solid | dash
   * 2. size: 不带单位，不带单位则默认是 px，同 Android 和 iOS 的 dp 单位
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
   * 阴影
   */
  shadow?: string;
}

export interface LayoutAtrributes extends CommonStyleAttributes {
  class?: string;
  /**
   * 子元素对齐，支持居中，头对齐、尾对齐和两端对齐
   */
  'align-items'?: AlignItemsType;
  /**
   * 子元素在父元素的位置
   */
  'place-items'?: PositionType;
  /**
   * 子元素布局类型，支持水平布局（horizontal）、垂直布局（vertical）、内联布局（inline）、网格布局（grid），
   * 默认为行布局（vertical），内联布局和行布局的差别在于内联布局支持换行。
   */
  'layout-items'?: 'vertical' | 'horizontal' | 'grid' | 'inline';
  /**
   * 1. 默认: 由子元素尺寸决定宽高
   * 2. 设置`width[ height]`:
   *    1. 可设置的值为数字（注意不带长度单位）和 auto，auto 表示使用默认值；
   *    2. 如果 height 值不提供，则默认 width 和 height 相同。
   */
  size?: 'auto' | string;
}

interface ViewAtrributes extends LayoutAtrributes {
  /**
   * 子元素之间的间隙
   */
  gap?: string;
  /**
   * 1. top|bottom|right|left
   * 2. top|bottom right|left
   * 2. top right bottom left
   */
  padding?: string;
  /**
   * 设置元素和兄弟元素的比例 stretch | 1 | 2 | 3，默认按照内容长度展开，不缩小也不放大
   */
  span?: 'stretch' | string;
  /**
   * 指向一个 component 标签的元素，暂时未实现
   */
  use?: string;
}

interface LayerAttributes {
  'z-index'?: string;
}

export interface ShapeAttributes extends LayoutAtrributes {
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
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'd-view': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & ViewAtrributes,
        HTMLElement
      >; // Normal web component
      'd-layer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> &
          ViewAtrributes &
          LayerAttributes & {
            mask?: Mask;
          },
        HTMLElement
      >; // Normal web component
      'd-shape': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & ShapeAttributes,
        HTMLElement
      >; // Normal web component
      'd-float': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> &
          LayoutAtrributes &
          LayerAttributes & {
            /**
             * float 元素在父元素的位置
             */
            position?: FloatPositionType;
          },
        HTMLElement
      >; // Normal web component
      'd-text': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          class?: string;
          /**
           * default is left
           */
          align?: AlignItemsType;
          /**
           * 文本是否是从左向右布局
           * default is 'true'
           */
          l2r?: 'true' | 'false';
          /**
           * the number of lines
           */
          'max-line'?: string;
          /**
           * default is letter
           */
          'break-line'?: 'letter' | 'white-space';
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
