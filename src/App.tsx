import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <section className="text-center">
        <h1>DXML (Design XML) </h1>
        <p>用符合设计直觉、简洁、高效的布局描述语言定义布局</p>
      </section>
      <h1>实例</h1>
      <section>
        <h2>
          <d-text crop="2px">圣杯布局</d-text>
        </h2>
        <div className="case-container">
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
        <pre>
          <code className="language-html">
            {`<d-view layout='col' gap='10px'>
  <d-row place-items='center'>
    Header
  </d-row>
  <d-row fraction='stretch' gap='10px' style={{ backgroundColor: 'transparent' }}>
    <d-col place-items='center'>SideBar</d-col>
    <d-col fraction='stretch' place-items='center'>Content</d-col>
    <d-col place-items='center'>SideBar</d-col>
  </d-row>
  <d-row place-items='center'>
    Footer
  </d-row>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <h2>
          <d-text crop="2px">等宽 3 列，元素水平垂直居中</d-text>
        </h2>
        <div className="case-container">
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
        <pre>
          <code className="language-html">
            {`<d-view layout='row' gap='12px'>
  <d-col fraction='1' place-items='center'>
    <d-row place-items='center'>
      <div>A</div>
      <div>A</div>
    </d-row>
  </d-col>
  <d-col fraction='1' place-items='center'>BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB</d-col>
  <d-col fraction='1' place-items='center'>CC</d-col>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <h2>
          <d-text crop="2px">不同比例列，元素水平垂直居中</d-text>
        </h2>
        <div className="case-container">
          <d-view layout="row" gap="12px">
            <d-col fraction="1" place-items="center">
              <d-text>AAAA</d-text>
              <d-text>A</d-text>
            </d-col>
            <d-col fraction="2" place-items="center">
              BB
            </d-col>
            <d-col fraction="2" place-items="center">
              CC
            </d-col>
          </d-view>
        </div>
        <pre>
          <code className="language-html">
            {`<d-view layout="row" gap="12px">
  <d-col fraction="1" place-items="center">
    <d-text>AAAA</d-text>
    <d-text>A</d-text>
  </d-col>
  <d-col fraction="2" place-items="center">
    BB
  </d-col>
  <d-col fraction="2" place-items="center">
    CC
  </d-col>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <h2>
          <d-text crop="2px">水平三明治布局</d-text>
        </h2>
        <div className="case-container">
          <d-view layout="row" gap="12px">
            <d-col place-items="center">AAA</d-col>
            <d-col fraction="stretch" place-items="center">
              B
            </d-col>
            <d-col place-items="center">C</d-col>
          </d-view>
        </div>
        <pre>
          <code className="language-html">
            {`<d-view layout='row' gap='12px'>
  <d-col place-items='center'>AAA</d-col>
  <d-col fraction='stretch' place-items='center'>B</d-col>
  <d-col place-items='center'>C</d-col>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <h2>
          <d-text crop="2px">垂直三明治布局</d-text>
        </h2>
        <div className="case-container">
          <d-view layout="col" gap="12px">
            <d-row place-items="center">A</d-row>
            <d-row fraction="stretch" place-items="center">
              B
            </d-row>
            <d-row place-items="center">C</d-row>
          </d-view>
        </div>
        <pre>
          <code className="language-html">
            {`<d-view layout='col' gap='12px'>
  <d-row place-items='center'>A</d-row>
  <d-row fraction='stretch' place-items='center'>B</d-row>
  <d-row place-items='center'>C</d-row>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <h2>
          <d-text crop="2px">多行多比例布局</d-text>
        </h2>
        <div className="case-container">
          <d-view layout="col" gap="12px">
            <d-row
              fraction="1"
              gap="10px"
              style={{ backgroundColor: 'transparent' }}
            >
              <d-col place-items="center">A</d-col>
              <d-col fraction="stretch" place-items="center">
                B
              </d-col>
              <d-col place-items="center">C</d-col>
            </d-row>
            <d-row
              fraction="2"
              gap="10px"
              style={{ backgroundColor: 'transparent' }}
            >
              <d-col place-items="center" style={{ width: 30 }}>
                A
              </d-col>
              <d-col fraction="stretch" place-items="center">
                B
              </d-col>
              <d-col place-items="center">C</d-col>
            </d-row>
          </d-view>
        </div>
        <pre>
          <code className="language-html">
            {`<d-view layout='col' gap='12px'>
  <d-row fraction='1' gap='10px' style={{backgroundColor: 'transparent'}}>
    <d-col place-items='center'>A</d-col>
    <d-col fraction='stretch' place-items='center'>B</d-col>
    <d-col place-items='center'>C</d-col>
  </d-row>
  <d-row fraction='2' gap='10px' style={{backgroundColor: 'transparent'}}>
    <d-col place-items='center' style={{ width: 30 }}>A</d-col>
    <d-col fraction='stretch' place-items='center'>B</d-col>
    <d-col place-items='center'>C</d-col>
  </d-row>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <h2>
          <d-text crop="2px">行布局设置子元素位置</d-text>
        </h2>
        <div className="case-container row-col-align-case">
          <d-view layout="row" gap="12px">
            <d-col fraction="1" gap="8px">
              <d-row fraction="1" class="border" place-items="top">
                top
              </d-row>
              <d-row fraction="1" class="border" place-items="bottom">
                bottom
              </d-row>
            </d-col>
            <d-col fraction="1" gap="8px">
              <d-row fraction="1" class="border" place-items="left">
                left
              </d-row>
              <d-row fraction="1" class="border" place-items="right">
                right
              </d-row>
            </d-col>
            <d-col fraction="1" gap="8px">
              <d-row fraction="1" class="border" place-items="right-top">
                <div>right-top</div>
              </d-row>
              <d-row fraction="1" class="border" place-items="right-bottom">
                <div>right-bottom</div>
              </d-row>
            </d-col>
            <d-col fraction="1" gap="8px">
              <d-row fraction="1" class="border" place-items="left-bottom">
                <div>left-bottom</div>
              </d-row>
              <d-row fraction="1" class="border" place-items="left-top">
                <div>left-top</div>
              </d-row>
            </d-col>
          </d-view>
        </div>
        <pre>
          <code className="language-html">
            {`<d-view layout="row" gap="12px">
  <d-col fraction='1'gap="8px">
    <d-row fraction="1" class="border" place-items="top">
      top
    </d-row>
    <d-row fraction="1" class="border" place-items="bottom">
      bottom
    </d-row>
  </d-col>
  <d-col fraction='1'gap="8px">
    <d-row fraction="1" class="border" place-items="left">
      left
    </d-row>
    <d-row fraction="1" class="border" place-items="right">
      right
    </d-row>
  </d-col>
  <d-col fraction='1'gap="8px">
    <d-row fraction="1" class="border" place-items="right-top">
      <div>right-top</div>
    </d-row>
    <d-row fraction="1" class="border" place-items="right-bottom">
      <div>right-bottom</div>
    </d-row>
  </d-col>
  <d-col fraction='1'gap="8px">
    <d-row fraction="1" class="border" place-items="left-bottom">
      <div>left-bottom</div>
    </d-row>
    <d-row fraction="1" class="border" place-items="left-top">
      <div>left-top</div>
    </d-row>
  </d-col>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <h2>
          <d-text crop="2px">列布局设置子元素位置</d-text>
        </h2>
        <div className="case-container row-col-align-case">
          <d-view layout="col" gap="12px">
            <d-row fraction="1" gap="8px">
              <d-col fraction="1" class="border" place-items="top">
                top
              </d-col>
              <d-col fraction="1" class="border" place-items="right-top">
                right-top
              </d-col>
              <d-col fraction="1" class="border" place-items="right">
                <div>right</div>
              </d-col>
              <d-col fraction="1" class="border" place-items="right-bottom">
                <div>right-bottom</div>
              </d-col>
            </d-row>
            <d-row fraction="1" gap="8px">
              <d-col fraction="1" class="border" place-items="left-top">
                <div>left-top</div>
              </d-col>
              <d-col fraction="1" class="border" place-items="left">
                <div>left</div>
              </d-col>
              <d-col fraction="1" class="border" place-items="left-bottom">
                <div>left-bottom</div>
              </d-col>
              <d-col fraction="1" class="border" place-items="bottom">
                <div>bottom</div>
              </d-col>
            </d-row>
          </d-view>
        </div>
        <pre>
          <code className="language-html">
            {`<d-view layout="col" gap="12px">
  <d-row fraction='1' gap="8px">
    <d-col fraction="1" class="border" place-items="top">
      top
    </d-col>
    <d-col fraction="1" class="border" place-items="right-top">
      right-top
    </d-col>
    <d-col fraction="1" class="border" place-items="right">
      <div>right</div>
    </d-col>
    <d-col fraction="1" class="border" place-items="right-bottom">
      <div>right-bottom</div>
    </d-col>
  </d-row>
  <d-row fraction='1' gap="8px">
    <d-col fraction="1" class="border" place-items="left-top">
      <div>left-top</div>
    </d-col>
    <d-col fraction="1" class="border" place-items="left">
      <div>left</div>
    </d-col>
    <d-col fraction="1" class="border" place-items="left-bottom">
      <div>left-bottom</div>
    </d-col>
    <d-col fraction="1" class="border" place-items="bottom">
      <div>bottom</div>
    </d-col>
  </d-row>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <h2>
          <d-text crop="2px">子元素对齐</d-text>
        </h2>
        <div
          className="case-container row-col-align-case"
          style={{ height: 300 }}
        >
          <d-view layout="col" gap="12px">
            <d-row fraction="1" gap="8px">
              <d-col fraction="1" class="border" place-items="center">
                <d-content class="bg-color" layout="col" align-items="start">
                  <d-text>AA</d-text>
                  <d-text>A</d-text>
                </d-content>
              </d-col>
              <d-col fraction="1" class="border" place-items="center">
                <d-content class="bg-color" layout="col" align-items="middle">
                  <d-text>AA</d-text>
                  <d-text>A</d-text>
                </d-content>
              </d-col>
              <d-col fraction="1" class="border" place-items="center">
                <d-content class="bg-color" layout="col" align-items="end">
                  <d-text>AA</d-text>
                  <d-text>A</d-text>
                </d-content>
              </d-col>
            </d-row>
            <d-row fraction="1" gap="8px">
              <d-col fraction="1" class="border" place-items="left">
                <d-content class="bg-color" layout="col" align-items="start">
                  <d-text>AA</d-text>
                  <d-text>A</d-text>
                </d-content>
              </d-col>
              <d-col fraction="1" class="border" place-items="left">
                <d-content class="bg-color" layout="col" align-items="middle">
                  <d-text>AA</d-text>
                  <d-text>A</d-text>
                </d-content>
              </d-col>
              <d-col fraction="1" class="border" place-items="left">
                <d-content class="bg-color" layout="col" align-items="end">
                  <d-text>AA</d-text>
                  <d-text>A</d-text>
                </d-content>
              </d-col>
            </d-row>
            <d-row fraction="1" gap="8px">
              <d-col fraction="1" class="border" place-items="right">
                <d-content class="bg-color" layout="col" align-items="start">
                  <d-text>AA</d-text>
                  <d-text>A</d-text>
                </d-content>
              </d-col>
              <d-col fraction="1" class="border" place-items="right">
                <d-content class="bg-color" layout="col" align-items="middle">
                  <d-text>AA</d-text>
                  <d-text>A</d-text>
                </d-content>
              </d-col>
              <d-col fraction="1" class="border" place-items="right">
                <d-content class="bg-color" layout="col" align-items="end">
                  <d-text>AA</d-text>
                  <d-text>A</d-text>
                </d-content>
              </d-col>
            </d-row>
          </d-view>
        </div>
        <pre>
          <code className="language-html">
            {`<d-view layout="col" gap="12px">
  <d-row fraction="1" gap="8px">
    <d-col
      fraction="1"
      class="border"
      place-items="center"
    >
      <d-content layout="col" align-items="start">
        <d-text>AA</d-text>
        <d-text>A</d-text>
      </d-content>
    </d-col>
    <d-col
      fraction="1"
      class="border"
      place-items="center"
    >
      <d-content layout="col" align-items="middle">
        <d-text>AA</d-text>
        <d-text>A</d-text>
      </d-content>
    </d-col>
    <d-col
      fraction="1"
      class="border"
      place-items="center"
    >
      <d-content layout="col" align-items="end">
        <d-text>AA</d-text>
        <d-text>A</d-text>
      </d-content>
    </d-col>
  </d-row>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <h2>
          <d-text crop="2px">浮动元素定位</d-text>
        </h2>
        <div className="case-container" style={{ padding: '40px 60px' }}>
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
        <pre>
          <code className="language-html">
            {`<d-view style={{ background: '#565656' }}>
  <d-float class="float-square" position="top"></d-float>
  <d-float class="float-square" position="top-outside"></d-float>
  <d-float class="float-square" position="right-top"></d-float>
  <d-float class="float-square" position="right-top-outside" ></d-float>
  <d-float class="float-square" position="right-top-corner-outside" ></d-float>
  <d-float class="float-square" position="top-right-outside" ></d-float>
  <d-float class="float-square" position="right"></d-float>
  <d-float class="float-square" position="right-outside"></d-float>
  <d-float class="float-square" position="right-bottom"></d-float>
  <d-float class="float-square" position="bottom-right-outside" ></d-float>
  <d-float class="float-square" position="right-bottom-outside" ></d-float>
  <d-float class="float-square" position="right-bottom-corner-outside" ></d-float>
  <d-float class="float-square" position="bottom"></d-float>
  <d-float class="float-square" position="bottom-outside"></d-float>
  <d-float class="float-square" position="left-bottom"></d-float>
  <d-float class="float-square" position="left-bottom-outside" ></d-float>
  <d-float class="float-square" position="left-bottom-corner-outside" ></d-float>
  <d-float class="float-square" position="bottom-left-outside" ></d-float>
  <d-float class="float-square" position="left"></d-float>
  <d-float class="float-square" position="left-outside"></d-float>
  <d-float class="float-square" position="left-top"></d-float>
  <d-float class="float-square" position="top-left-outside"></d-float>
  <d-float class="float-square" position="left-top-outside"></d-float>
  <d-float class="float-square" position="left-top-corner-outside" ></d-float>
  <d-float class="float-square" position="center"></d-float>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <h2>
          <d-text crop="2px">内连元素布局</d-text>
        </h2>
        <div className="case-container">
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
        <pre>
          <code className="language-html">
            {`<d-view gap='12px 16px'>
  <d-content className='inline-elem1'>test</d-content>
  <d-content class='inline-elem2' layout='row' gap='10px'>
    <d-col place-items='center'><span>A</span><span>B</span><span>C</span></d-col>
    <d-col place-items='center'>B</d-col>
    <d-col place-items='center'>C</d-col>
  </d-content>
  <d-content layout='col' gap='10px'>
    <d-row>A</d-row>
    <d-row>B</d-row>
    <d-row>C</d-row>
  </d-content>
  <d-content class='inline-elem3' layout='row' gap='10px'>
    <d-col place-items='center'>A</d-col>
    <d-col place-items='center'>B</d-col>
    <d-col place-items='center'>C</d-col>
  </d-content>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <h2>
          <d-text crop="2px">自动修正文本 line height 导致的边距问题</d-text>
        </h2>
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
        <pre>
          <code className="language-html">
            {`<d-row>
  <d-text crop="1px">DXML 设计了更适合设计稿直接转布局代码的一套标签</d-text>
  <d-text crop="1px">DXML Design for a better layout markable language from design to developer</d-text>
  <d-text crop="auto">DXML Design for a better layout markable language from design to developer</d-text>
</d-row>`}
          </code>
        </pre>
        <p>
          提示⚠️⚠️⚠️：d-text 标签设置 crop 为 auto
          时，会通过插入新的节点来获得文本行高。由于该功能会对首屏渲染有 10ms
          以上的性能影响，如果把本页面中的标题都去掉 crop 属性，影响在 30ms
          左右，所以暂时未实现。
        </p>
      </section>
      <h1>
        <d-text crop="2px">标签</d-text>
      </h1>
      <div className="table-container">
        <table className="bg-color">
          <thead>
            <tr>
              <th>标签</th>
              <th style={{ width: 200 }}>子元素行列布局</th>
              <th>子元素位置</th>
              <th>子元素对齐</th>
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
                  <li>行布局，layout='row'</li>
                  <li>列布局，layout='col'</li>
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
                <ol>
                  <li>行布局，layout='row'</li>
                  <li>列布局，layout='col'</li>
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
              <td>✅</td>
              <td>mask 设置遮罩</td>
            </tr>
            <tr>
              <td>row</td>
              <td className="text-left">
                <ol>
                  <li>行布局</li>
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
                  <li>列布局</li>
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
                  <li>行布局，layout='row'</li>
                  <li>列布局，layout='col'</li>
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
                  <li>行布局，layout='row'</li>
                  <li>列布局，layout='col'</li>
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
              <td>✅</td>
              <td>❌</td>
            </tr>
            <tr>
              <td>text</td>
              <td>❌</td>
              <td>❌</td>
              <td>❌</td>
              <td className="text-left">
                <ol>
                  <li>宽度，通过 width 指定或者由文本字体和行高决定</li>
                  <li>高度，通过 height 指定或者由文本字体和行高决定</li>
                </ol>
              </td>
              <td>❌</td>
              <td>通过设置 crop 属性可以裁剪文本上下行高产生的多余空间</td>
            </tr>
          </tbody>
        </table>
      </div>
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
