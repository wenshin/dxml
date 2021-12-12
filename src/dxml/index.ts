import { getFlexAlignCSS } from './util';
import { View } from './view';
import { Row } from './row';
import { Col } from './col';
import { Elem } from './elem';
import { Float } from './float';
import { Layer } from './layer';
import { Text } from './text';

const CommonStyleId = 'd-common-id'
if (!document.getElementById(CommonStyleId)) {
  const style = document.createElement('style');
  style.id = CommonStyleId;

  style.textContent = `
  ${View.tag} {
    position: relative;
    height: 100%;
    width: 100%;
    display: block;
    box-sizing: border-box;
  }
  [layout="inline"] {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    align-content: flex-start;
  }
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
  ${Elem.tag}, ${Elem.tag}[layout] {
    display: inline-flex;
    width: initial;
    height: initial;
  }
  ${Elem.tag}[layout="row"] {
    max-width: 100%;
  }
  ${Elem.tag}[layout="col"] {
    max-height: 100%;
  }
  ${Elem.tag}[layout] > * {
    flex-grow: 0;
    flex-shrink: 1;
  }
  ${getFlexAlignCSS('')}
  ${Float.tag} {
    position: absolute;
    box-sizing: border-box;
    display: block;
    pointer-events: auto;
    /* default is left top */
    left: 0px;
    top: 0px;
  }
  ${Float.tag}[align="top"] {
    top: 0px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  ${Float.tag}[align="right-top"] {
    top: 0px;
    right: 0px;
    left: initial;
  }
  ${Float.tag}[align="right"] {
    left: initial;
    right: 0px;
    top: 50%;
    transform: translate(0, -50%);
  }
  ${Float.tag}[align="right-bottom"] {
    bottom: 0px;
    right: 0;
    top: initial;
    left: initial;
  }
  ${Float.tag}[align="bottom"] {
    bottom: 0px;
    top: initial;
    left: 50%;
    transform: translate(-50%, 0);
  }
  ${Float.tag}[align="left-bottom"] {
    left: 0px;
    top: initial;
    bottom: 0px;
  }
  ${Float.tag}[align="left"] {
    left: 0px;
    top: 50%;
    transform: translate(0, -50%);
  }
  ${Float.tag}[align="center"] {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  ${Layer.tag} {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    display: block;
    height: 100%;
    width: 100%;
    overflow: visible;
  }
  ${Layer.tag}[mask="none"] {
    pointer-events: none;
    background-color: transparent;
  }
  ${Layer.tag}[mask="white"] {
    background-color: #ffffffbb;
  }
  ${Layer.tag}[mask="black"] {
    background-color: #00000073;
  }
  ${Text.tag} {
    display: inline-block;
    box-sizing: border-box;
    overflow: visible;
  }`;
  document.head.appendChild(style);
}