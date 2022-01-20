import { insertStyleElement } from './util';
import { View } from './view';
import { Row } from './row';
import { Col } from './col';
import { Elem } from './elem';
import { Float } from './float';
import { Layer } from './layer';
import { Text } from './text';

export * from './types';

const CommonStyleId = 'd-common-id';
insertStyleElement(
  CommonStyleId,
  `${View.tag} {
  position: relative;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
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
${Row.tag}[gap] > *,
[layout="row"][gap] > * {
  margin-bottom: 0;
}
${Col.tag}[gap] > *,
[layout="col"][gap] > * {
  margin-right: 0;
}
[layout="row"][gap] > *:last-child,
${Row.tag}[gap] > *:last-child,
[layout="col"][gap] > *:last-child,
${Col.tag}[gap] > *:last-child {
  margin-right: 0;
  margin-bottom: 0;
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

[place-items] {
  display: flex;
}
[place-items="center"] {
  align-items: center;
  justify-content: center;
}
[place-items="left-top"] {
  align-items: flex-start;
  justify-content: flex-start;
}
[place-items="right-bottom"] {
  align-items: flex-end;
  justify-content: flex-end;
}
${Row.tag}[place-items="top"],
[layout="row"][place-items="top"] {
  align-items: flex-start;
  justify-content: center;
}
${Row.tag}[place-items="bottom"],
[layout="row"][place-items="bottom"] {
  align-items: flex-end;
  justify-content: center;
}
${Row.tag}[place-items="left"],
[layout="row"][place-items="left"] {
  align-items: center;
  justify-content: flex-start;
}
${Row.tag}[place-items="left-bottom"],
[layout="row"][place-items="left-bottom"] {
  align-items: flex-end;
  justify-content: flex-start;
}
${Row.tag}[place-items="right"],
[layout="row"][place-items="right"] {
  align-items: center;
  justify-content: flex-end;
}
${Row.tag}[place-items="right-top"],
[layout="row"][place-items="right-top"] {
  align-items: flex-start;
  justify-content: flex-end;
}

${Col.tag}[place-items="top"],
[layout="col"][place-items="top"] {
  align-items: center;
  justify-content: flex-start;
}
${Col.tag}[place-items="bottom"],
[layout="col"][place-items="bottom"] {
  align-items: center;
  justify-content: flex-end;
}
${Col.tag}[place-items="left"],
[layout="col"][place-items="left"] {
  align-items: flex-start;
  justify-content: center;
}
${Col.tag}[place-items="left-bottom"],
[layout="col"][place-items="left-bottom"] {
  align-items: flex-start;
  justify-content: flex-end;
}
${Col.tag}[place-items="right"],
[layout="col"][place-items="right"] {
  align-items: flex-end;
  justify-content: center;
}
${Col.tag}[place-items="right-top"],
[layout="col"][place-items="right-top"] {
  align-items: flex-end;
  justify-content: flex-start;
}

${Float.tag} {
  position: absolute;
  box-sizing: border-box;
  display: block;
  pointer-events: auto;
  /* default is left top */
  left: 0px;
  top: 0px;
}
${Float.tag}[position="left-top-outside"] {
  transform: translate(0, -100%);
}
${Float.tag}[position="left-top-corner-outside"] {
  transform: translate(-100%, -100%);
}
${Float.tag}[position="top-left-outside"] {
  transform: translate(-100%, 0);
}
${Float.tag}[position="top"] {
  top: 0px;
  left: 50%;
  transform: translate(-50%, 0);
}
${Float.tag}[position="top-outside"] {
  top: 0px;
  left: 50%;
  transform: translate(-50%, -100%);
}
${Float.tag}[position="right-top"] {
  top: 0px;
  right: 0px;
  left: initial;
}
${Float.tag}[position="right-top-outside"] {
  top: 0px;
  right: 0px;
  left: initial;
  transform: translate(0, -100%);
}
${Float.tag}[position="right-top-corner-outside"] {
  top: 0px;
  right: 0px;
  left: initial;
  transform: translate(100%, -100%);
}
${Float.tag}[position="top-right-outside"] {
  top: 0px;
  right: 0px;
  left: initial;
  transform: translate(100%, 0);
}
${Float.tag}[position="right"] {
  left: initial;
  right: 0px;
  top: 50%;
  transform: translate(0, -50%);
}
${Float.tag}[position="right-outside"] {
  left: initial;
  right: 0px;
  top: 50%;
  transform: translate(100%, -50%);
}
${Float.tag}[position="right-bottom"] {
  bottom: 0px;
  right: 0;
  top: initial;
  left: initial;
}
${Float.tag}[position="right-bottom-outside"] {
  bottom: 0px;
  right: 0;
  top: initial;
  left: initial;
  transform: translate(0, 100%);
}
${Float.tag}[position="right-bottom-corner-outside"] {
  bottom: 0px;
  right: 0;
  top: initial;
  left: initial;
  transform: translate(100%, 100%);
}
${Float.tag}[position="bottom-right-outside"] {
  bottom: 0px;
  right: 0;
  top: initial;
  left: initial;
  transform: translate(100%, 0);
}
${Float.tag}[position="bottom"] {
  bottom: 0px;
  top: initial;
  left: 50%;
  transform: translate(-50%, 0);
}
${Float.tag}[position="bottom-outside"] {
  bottom: 0px;
  top: initial;
  left: 50%;
  transform: translate(-50%, 100%);
}
${Float.tag}[position="left-bottom"] {
  left: 0px;
  top: initial;
  bottom: 0px;
}
${Float.tag}[position="left-bottom-outside"] {
  left: 0px;
  top: initial;
  bottom: 0px;
  transform: translate(0, 100%);
}
${Float.tag}[position="left-bottom-corner-outside"] {
  left: 0px;
  top: initial;
  bottom: 0px;
  transform: translate(-100%, 100%);
}
${Float.tag}[position="bottom-left-outside"] {
  left: 0px;
  top: initial;
  bottom: 0px;
  transform: translate(-100%, 0);
}
${Float.tag}[position="left"] {
  left: 0px;
  top: 50%;
  transform: translate(0, -50%);
}
${Float.tag}[position="left-outside"] {
  left: 0px;
  top: 50%;
  transform: translate(-100%, -50%);
}
${Float.tag}[position="center"] {
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
}
${Text.tag}::before, ${Text.tag}::after {
  content: '';
  display: block;
  height: 0;
  width: 0;
}
${Text.tag} .text-corp-elem {
  margin:0;
  padding:0;
  width: 0;
  display: inline-block;
  overflow: hidden;
}`
);
