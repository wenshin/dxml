import { View } from './view';
import { Float } from './float';
import { Layer } from './layer';
import { Text } from './text';
import { Shape } from './shape';

const style = `${View.tag}, ${Shape.tag}, ${Layer.tag}, ${Float.tag}, ${Text.tag} {
  position: relative;
  flex: none;
  box-sizing: border-box;
}

${Layer.tag},
${View.tag} {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-content: flex-start;
}

${View.tag}[size="auto"], ${Shape.tag} {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: initial;
  height: initial;
}

${View.tag}[size="auto"][layout-items], ${Shape.tag}[layout-items] {
  display: inline-flex;
  flex-wrap: wrap;
}
${Shape.tag}[layout-items="col"],
${View.tag}[size="auto"][layout-items="col"] {
  max-width: 100%;
}
${Shape.tag}[layout-items="row"],
${View.tag}[size="auto"][layout-items="row"] {
  max-height: 100%;
}

[layout-items] > *,[place-items] > *,[align-items] > * {
  width: initial;
  height: initial;
}

[align-items="center"] {
  align-items: center;
}
[align-items="start"] {
  align-items: flex-start;
}
[align-items="end"] {
  align-items: flex-end;
}
[layout-items="col"][align-items="justify"] > * {
  height: 100%;
}
[layout-items="row"][align-items="justify"] > * {
  width: 100%;
}

${Layer.tag} {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
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

[layout-items="inline"] {
  flex-wrap: wrap;
  overflow: auto;
}

[layout-items="col"], [layout-items="row"] {
  flex-wrap: nowrap;
}
[layout-items="col"] {
  flex-direction: row;
}
[layout-items="col"] > [span] {
  width: 1px;
  min-width: 1px;
  overflow: auto;
  flex: 1;
}
[layout-items="col"] > [span="stretch"] {
  overflow: auto;
  flex: 1;
}
[layout-items="row"] {
  flex-direction: column;
}
[layout-items="row"] > [span] {
  height: 1px;
  min-height: 1px;
  overflow: auto;
  flex: 1;
}
[layout-items="row"] > [span="stretch"] {
  overflow: auto;
  flex: 1;
}

[layout-items="col"][gap] > * {
  margin-bottom: 0;
}
[layout-items="row"][gap] > * {
  margin-right: 0;
}
[layout-items="col"][gap] > *:last-child,
[layout-items="row"][gap] > *:last-child {
  margin-right: 0;
  margin-bottom: 0;
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
[place-items="top"] {
  align-items: flex-start;
  justify-content: center;
}
[place-items="bottom"] {
  align-items: flex-end;
  justify-content: center;
}
[place-items="left"] {
  align-items: center;
  justify-content: flex-start;
}
[place-items="left-bottom"] {
  align-items: flex-end;
  justify-content: flex-start;
}
[place-items="right"] {
  align-items: center;
  justify-content: flex-end;
}
[place-items="right-top"] {
  align-items: flex-start;
  justify-content: flex-end;
}

[layout-items="row"][place-items="top"] {
  align-items: center;
  justify-content: flex-start;
}
[layout-items="row"][place-items="bottom"] {
  align-items: center;
  justify-content: flex-end;
}
[layout-items="row"][place-items="left"] {
  align-items: flex-start;
  justify-content: center;
}
[layout-items="row"][place-items="left-bottom"] {
  align-items: flex-start;
  justify-content: flex-end;
}
[layout-items="row"][place-items="right"] {
  align-items: flex-end;
  justify-content: center;
}
[layout-items="row"][place-items="right-top"] {
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
}`;

export default style;
