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

interface CommonStyleAttributes {
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
   * 子元素布局类型，支持行内布局（row）、列内布局（col）、内连布局（inline）、网格布局（grid），
   * 默认为内连布局，内连布局和行内布局的差别在于内连布局支持换行。
   */
  'layout-items'?: 'row' | 'col' | 'inline' | 'grid';
  /**
   * 1. 默认为，撑满整个父元素容器空间
   * 2. auto，由子元素尺寸决定
   * 3. width: width equal to height, if shape is polygon, it means equilateral sides;
   * 4. width height
   */
  size?: 'auto' | string;
}

interface ViewAtrributes extends LayoutAtrributes {
  /**
   * 子元素之间的间隙
   */
  gap?: string;
  /**
   * 指向一个 component 标签的元素
   */
  use?: string;
  /**
   * 设置元素和兄弟元素的比例 stretch | 1 | 2 | 3，默认按照内容长度展开，不缩小也不放大
   */
  span?: 'stretch' | string;
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
            position?: FloadPositionType;
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
