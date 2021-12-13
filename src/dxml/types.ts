import { PositionType } from './util';

type Mask = 'none' | 'black' | 'white' | string;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'd-view': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        class?: string;
        layout?: 'row' | 'col' | 'inline';
        gap?: string;
        'align-items'?: PositionType;
      }, HTMLElement>; // Normal web component
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
          'align-items'?: PositionType;
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
          'align-items'?: PositionType;
          gap?: string;
        },
        HTMLElement
      >; // Normal web component
      'd-elem': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        class?: string;
        layout?: 'row' | 'col';
        gap?: string;
        'align-items'?: PositionType;
      }, HTMLElement>; // Normal web component
      'd-text': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          class?: string;
          crop?: string; // 1px
        },
        HTMLElement
      >; // Normal web component
      'd-float': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { align?: PositionType; class?: string },
        HTMLElement
      >; // Normal web component
    }
  }
}
