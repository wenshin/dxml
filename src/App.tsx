import React from 'react';
import './App.css';
import { Code } from './Code';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <section className="text-center">
        <h1>DXML (Design XML) </h1>
        <p>一种简洁、高效、符合设计直觉的布局描述语言</p>
      </section>
      <h1>实例</h1>
      <section>
        <h2>
          <d-text crop="2px">等比例列布局</d-text>
        </h2>
        <div className="case-container" id="equal-col">
          <d-view layout="row" gap="12px">
            <d-col fraction="1" place-items="center">
              <d-row place-items="center">
                <div>A</div>
                <div>A</div>
              </d-row>
            </d-col>
            <d-col fraction="1" place-items="center">
              BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
            </d-col>
            <d-col fraction="1" place-items="center">
              CC
            </d-col>
          </d-view>
        </div>
        <Code targetId="equal-col" />
      </section>
      <section>
        <h2>
          <d-text crop="2px">不同比例列布局</d-text>
        </h2>
        <div className="case-container" id="unequal-col">
          <d-view layout="row" gap="12px">
            <d-col fraction="1" place-items="center">
              <span>AAAA</span>
              <span>A</span>
            </d-col>
            <d-col fraction="2" place-items="center">
              BB
            </d-col>
            <d-col fraction="2" place-items="center">
              CC
            </d-col>
          </d-view>
        </div>
        <Code targetId="unequal-col" />
      </section>
      <section>
        <h2>
          <d-text crop="2px">等比例行布局</d-text>
        </h2>
        <div className="case-container" id="equal-row">
          <d-view layout="col" gap="12px">
            <d-row fraction="1" place-items="left">
              <d-shape
                type="ellipse"
                size="16px 32px"
                stroke="solid 1px #a6e22e"
                place-items="center"
              >
                A
              </d-shape>
              <d-shape
                size="16px"
                stroke="solid 1px #a6e22e"
                place-items="center"
              >
                A
              </d-shape>
            </d-row>
            <d-row fraction="1" place-items="left">
              BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
            </d-row>
            <d-row fraction="1" place-items="left">
              CC
            </d-row>
          </d-view>
        </div>
        <Code targetId="equal-row" />
      </section>
      <section>
        <h2>
          <d-text crop="2px">不同比例行布局</d-text>
        </h2>
        <div className="case-container" id="unequal-row">
          <d-view layout="col" gap="12px">
            <d-row fraction="2" place-items="center">
              <d-row place-items="center">
                <d-text>A</d-text>
                <d-text>A</d-text>
              </d-row>
            </d-row>
            <d-row fraction="1" place-items="center">
              BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
              BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
              BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
            </d-row>
            <d-row fraction="2" place-items="center">
              CC
            </d-row>
          </d-view>
        </div>
        <Code targetId="unequal-row" />
      </section>
      <section>
        <h2>
          <d-text crop="2px">水平三明治布局</d-text>
        </h2>
        <div className="case-container" id="hsandwich">
          <d-view layout="row" gap="12px">
            <d-col place-items="center">AAA</d-col>
            <d-col fraction="stretch" place-items="center">
              B
            </d-col>
            <d-col place-items="center">C</d-col>
          </d-view>
        </div>
        <Code targetId="hsandwich" />
      </section>
      <section>
        <h2>
          <d-text crop="2px">垂直三明治布局</d-text>
        </h2>
        <div className="case-container" id="vsandwich">
          <d-view layout="col" gap="12px">
            <d-row place-items="center">A</d-row>
            <d-row fraction="stretch" place-items="center">
              B
            </d-row>
            <d-row place-items="center">C</d-row>
          </d-view>
        </div>
        <Code targetId="vsandwich" />
      </section>
      <section>
        <h2>
          <d-text crop="2px">圣杯布局</d-text>
        </h2>
        <div className="case-container" id="holy-grail">
          <d-view layout="col" gap="10px">
            <d-row place-items="center">Header</d-row>
            <d-row
              fraction="stretch"
              gap="10px"
              style={{ backgroundColor: 'transparent' }}
            >
              <d-col place-items="center">SideBar</d-col>
              <d-col fraction="stretch" place-items="center">
                Content
              </d-col>
              <d-col place-items="center">SideBar</d-col>
            </d-row>
            <d-row place-items="center">Footer</d-row>
          </d-view>
        </div>
        <Code targetId="holy-grail" />
      </section>
      <section>
        <h2>
          <d-text crop="2px">行布局设置子元素位置</d-text>
        </h2>
        <div className="case-container row-col-align-case" id="row-place-items">
          <d-view layout="row" gap="12px">
            <d-col fraction="1" gap="8px">
              <d-row fraction="1" class="border" place-items="left-top">
                <d-shape stroke="solid 1px #ffe22e" size="12px 30px"></d-shape>
                <d-shape stroke="solid 1px #a6e22e" place-items="center">
                  left-top
                </d-shape>
              </d-row>
              <d-row fraction="1" class="border" place-items="left">
                <d-shape stroke="solid 1px #ffe22e" size="12px 30px"></d-shape>
                <d-shape stroke="solid 1px #a6e22e" place-items="center">
                  left
                </d-shape>
              </d-row>
              <d-row fraction="1" class="border" place-items="left-bottom">
                <d-shape stroke="solid 1px #ffe22e" size="12px 30px"></d-shape>
                <d-shape stroke="solid 1px #a6e22e" place-items="center">
                  left-bottom
                </d-shape>
              </d-row>
            </d-col>
            <d-col fraction="1" gap="8px">
              <d-row fraction="1" class="border" place-items="top">
                <d-shape stroke="solid 1px #ffe22e" size="12px 30px"></d-shape>
                <d-shape stroke="solid 1px #a6e22e" place-items="center">
                  top
                </d-shape>
              </d-row>
              <d-row fraction="1" class="border" place-items="center">
                <d-shape stroke="solid 1px #ffe22e" size="12px 30px"></d-shape>
                <d-shape stroke="solid 1px #a6e22e" place-items="center">
                  center
                </d-shape>
              </d-row>
              <d-row fraction="1" class="border" place-items="bottom">
                <d-shape stroke="solid 1px #ffe22e" size="12px 30px"></d-shape>
                <d-shape stroke="solid 1px #a6e22e" place-items="center">
                  right
                </d-shape>
              </d-row>
            </d-col>
            <d-col fraction="1" gap="8px">
              <d-row fraction="1" class="border" place-items="right-top">
                <d-shape stroke="solid 1px #ffe22e" size="12px 30px"></d-shape>
                <d-shape stroke="solid 1px #a6e22e" place-items="center">
                  right-top
                </d-shape>
              </d-row>
              <d-row fraction="1" class="border" place-items="right">
                <d-shape stroke="solid 1px #ffe22e" size="12px 30px"></d-shape>
                <d-shape stroke="solid 1px #a6e22e" place-items="center">
                  right
                </d-shape>
              </d-row>
              <d-row fraction="1" class="border" place-items="right-bottom">
                <d-shape stroke="solid 1px #ffe22e" size="12px 30px"></d-shape>
                <d-shape stroke="solid 1px #a6e22e" place-items="center">
                  right-bottom
                </d-shape>
              </d-row>
            </d-col>
          </d-view>
        </div>
        <Code targetId="row-place-items" />
      </section>
      <section>
        <h2>
          <d-text crop="2px">列布局设置子元素位置</d-text>
        </h2>
        <div
          className="case-container row-col-align-case"
          id="col-place-items"
          style={{ height: '300px' }}
        >
          <d-view layout="col" gap="12px">
            <d-row fraction="1" gap="8px">
              <d-col fraction="1" class="border" place-items="left-top">
                <d-shape
                  type="ellipse"
                  stroke="solid 1px #a6e22e"
                  size="24px"
                  fill="#a6e22e30"
                  place-items="center"
                >
                  A
                </d-shape>
                <d-shape
                  type="ellipse"
                  stroke="solid 1px #a6e22e"
                  place-items="center"
                  style={{ padding: '2px 4px' }}
                >
                  left-top
                </d-shape>
              </d-col>
              <d-col fraction="1" class="border" place-items="top">
                <d-shape
                  type="ellipse"
                  stroke="solid 1px #a6e22e"
                  size="24px"
                  fill="#a6e22e30"
                  place-items="center"
                >
                  A
                </d-shape>
                <d-shape
                  type="ellipse"
                  stroke="solid 1px #a6e22e"
                  place-items="center"
                  style={{ padding: '2px 4px' }}
                >
                  top
                </d-shape>
              </d-col>
              <d-col fraction="1" class="border" place-items="right-top">
                <d-shape
                  type="ellipse"
                  stroke="solid 1px #a6e22e"
                  size="24px"
                  fill="#a6e22e30"
                  place-items="center"
                >
                  A
                </d-shape>
                <d-shape
                  type="ellipse"
                  stroke="solid 1px #a6e22e"
                  place-items="center"
                  style={{ padding: '2px 4px' }}
                >
                  right-top
                </d-shape>
              </d-col>
            </d-row>
            <d-row fraction="1" gap="8px">
              <d-col fraction="1" class="border" place-items="left">
                <d-shape
                  type="ellipse"
                  stroke="solid 1px #a6e22e"
                  size="24px"
                  fill="#a6e22e30"
                  place-items="center"
                >
                  A
                </d-shape>
                <d-shape
                  type="ellipse"
                  stroke="solid 1px #a6e22e"
                  place-items="center"
                  style={{ padding: '2px 4px' }}
                >
                  left
                </d-shape>
              </d-col>
              <d-col fraction="1" class="border" place-items="center">
                <d-shape
                  type="ellipse"
                  stroke="solid 1px #a6e22e"
                  size="24px"
                  fill="#a6e22e30"
                  place-items="center"
                >
                  A
                </d-shape>
                <d-shape
                  type="ellipse"
                  stroke="solid 1px #a6e22e"
                  place-items="center"
                  style={{ padding: '2px 4px' }}
                >
                  center
                </d-shape>
              </d-col>
              <d-col fraction="1" class="border" place-items="right">
                <d-shape
                  type="ellipse"
                  stroke="solid 1px #a6e22e"
                  size="24px"
                  fill="#a6e22e30"
                  place-items="center"
                >
                  A
                </d-shape>
                <d-shape
                  type="ellipse"
                  stroke="solid 1px #a6e22e"
                  place-items="center"
                  style={{ padding: '2px 4px' }}
                >
                  right
                </d-shape>
              </d-col>
            </d-row>
            <d-row fraction="1" gap="8px">
              <d-col fraction="1" class="border" place-items="left-bottom">
                <d-shape
                  type="ellipse"
                  stroke="solid 1px #a6e22e"
                  size="24px"
                  fill="#a6e22e30"
                  place-items="center"
                >
                  A
                </d-shape>
                <d-shape
                  type="ellipse"
                  stroke="solid 1px #a6e22e"
                  place-items="center"
                  style={{ padding: '2px 4px' }}
                >
                  left-bottom
                </d-shape>
              </d-col>
              <d-col fraction="1" class="border" place-items="bottom">
                <d-shape
                  type="ellipse"
                  stroke="solid 1px #a6e22e"
                  size="24px"
                  fill="#a6e22e30"
                  place-items="center"
                >
                  A
                </d-shape>
                <d-shape
                  type="ellipse"
                  stroke="solid 1px #a6e22e"
                  place-items="center"
                  style={{ padding: '2px 4px' }}
                >
                  bottom
                </d-shape>
              </d-col>
              <d-col fraction="1" class="border" place-items="right-bottom">
                <d-shape
                  type="ellipse"
                  stroke="solid 1px #a6e22e"
                  size="24px"
                  fill="#a6e22e30"
                  place-items="center"
                >
                  A
                </d-shape>
                <d-shape
                  type="ellipse"
                  stroke="solid 1px #a6e22e"
                  place-items="center"
                  style={{ padding: '2px 4px' }}
                >
                  right-bottom
                </d-shape>
              </d-col>
            </d-row>
          </d-view>
        </div>
        <Code targetId="col-place-items" />
      </section>
      <section>
        <h2>
          <d-text crop="2px">子元素对齐</d-text>
        </h2>
        <div className="case-container row-col-align-case" id="align-items">
          <d-view layout="col" gap="12px">
            <d-row fraction="1" gap="8px">
              <d-col fraction="1" class="border" place-items="top">
                <d-content class="bg-color" layout="col" align-items="start">
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-content>
              </d-col>
              <d-col fraction="1" class="border" place-items="top">
                <d-content class="bg-color" layout="col" align-items="center">
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-content>
              </d-col>
              <d-col fraction="1" class="border" place-items="top">
                <d-content class="bg-color" layout="col" align-items="end">
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-content>
              </d-col>
            </d-row>
            <d-row fraction="1" gap="8px">
              <d-col fraction="1" class="border" place-items="left">
                <d-content class="bg-color" layout="col" align-items="start">
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-content>
              </d-col>
              <d-col fraction="1" class="border" place-items="left">
                <d-content class="bg-color" layout="col" align-items="center">
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-content>
              </d-col>
              <d-col fraction="1" class="border" place-items="left">
                <d-content class="bg-color" layout="col" align-items="end">
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-content>
              </d-col>
            </d-row>
            <d-row fraction="1" gap="8px">
              <d-col fraction="1" class="border" place-items="right">
                <d-content class="bg-color" layout="col" align-items="start">
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-content>
              </d-col>
              <d-col fraction="1" class="border" place-items="right">
                <d-content class="bg-color" layout="col" align-items="center">
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-content>
              </d-col>
              <d-col fraction="1" class="border" place-items="right">
                <d-content class="bg-color" layout="col" align-items="end">
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-content>
              </d-col>
            </d-row>
          </d-view>
        </div>
        <Code targetId="align-items" />
      </section>
      <section>
        <h2>
          <d-text crop="2px">浮动元素定位</d-text>
        </h2>
        <div
          className="case-container"
          style={{ padding: '40px 60px' }}
          id="float"
        >
          <d-view style={{ background: '#565656' }}>
            <d-float class="float-square" position="top"></d-float>
            <d-float class="float-square" position="top-outside"></d-float>
            <d-float class="float-square" position="right-top"></d-float>
            <d-float
              class="float-square"
              position="right-top-outside"
            ></d-float>
            <d-float
              class="float-square"
              position="right-top-corner-outside"
            ></d-float>
            <d-float
              class="float-square"
              position="top-right-outside"
            ></d-float>
            <d-float class="float-square" position="right"></d-float>
            <d-float class="float-square" position="right-outside"></d-float>
            <d-float class="float-square" position="right-bottom"></d-float>
            <d-float
              class="float-square"
              position="bottom-right-outside"
            ></d-float>
            <d-float
              class="float-square"
              position="right-bottom-outside"
            ></d-float>
            <d-float
              class="float-square"
              position="right-bottom-corner-outside"
            ></d-float>
            <d-float class="float-square" position="bottom"></d-float>
            <d-float class="float-square" position="bottom-outside"></d-float>
            <d-float class="float-square" position="left-bottom"></d-float>
            <d-float
              class="float-square"
              position="left-bottom-outside"
            ></d-float>
            <d-float
              class="float-square"
              position="left-bottom-corner-outside"
            ></d-float>
            <d-float
              class="float-square"
              position="bottom-left-outside"
            ></d-float>
            <d-float class="float-square" position="left"></d-float>
            <d-float class="float-square" position="left-outside"></d-float>
            <d-float class="float-square" position="left-top"></d-float>
            <d-float class="float-square" position="top-left-outside"></d-float>
            <d-float class="float-square" position="left-top-outside"></d-float>
            <d-float
              class="float-square"
              position="left-top-corner-outside"
            ></d-float>
            <d-float class="float-square" position="center"></d-float>
          </d-view>
        </div>
        <Code targetId="float" />
      </section>
      <section>
        <h2>
          <d-text crop="2px">内连元素布局</d-text>
        </h2>
        <div className="case-container" id="inline">
          <d-view gap="12px 16px">
            <d-text className="inline-elem1">test</d-text>
            <d-content class="inline-elem2" layout="row" gap="10px">
              <d-col place-items="center" align-items="start">
                <d-content>AAA</d-content>
                <d-content>B</d-content>
                <d-content>C</d-content>
              </d-col>
              <d-col place-items="center">B</d-col>
              <d-col place-items="center">C</d-col>
            </d-content>
            <d-content layout="col" gap="10px">
              <d-text>A</d-text>
              <d-text>B</d-text>
              <d-text>C</d-text>
            </d-content>
            <d-content class="inline-elem3" layout="row" gap="10px">
              <d-col place-items="center">A</d-col>
              <d-col place-items="center">B</d-col>
              <d-col place-items="center">C</d-col>
            </d-content>
          </d-view>
        </div>
        <Code targetId="inline" />
      </section>
      <section>
        <h2>
          <d-text crop="2px">自动修正文本 line height 导致的边距问题</d-text>
        </h2>
        <div id="text">
          <d-row gap="12px">
            <d-text crop="1px">
              DXML 设计了更适合设计稿直接转布局代码的一套标签
            </d-text>
            <d-text crop="1px">
              DXML Design for a better layout markable language from design to
              developer
            </d-text>
            <d-text crop="auto">
              DXML Design for a better layout markable language from design to
              developer
            </d-text>
          </d-row>
        </div>
        <Code targetId="text" />
        <p>
          提示⚠️⚠️⚠️：d-text 标签设置 crop 为 auto
          时，会通过插入新的节点来获得文本行高。由于该功能会对首屏渲染有 10ms
          以上的性能影响，如果把本页面中的标题都去掉 crop 属性，影响在 30ms
          左右，所以暂时未实现。
        </p>
      </section>
      <h1>
        <d-text crop="2px">标签特性</d-text>
      </h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>标签</th>
              <th>
                子元素行列布局
                <br />
                layout
              </th>
              <th>
                子元素位置
                <br />
                place-items
              </th>
              <th>
                子元素对齐
                <br />
                align-items
              </th>
              <th style={{ width: 200 }}>宽高</th>
              <th>浮动</th>
              <th style={{ width: 200 }}>其它功能</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>view</td>
              <td className="text-left">
                <ol>
                  <li>行布局</li>
                  <li>列布局</li>
                </ol>
              </td>
              <td>✅</td>
              <td>❌</td>
              <td className="text-left">
                <ol>
                  <li>宽度，占满父容器</li>
                  <li>高度，占满父容器</li>
                </ol>
              </td>
              <td>❌</td>
              <td>❌</td>
            </tr>
            <tr>
              <td>layer</td>
              <td className="text-left">
                同 <d-text class="hljs-string">view</d-text>
              </td>
              <td>✅</td>
              <td>❌</td>
              <td className="text-left">
                同 <d-text class="hljs-string">view</d-text>
              </td>
              <td>✅</td>
              <td>mask 设置遮罩</td>
            </tr>
            <tr>
              <td>row</td>
              <td className="text-left">
                <ol>
                  <li>不需设置属性，自带行布局</li>
                </ol>
              </td>
              <td>✅</td>
              <td>❌</td>
              <td className="text-left">
                <ol>
                  <li>宽度，占满父容器</li>
                  <li>
                    高度，可以
                    <ol>
                      <li>使用内容高度</li>
                      <li>fraction 设置占父容器比例</li>
                      <li>height 属性设置高度</li>
                    </ol>
                  </li>
                </ol>
              </td>
              <td>❌</td>
              <td>❌</td>
            </tr>
            <tr>
              <td>col</td>
              <td className="text-left">
                <ol>
                  <li>不需设置属性，自带行布局</li>
                </ol>
              </td>
              <td>✅</td>
              <td>❌</td>
              <td className="text-left">
                <ol>
                  <li>
                    宽度，可以
                    <ol>
                      <li>使用内容宽度</li>
                      <li>fraction 设置占父容器比例</li>
                      <li>width 属性设置宽度</li>
                    </ol>
                  </li>
                  <li>高度，占满父容器</li>
                </ol>
              </td>
              <td>❌</td>
              <td>❌</td>
            </tr>
            <tr>
              <td>content</td>
              <td className="text-left">
                <ol>
                  <li>行布局</li>
                  <li>列布局</li>
                </ol>
              </td>
              <td>❌</td>
              <td>✅</td>
              <td className="text-left">
                <ol>
                  <li>宽度，通过 width 指定或者由子元素宽度决定</li>
                  <li>高度，通过 height 指定或者由子元素高度决定</li>
                </ol>
              </td>
              <td>❌</td>
              <td>❌</td>
            </tr>
            <tr>
              <td>float</td>
              <td className="text-left">
                <ol>
                  <li>行布局</li>
                  <li>列布局</li>
                </ol>
              </td>
              <td>❌</td>
              <td>✅</td>
              <td className="text-left">
                同 <d-text class="hljs-string">content</d-text>
              </td>
              <td>✅</td>
              <td>通过 position 属性设置自身在父元素的位置</td>
            </tr>
            <tr>
              <td>text</td>
              <td>❌</td>
              <td>❌</td>
              <td>❌</td>
              <td className="text-left">
                同 <d-text class="hljs-string">content</d-text>
              </td>
              <td>❌</td>
              <td>通过 crop 属性可以裁剪文本上下行高产生的多余空间</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1>
        <d-text crop="2px">标签属性</d-text>
      </h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>属性</th>
              <th>功能</th>
              <th>标签</th>
              <th>值</th>
              <th>描述</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={3}>layout</td>
              <td rowSpan={3}>父元素设置子元素布局类型</td>
              <td rowSpan={3}>
                <d-text class="hljs-string">view</d-text> |{' '}
                <d-text class="hljs-string">layer</d-text> |{' '}
                <d-text class="hljs-string">content</d-text> |{' '}
                <d-text class="hljs-string">float</d-text>
              </td>
              <td>不设置</td>
              <td>默认子元素可换行</td>
            </tr>
            <tr>
              <td>row</td>
              <td>行布局，子元素在一行内，不能换行。</td>
            </tr>
            <tr>
              <td>col</td>
              <td>列布局，子元素在一列内，不能换行。</td>
            </tr>
            <tr>
              <td rowSpan={10}>place-items</td>
              <td rowSpan={10}>父元素设置子元素位置</td>
              <td rowSpan={10}>
                <d-text class="hljs-string">view</d-text> |{' '}
                <d-text class="hljs-string">layer</d-text> |{' '}
                <d-text class="hljs-string">col</d-text> |{' '}
                <d-text class="hljs-string">row</d-text>
              </td>
              <td>不设置</td>
              <td>同 left-top</td>
            </tr>
            <tr>
              <td>left-top</td>
              <td>所有子元素都会在父元素的左上角</td>
            </tr>
            <tr>
              <td>top</td>
              <td>所有子元素都会在父元素的顶部中间</td>
            </tr>
            <tr>
              <td>right-top</td>
              <td>所有子元素都会在父元素的右上角</td>
            </tr>
            <tr>
              <td>right</td>
              <td>所有子元素都会在父元素的右边中间，并且子元素之间右对齐</td>
            </tr>
            <tr>
              <td>right-bottom</td>
              <td>所有子元素都会在父元素的右下角，并且子元素之间右对齐</td>
            </tr>
            <tr>
              <td>bottom</td>
              <td>所有子元素都会在父元素的底部中间，并且子元素之间底部对齐</td>
            </tr>
            <tr>
              <td>left-bottom</td>
              <td>所有子元素都会在父元素的左下角，并且子元素之间左对齐</td>
            </tr>
            <tr>
              <td>left</td>
              <td>所有子元素都会在父元素的左边中间，并且子元素之间左对齐</td>
            </tr>
            <tr>
              <td>center</td>
              <td>所有子元素都会在父元素的中点，并且子元素之间居中对齐</td>
            </tr>
            <tr>
              <td rowSpan={4}>align-items</td>
              <td rowSpan={4}>子元素设置自身在父元素的位置</td>
              <td rowSpan={4}>
                <d-text class="hljs-string">content</d-text> |{' '}
                <d-text class="hljs-string">float</d-text>
              </td>
              <td>不设置</td>
              <td>同 middle</td>
            </tr>
            <tr>
              <td>middle</td>
              <td>所有子元素居中对齐</td>
            </tr>
            <tr>
              <td>start</td>
              <td>所有子元素，在列布局时，左对齐；在行布局时，顶部对齐</td>
            </tr>
            <tr>
              <td>end</td>
              <td>所有子元素，在列布局时，右对齐；在行布局时，底部对齐</td>
            </tr>
            <tr>
              <td rowSpan={18}>position</td>
              <td rowSpan={18}>子元素设置自身在父元素的位置</td>
              <td rowSpan={18}>
                <d-text class="hljs-string">float</d-text>
              </td>
              <td>不设置</td>
              <td>同 left-top</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1>自定义 Web 标签</h1>
      <h1>构建工具</h1>
      <section>
        <h2>构建工具的作用</h2>
      </section>
      <section>
        <h2>Webpack 插件</h2>
      </section>
      <section>
        <h2>Vite 插件</h2>
      </section>
    </div>
  );
}

export default App;
