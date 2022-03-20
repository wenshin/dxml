import { insertStyleElement } from './util';
import style from './style';

export * from './types';

const STYLE_ID = 'd-gdml-style-id';
insertStyleElement(STYLE_ID, style);
