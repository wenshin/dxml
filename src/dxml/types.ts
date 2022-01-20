export type Mask = 'none' | 'black' | 'white' | string;

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

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'd-view': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          class?: string;
          layout?: 'row' | 'col' | 'inline';
          gap?: string;
          'place-items'?: PositionType;
        },
        HTMLElement
      >; // Normal web component
      'd-layer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          class?: string;
          mask?: Mask;
        },
        HTMLElement
      >; // Normal web component
      'd-row': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          class?: string;
          /**
           * stretch | 1 | 2 | 3
           */
          dimension?: 'stretch' | string;
          'place-items'?: PositionType;
          gap?: string;
        },
        HTMLElement
      >; // Normal web component
      'd-col': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          class?: string;
          /**
           * stretch | 1 | 2 | 3
           */
          dimension?: 'stretch' | string;
          'place-items'?: PositionType;
          gap?: string;
        },
        HTMLElement
      >; // Normal web component
      'd-elem': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          class?: string;
          layout?: 'row' | 'col';
          gap?: string;
          'place-items'?: PositionType;
        },
        HTMLElement
      >; // Normal web component
      'd-float': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          /**
           * 子元素在父元素的位置
           */
          'place-items'?: PositionType;
          /**
           * float 元素在父元素的位置
           */
          position?: FloadPositionType;
          layout?: 'row' | 'col';
          gap?: string;
          class?: string;
        },
        HTMLElement
      >; // Normal web component
      'd-text': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          class?: string;
          crop?: string; // 1px
        },
        HTMLElement
      >; // Normal web component
    }
  }
}
