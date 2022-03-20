import React from 'react';
import './App.css';
import { Code } from './Code';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <section className="text-center">
        <h1>Graphic Design Markup Language (GDML) </h1>
        <p>一种符合平面设计直觉的标记语言</p>
      </section>
      <h1>实例</h1>
      <section>
        <h2>
          <d-text crop="2px">等比例列布局</d-text>
        </h2>
        <div className="case-container" id="equal-col">
          <d-view layout-items="col" gap="12px" align-items="justify">
            <d-view
              class="bg-color"
              span="1"
              layout-items="row"
              place-items="center"
            >
              <d-text>A</d-text>
              <d-text>A</d-text>
            </d-view>
            <d-view class="bg-color" span="1" place-items="center">
              BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
            </d-view>
            <d-view class="bg-color" span="1" place-items="center">
              CC
            </d-view>
          </d-view>
        </div>
        <p className="case-desc">
          1.<span className="hljs-string">d-view</span>
          标签默认占满父元素所有空间，当设置
          <span className="hljs-tag">layout-items="col"</span>
          时，会让子元素都在一行内布局，从而形成列布局，同时会重置
          <span className="hljs-string">d-view</span>的宽高为内容宽高。
        </p>
        <p className="case-desc">
          2. 设置<span className="hljs-string">d-view</span>标签子元素
          <span className="hljs-tag">span="1"</span>
          可以实现等比例列布局。
        </p>
        <p className="case-desc">
          3. 设置<span className="hljs-string">d-view</span>标签
          <span className="hljs-tag">align-items="justify"</span>
          可以实现子元素自动占满父元素分配的空间。
        </p>
        <Code targetId="equal-col" />
      </section>
      <section>
        <h2>
          <d-text crop="2px">不同比例列布局</d-text>
        </h2>
        <div className="case-container" id="unequal-col">
          <d-view layout-items="col" gap="12px" align-items="justify">
            <d-view
              class="bg-color"
              span="1"
              layout-items="row"
              place-items="center"
            >
              <d-text>AAAA</d-text>
              <d-text>A</d-text>
            </d-view>
            <d-view class="bg-color" span="2" place-items="center">
              BB
            </d-view>
            <d-view class="bg-color" span="2" place-items="center">
              CC
            </d-view>
          </d-view>
        </div>
        <p className="case-desc">
          设置<span className="hljs-string">d-view</span>标签子元素不同的
          <span className="hljs-tag">span</span>属性值，可以实现不同比例列布局。
        </p>
        <Code targetId="unequal-col" />
      </section>
      <section>
        <h2>
          <d-text crop="2px">等比例行布局</d-text>
        </h2>
        <div className="case-container" id="equal-row">
          <d-view layout-items="row" gap="12px" align-items="justify">
            <d-view class="bg-color" span="1" place-items="left">
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
            </d-view>
            <d-view class="bg-color" span="1">
              BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
            </d-view>
            <d-view class="bg-color" span="1" place-items="left-bottom">
              CC
            </d-view>
          </d-view>
        </div>
        <p className="case-desc">
          当设置<span className="hljs-string">d-view</span>标签
          <span className="hljs-tag">layout-items="row"</span>
          时，会让子元素都在一列内布局，从而形成行布局。
        </p>
        <Code targetId="equal-row" />
      </section>
      <section>
        <h2>
          <d-text crop="2px">不同比例行布局</d-text>
        </h2>
        <div className="case-container" id="unequal-row">
          <d-view layout-items="row" gap="12px" align-items="justify">
            <d-view class="bg-color" span="2" place-items="center">
              <d-view place-items="center">
                <d-text>A</d-text>
                <d-text>A</d-text>
              </d-view>
            </d-view>
            <d-view class="bg-color" span="1" place-items="center">
              BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
              BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
              BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
            </d-view>
            <d-view class="bg-color" span="2" place-items="center">
              CC
            </d-view>
          </d-view>
        </div>
        <Code targetId="unequal-row" />
      </section>
      <section>
        <h2>
          <d-text crop="2px">水平三明治布局</d-text>
        </h2>
        <div className="case-container" id="hsandwich">
          <d-view layout-items="col" gap="12px" align-items="justify">
            <d-view class="bg-color" place-items="center">
              AAA
            </d-view>
            <d-view class="bg-color" span="stretch" place-items="center">
              B
            </d-view>
            <d-view class="bg-color" place-items="center">
              C
            </d-view>
          </d-view>
        </div>
        <Code targetId="hsandwich" />
      </section>
      <section>
        <h2>
          <d-text crop="2px">垂直三明治布局</d-text>
        </h2>
        <div className="case-container" id="vsandwich">
          <d-view layout-items="row" gap="12px" align-items="justify">
            <d-view class="bg-color" place-items="center">
              A
            </d-view>
            <d-view class="bg-color" span="stretch" place-items="center">
              B
            </d-view>
            <d-view class="bg-color" place-items="center">
              C
            </d-view>
          </d-view>
        </div>
        <Code targetId="vsandwich" />
      </section>
      <section>
        <h2>
          <d-text crop="2px">圣杯布局</d-text>
        </h2>
        <div className="case-container" id="holy-grail">
          <d-view layout-items="row" gap="10px" align-items="justify">
            <d-view class="bg-color" place-items="center">
              Header
            </d-view>
            <d-view
              span="stretch"
              gap="10px"
              layout-items="col"
              align-items="justify"
            >
              <d-view class="bg-color" place-items="center">
                SideBar
              </d-view>
              <d-view class="bg-color" span="stretch" place-items="center">
                Content
              </d-view>
              <d-view class="bg-color" place-items="center">
                SideBar
              </d-view>
            </d-view>
            <d-view class="bg-color" place-items="center">
              Footer
            </d-view>
          </d-view>
        </div>
        <Code targetId="holy-grail" />
      </section>
      <section>
        <h2>
          <d-text crop="2px">列布局使用 place-items 设置子元素位置</d-text>
        </h2>
        <div className="case-container row-col-align-case" id="row-place-items">
          <d-view layout-items="col" gap="12px" align-items="justify">
            <d-view layout-items="row" align-items="justify" span="1" gap="8px">
              <d-view
                layout-items="col"
                span="1"
                class="bg-color"
                place-items="left-top"
              >
                <d-shape stroke="solid 1px #ffe22e" size="12px 30px"></d-shape>
                <d-shape stroke="solid 1px #a6e22e" place-items="center">
                  left-top
                </d-shape>
              </d-view>
              <d-view
                layout-items="col"
                span="1"
                class="bg-color"
                place-items="left"
              >
                <d-shape stroke="solid 1px #ffe22e" size="12px 30px"></d-shape>
                <d-shape stroke="solid 1px #a6e22e" place-items="center">
                  left
                </d-shape>
              </d-view>
              <d-view
                layout-items="col"
                span="1"
                class="bg-color"
                place-items="left-bottom"
              >
                <d-shape stroke="solid 1px #ffe22e" size="12px 30px"></d-shape>
                <d-shape stroke="solid 1px #a6e22e" place-items="center">
                  left-bottom
                </d-shape>
              </d-view>
            </d-view>
            <d-view layout-items="row" align-items="justify" span="1" gap="8px">
              <d-view
                layout-items="col"
                span="1"
                class="bg-color"
                place-items="top"
              >
                <d-shape stroke="solid 1px #ffe22e" size="12px 30px"></d-shape>
                <d-shape stroke="solid 1px #a6e22e" place-items="center">
                  top
                </d-shape>
              </d-view>
              <d-view
                layout-items="col"
                span="1"
                class="bg-color"
                place-items="center"
              >
                <d-shape stroke="solid 1px #ffe22e" size="12px 30px"></d-shape>
                <d-shape stroke="solid 1px #a6e22e" place-items="center">
                  center
                </d-shape>
              </d-view>
              <d-view
                layout-items="col"
                span="1"
                class="bg-color"
                place-items="bottom"
              >
                <d-shape stroke="solid 1px #ffe22e" size="12px 30px"></d-shape>
                <d-shape stroke="solid 1px #a6e22e" place-items="center">
                  bottom
                </d-shape>
              </d-view>
            </d-view>
            <d-view layout-items="row" align-items="justify" span="1" gap="8px">
              <d-view
                layout-items="col"
                span="1"
                class="bg-color"
                place-items="right-top"
              >
                <d-shape stroke="solid 1px #ffe22e" size="12px 30px"></d-shape>
                <d-shape stroke="solid 1px #a6e22e" place-items="center">
                  right-top
                </d-shape>
              </d-view>
              <d-view
                layout-items="col"
                span="1"
                class="bg-color"
                place-items="right"
              >
                <d-shape stroke="solid 1px #ffe22e" size="12px 30px"></d-shape>
                <d-shape stroke="solid 1px #a6e22e" place-items="center">
                  right
                </d-shape>
              </d-view>
              <d-view
                layout-items="col"
                span="1"
                class="bg-color"
                place-items="right-bottom"
              >
                <d-shape stroke="solid 1px #ffe22e" size="12px 30px"></d-shape>
                <d-shape stroke="solid 1px #a6e22e" place-items="center">
                  right-bottom
                </d-shape>
              </d-view>
            </d-view>
          </d-view>
        </div>
        <Code targetId="row-place-items" />
      </section>
      <section>
        <h2>
          <d-text crop="2px">行布局使用 place-items 设置子元素位置</d-text>
        </h2>
        <div
          className="case-container row-col-align-case"
          id="col-place-items"
          style={{ height: '300px' }}
        >
          <d-view layout-items="row" gap="12px" align-items="justify">
            <d-view layout-items="col" span="1" gap="8px" align-items="justify">
              <d-view
                layout-items="row"
                span="1"
                class="bg-color"
                place-items="left-top"
              >
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
              </d-view>
              <d-view
                layout-items="row"
                span="1"
                class="bg-color"
                place-items="top"
              >
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
              </d-view>
              <d-view
                layout-items="row"
                span="1"
                class="bg-color"
                place-items="right-top"
              >
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
              </d-view>
            </d-view>
            <d-view layout-items="col" span="1" gap="8px" align-items="justify">
              <d-view
                layout-items="row"
                span="1"
                class="bg-color"
                place-items="left"
              >
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
              </d-view>
              <d-view
                layout-items="row"
                span="1"
                class="bg-color"
                place-items="center"
              >
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
              </d-view>
              <d-view
                layout-items="row"
                span="1"
                class="bg-color"
                place-items="right"
              >
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
              </d-view>
            </d-view>
            <d-view layout-items="col" span="1" gap="8px" align-items="justify">
              <d-view
                layout-items="row"
                span="1"
                class="bg-color"
                place-items="left-bottom"
              >
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
              </d-view>
              <d-view
                layout-items="row"
                span="1"
                class="bg-color"
                place-items="bottom"
              >
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
              </d-view>
              <d-view
                layout-items="row"
                span="1"
                class="bg-color"
                place-items="right-bottom"
              >
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
              </d-view>
            </d-view>
          </d-view>
        </div>
        <Code targetId="col-place-items" />
      </section>
      <section>
        <h2>
          <d-text crop="2px">列布局使用 align-items 设置子元素对齐</d-text>
        </h2>
        <div className="case-container row-col-align-case" id="align-items-row">
          <d-view layout-items="row" align-items="justify" gap="12px">
            <d-view layout-items="col" align-items="justify" span="1" gap="8px">
              <d-view
                layout-items="col"
                span="1"
                align-items="justify"
                gap="4px"
              >
                <d-view
                  place-items="left-top"
                  align-items="start"
                  layout-items="col"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="left-top"
                  align-items="center"
                  layout-items="col"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="left-top"
                  align-items="end"
                  layout-items="col"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
              </d-view>
              <d-view
                layout-items="col"
                align-items="justify"
                span="1"
                gap="4px"
              >
                <d-view
                  place-items="top"
                  align-items="start"
                  layout-items="col"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="top"
                  align-items="center"
                  layout-items="col"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="top"
                  align-items="end"
                  layout-items="col"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
              </d-view>
              <d-view
                layout-items="col"
                align-items="justify"
                span="1"
                gap="4px"
              >
                <d-view
                  place-items="right-top"
                  align-items="start"
                  layout-items="col"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="right-top"
                  align-items="center"
                  layout-items="col"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="right-top"
                  align-items="end"
                  layout-items="col"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
              </d-view>
            </d-view>
            <d-view layout-items="col" align-items="justify" span="1" gap="8px">
              <d-view
                layout-items="col"
                align-items="justify"
                span="1"
                gap="4px"
              >
                <d-view
                  place-items="left"
                  align-items="start"
                  layout-items="col"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="left"
                  align-items="center"
                  layout-items="col"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="left"
                  align-items="end"
                  layout-items="col"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
              </d-view>
              <d-view
                layout-items="col"
                span="1"
                align-items="justify"
                gap="4px"
              >
                <d-view
                  place-items="center"
                  align-items="start"
                  layout-items="col"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="center"
                  align-items="center"
                  layout-items="col"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="center"
                  align-items="end"
                  layout-items="col"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
              </d-view>
              <d-view
                layout-items="col"
                span="1"
                align-items="justify"
                gap="4px"
              >
                <d-view
                  place-items="right"
                  align-items="start"
                  layout-items="col"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="right"
                  align-items="center"
                  layout-items="col"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="right"
                  align-items="end"
                  layout-items="col"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
              </d-view>
            </d-view>
            <d-view layout-items="col" align-items="justify" span="1" gap="8px">
              <d-view
                layout-items="col"
                align-items="justify"
                span="1"
                gap="4px"
              >
                <d-view
                  layout-items="col"
                  place-items="left-bottom"
                  align-items="start"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="left-bottom"
                  align-items="center"
                  layout-items="col"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  layout-items="col"
                  span="1"
                  place-items="left-bottom"
                  align-items="end"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
              </d-view>
              <d-view
                layout-items="col"
                align-items="justify"
                span="1"
                gap="4px"
              >
                <d-view
                  layout-items="col"
                  place-items="bottom"
                  align-items="start"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="bottom"
                  align-items="center"
                  layout-items="col"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  layout-items="col"
                  span="1"
                  place-items="bottom"
                  align-items="end"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
              </d-view>
              <d-view
                layout-items="col"
                align-items="justify"
                span="1"
                gap="4px"
              >
                <d-view
                  layout-items="col"
                  place-items="right-bottom"
                  align-items="start"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="right-bottom"
                  align-items="center"
                  layout-items="col"
                  span="1"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  layout-items="col"
                  span="1"
                  place-items="right-bottom"
                  align-items="end"
                  class="bg-color"
                >
                  <d-shape
                    size="12px 24px"
                    stroke="solid 1px #a6e22e"
                  ></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
              </d-view>
            </d-view>
          </d-view>
        </div>
        <Code targetId="align-items-row" />
      </section>
      <section>
        <h2>
          <d-text crop="2px">行布局使用 align-items 设置子元素对齐</d-text>
        </h2>
        <div className="case-container row-col-align-case" id="align-items-col">
          <d-view layout-items="row" align-items="justify" gap="12px">
            <d-view layout-items="col" align-items="justify" span="1" gap="8px">
              <d-view
                layout-items="col"
                span="1"
                align-items="justify"
                gap="4px"
              >
                <d-view
                  place-items="left-top"
                  align-items="start"
                  layout-items="row"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="left-top"
                  align-items="center"
                  layout-items="row"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="left-top"
                  align-items="end"
                  layout-items="row"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
              </d-view>
              <d-view
                layout-items="col"
                align-items="justify"
                span="1"
                gap="4px"
              >
                <d-view
                  place-items="top"
                  align-items="start"
                  layout-items="row"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="top"
                  align-items="center"
                  layout-items="row"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="top"
                  align-items="end"
                  layout-items="row"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
              </d-view>
              <d-view
                layout-items="col"
                align-items="justify"
                span="1"
                gap="4px"
              >
                <d-view
                  place-items="right-top"
                  align-items="start"
                  layout-items="row"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="right-top"
                  align-items="center"
                  layout-items="row"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="right-top"
                  align-items="end"
                  layout-items="row"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
              </d-view>
            </d-view>
            <d-view layout-items="col" align-items="justify" span="1" gap="8px">
              <d-view
                layout-items="col"
                align-items="justify"
                span="1"
                gap="4px"
              >
                <d-view
                  place-items="left"
                  align-items="start"
                  layout-items="row"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="left"
                  align-items="center"
                  layout-items="row"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="left"
                  align-items="end"
                  layout-items="row"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
              </d-view>
              <d-view
                layout-items="col"
                span="1"
                align-items="justify"
                gap="4px"
              >
                <d-view
                  place-items="center"
                  align-items="start"
                  layout-items="row"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="center"
                  align-items="center"
                  layout-items="row"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="center"
                  align-items="end"
                  layout-items="row"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
              </d-view>
              <d-view
                layout-items="col"
                span="1"
                align-items="justify"
                gap="4px"
              >
                <d-view
                  place-items="right"
                  align-items="start"
                  layout-items="row"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="right"
                  align-items="center"
                  layout-items="row"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="right"
                  align-items="end"
                  layout-items="row"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
              </d-view>
            </d-view>
            <d-view layout-items="col" align-items="justify" span="1" gap="8px">
              <d-view
                layout-items="col"
                align-items="justify"
                span="1"
                gap="4px"
              >
                <d-view
                  layout-items="row"
                  place-items="left-bottom"
                  align-items="start"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="left-bottom"
                  align-items="center"
                  layout-items="row"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  layout-items="row"
                  span="1"
                  place-items="left-bottom"
                  align-items="end"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
              </d-view>
              <d-view
                layout-items="col"
                align-items="justify"
                span="1"
                gap="4px"
              >
                <d-view
                  layout-items="row"
                  place-items="bottom"
                  align-items="start"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="bottom"
                  align-items="center"
                  layout-items="row"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  layout-items="row"
                  span="1"
                  place-items="bottom"
                  align-items="end"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
              </d-view>
              <d-view
                layout-items="col"
                align-items="justify"
                span="1"
                gap="4px"
              >
                <d-view
                  layout-items="row"
                  place-items="right-bottom"
                  align-items="start"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  place-items="right-bottom"
                  align-items="center"
                  layout-items="row"
                  span="1"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
                <d-view
                  layout-items="row"
                  span="1"
                  place-items="right-bottom"
                  align-items="end"
                  class="bg-color"
                >
                  <d-shape size="12px" stroke="solid 1px #a6e22e"></d-shape>
                  <d-shape
                    size="24px 12px"
                    stroke="solid 1px #ffe22e"
                  ></d-shape>
                </d-view>
              </d-view>
            </d-view>
          </d-view>
        </div>
        <Code targetId="align-items-col" />
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
          <d-view layout-items="inline" gap="12px 16px">
            {new Array(20).fill('').map((_, idx) => {
              return (
                <d-view
                  key={idx}
                  class="inline-elem1"
                  layout-items="col"
                  gap="8px"
                  align-items="center"
                >
                  <d-shape
                    type="ellipse"
                    size="24px"
                    stroke="solid 1px #a6e22e"
                    place-items="center"
                  >
                    W
                  </d-shape>
                  <d-text>Wenshin</d-text>
                  <d-shape
                    size="12px"
                    stroke="solid 1px #a6e22e"
                    place-items="center"
                  ></d-shape>
                </d-view>
              );
            })}
          </d-view>
        </div>
        <Code targetId="inline" />
      </section>
      <section>
        <h2>
          <d-text crop="2px">自动修正文本 line height 导致的边距问题</d-text>
        </h2>
        <div id="text">
          <d-view layout-items="inline" gap="12px">
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
          </d-view>
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
                layout-items
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
              <th style={{ width: 200 }}>
                宽高
                <br />
                size
              </th>
              <th>浮动</th>
              <th style={{ width: 200 }}>其它功能</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>view</td>
              <td className="text-left">
                <ol>
                  <li>内联布局</li>
                  <li>行布局</li>
                  <li>列布局</li>
                </ol>
              </td>
              <td>✅</td>
              <td>❌</td>
              <td className="text-left">
                <ol>
                  <li>viewport: 占满父容器</li>
                  <li>`width height`: 指定宽高</li>
                </ol>
              </td>
              <td>❌</td>
              <td>❌</td>
            </tr>
            <tr>
              <td>shape</td>
              <td className="text-left">
                <ol>
                  <li>内联布局</li>
                  <li>行布局</li>
                  <li>列布局</li>
                </ol>
              </td>
              <td>✅</td>
              <td>❌</td>
              <td className="text-left">
                <ol>
                  <li>viewport: 占满父容器</li>
                  <li>`width height`: 指定宽高</li>
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
              <td rowSpan={3}>layout-items</td>
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
