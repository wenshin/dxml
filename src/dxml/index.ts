import './layer';
import './view';
import './float';
import './col';
import './row';
import './text';
import { getFlexAlignCSS } from './util';
import { Row } from './row';
import { Col } from './col';

const CommonStyleId = 'd-common-id'
if (!document.getElementById(CommonStyleId)) {
  const style = document.createElement('style');
  style.id = CommonStyleId;

  style.textContent = `
  ${Row.tag}, ${Col.tag}, [layout="row"], [layout="col"] {
    position: relative;
    display: flex;
    box-sizing: border-box;
    flex: none;
  }
  ${Row.tag}, [layout="row"] {
    flex-direction: row;
    width: 100%;
  }
  ${Row.tag} > [dimension], [layout="row"] > [dimension] {
    width: 1px;
    min-width: 1px;
    overflow: auto;
    flex: 1;
  }
  ${Row.tag} > [dimension="stretch"], [layout="row"] > [dimension="stretch"] {
    overflow: auto;
    flex: 1;
  }
  ${Col.tag}, [layout="col"] {
    flex-direction: column;
    height: 100%;
  }
  ${Col.tag} > [dimension], [layout="col"] > [dimension] {
    height: 1px;
    min-height: 1px;
    overflow: auto;
    flex: 1;
  }
  ${Col.tag} > [dimension="stretch"], [layout="col"] > [dimension="stretch"] {
    overflow: auto;
    flex: 1;
  }
  ${getFlexAlignCSS('')}`;
  document.head.appendChild(style);
}