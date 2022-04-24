import { View } from './view';
import { Float } from './float';
import { Layer } from './layer';
import { Text } from './text';
import { Shape } from './shape';

/**
 * design length
 *
 * px(device pixel)
 * 1dp = 1px * devicePixelRatio
 * 1dl(design length) = 4dp
 * 1pt(point) = 1/72 inches
 */

const style = `${View.tag}, ${Shape.tag}, ${Layer.tag}, ${Float.tag}, ${Text.tag} {
  position: relative;
  box-sizing: border-box;
}

${View.tag}, ${Shape.tag}, ${Layer.tag}, ${Float.tag} {
  flex: none;
}

${View.tag}, ${Float.tag} {
  overflow: auto;
}

${Shape.tag}, ${Layer.tag} {
  overflow: visible;
}

${Layer.tag},
${View.tag} {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: nowrap;
  /* 默认使用子元素行布局 */
  flex-direction: column;
}

${Layer.tag} > ${View.tag},
${View.tag} > ${View.tag} {
  width: initial;
  height: initial;
}

[size="auto"], ${Shape.tag} {
  display: inline-flex;
}

${Shape.tag}[layout-items="horizontal"],
[size="auto"][layout-items="horizontal"] {
  max-width: 100%;
}
${Shape.tag}[layout-items="vertical"],
[size="auto"][layout-items="vertical"] {
  max-height: 100%;
}

${Layer.tag} {
  position: absolute;
  top: 0;
  left: 0;
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
  flex-direction: row;
}

/*
[layout-items] > ${View.tag} {
  width: initial;
  height: initial;
}
*/

[layout-items="horizontal"] {
  flex-direction: row;
}
[layout-items="horizontal"] > [span="stretch"] {
  flex: 1;
}

${View.tag} > [span] {
  flex-basis: 1px;
  flex: 1;
}
${View.tag} > [span="stretch"],
[layout-items="vertical"] > [span="stretch"] {
  flex: 1;
}

${View.tag}[align-items="justify"] > ${View.tag},
[layout-items="vertical"][align-items="justify"] > ${View.tag} {
  width: 100%;
}

[layout-items="horizontal"][align-items="justify"] > ${View.tag} {
  width: initial;
  height: 100%;
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
[layout-items="horizontal"][place-items="top"] {
  align-items: flex-start;
  justify-content: center;
}
[layout-items="horizontal"][place-items="bottom"] {
  align-items: flex-end;
  justify-content: center;
}
[layout-items="horizontal"][place-items="left"] {
  align-items: center;
  justify-content: flex-start;
}
[layout-items="horizontal"][place-items="left-bottom"] {
  align-items: flex-end;
  justify-content: flex-start;
}
[layout-items="horizontal"][place-items="right"] {
  align-items: center;
  justify-content: flex-end;
}
[layout-items="horizontal"][place-items="right-top"] {
  align-items: flex-start;
  justify-content: flex-end;
}

[place-items="top"] {
  align-items: center;
  justify-content: flex-start;
}
[place-items="bottom"] {
  align-items: center;
  justify-content: flex-end;
}
[place-items="left"] {
  align-items: flex-start;
  justify-content: center;
}
[place-items="left-bottom"] {
  align-items: flex-start;
  justify-content: flex-end;
}
[place-items="right"] {
  align-items: flex-end;
  justify-content: center;
}
[place-items="right-top"] {
  align-items: flex-end;
  justify-content: flex-start;
}

${Float.tag} {
  position: absolute;
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
