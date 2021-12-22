import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>前言</h1>
      <section>
        <p>
          一直以来前端工程化领域，一直致力于在 css + js
          开发上进行提质、提效，却一直忽略 html + css 的质效问题。
        </p>
        <p>
          最近几年虽然我已经能解决前端几乎所有的布局，尤其是 flex、grid
          布局出现后，让复杂结构布局能力更加完美和高效。 但是我发现复杂的布局用
          html + css 或者 wxml + css 来处理仍然是很低效的，
          一个复杂的页面布局如果没有现成的组件可用，需要耗时半天到一天不等。
        </p>
        <p>
          并且我觉得设计领域和技术领域没有统一的布局
          DSL，也是阻碍设计稿自动代码化的关键点之一。 当然业内阿里的 imgcook
          非常厉害，它靠复杂的智能技术对设计稿图片或者源文件进行分析，提取出元素树，并且适配了
          React、Vue、小程序、Flutter、Android 等多种 DSL。 这项技术也有缺点，
          首先，技术成本很高，从 2017 年开始，2019 年 1
          月发布体验版，目前保持每月迭代，整个网站易用性还是比较差，loading
          时间长，阻塞问题比较多，明显维护投入不是很充足。
          其次，设计和研发规范迭代维护成本如何，以及如何保持和适配 DSL
          兼容并保证可靠性，都还没有得到很好验证。
          因此如果有一套设计和技术都遵循的 DSL，相信 imgcook
          的成本和不确定性将大大降低。
        </p>
        <p>
          在深入学习 flex
          的过程中，我发现它是一个功能强大，底层抽象极致的布局体系。
          但是缺点也很明显，首先概念复杂，理解和熟练应用成本很高；其次和常见的
          UI 设计工具概念差异很大。
          说的直白点，是这个设计太技术化，是一个更亲近技术的设计。
        </p>
        <p>
          举个例子：在子元素布局和对齐上就有四种属性
          align-items、align-content、justify-content 和 align-self。 而对于 UI
          设计工具来说，只关注两种，
          一个是子元素和父元素位置，如：左右、上下、中间、左上、左下、右上、右下
          9 个位置；
          一个是子元素之间对齐，如：居中对齐最多、然后是顶部对齐和底部对齐。
        </p>
        <p>
          为了更好的让 UI 设计概念与技术方案进行融合，甚至实现自动化。
          我尝试设计一套新的 XML 语言，命名为 Design XML 缩写 DXML。
        </p>
      </section>
      <h1>DXML 介绍</h1>
      <h2>
        <d-text crop="2px">核心理念</d-text>
      </h2>
      <section>
        <p>
          DXML 的核心理念是设计更符合设计语言的 DSL。 html + css
          设计之初是为了服务好图文内容的展示，而现代 Web 应用结构化布局更多。
        </p>
      </section>
      <h2>
        <d-text crop="2px">标签介绍</d-text>
      </h2>
      <ul>
        <li>
          <span className="inline-code">view</span>：始终占满父元素空间
        </li>
        <li>
          <span className="inline-code">row</span>
          ：始终占满父元素宽度，高度自适应，子元素始终在一行内进行布局
        </li>
        <li>
          <span className="inline-code">col</span>
          ：始终占满父元素高度，宽度自适应，子元素始终在一行内进行布局
        </li>
        <li>
          <span className="inline-code">layer</span>
          ：始终占满父元素空间，并且漂浮在其他元素之上，支持鼠标事件穿透和背景色设置
        </li>
        <li>
          <span className="inline-code">elem</span>
          ：默认适应内部视觉元素尺寸，如：文本、图片等
        </li>
        <li>
          <span className="inline-code">text</span>：elem
          派生的一个元素，支持处理文本 line-height 导致的空间溢出
        </li>
        <li>
          <span className="inline-code">float</span>：elem
          派生的一个元素，支持漂浮在父元素的上、下、左、右、中、左上、左下、右上、右下
          9 个位置
        </li>
      </ul>
      <h1>实例</h1>
      <section>
        <d-text crop="2px">
          <h2>圣杯布局</h2>
        </d-text>
        <div className="case-container">
          <d-view layout="col" gap="10px">
            <d-row align-items="center">Header</d-row>
            <d-row
              dimension="stretch"
              gap="10px"
              style={{ backgroundColor: 'transparent' }}
            >
              <d-col align-items="center">SideBar</d-col>
              <d-col dimension="stretch" align-items="center">
                Content
              </d-col>
              <d-col align-items="center">SideBar</d-col>
            </d-row>
            <d-row align-items="center">Footer</d-row>
          </d-view>
        </div>
        <pre>
          <code className="language-html">
            {`<d-view layout='col' gap='10px'>
  <d-row align-items='center'>
    Header
  </d-row>
  <d-row dimension='stretch' gap='10px' style={{ backgroundColor: 'transparent' }}>
    <d-col align-items='center'>SideBar</d-col>
    <d-col dimension='stretch' align-items='center'>Content</d-col>
    <d-col align-items='center'>SideBar</d-col>
  </d-row>
  <d-row align-items='center'>
    Footer
  </d-row>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <d-text crop="2px">
          <h2>row 布局子元素位置</h2>
        </d-text>
        <div className="case-container row-col-align-case">
          <d-view layout="row" gap="12px">
            <d-col dimension="1" gap="8px">
              <d-row dimension="1" class="row-col-container" align-items="top">
                top
              </d-row>
              <d-row
                dimension="1"
                class="row-col-container"
                align-items="bottom"
              >
                bottom
              </d-row>
            </d-col>
            <d-col dimension="1" gap="8px">
              <d-row dimension="1" class="row-col-container" align-items="left">
                left
              </d-row>
              <d-row
                dimension="1"
                class="row-col-container"
                align-items="right"
              >
                right
              </d-row>
            </d-col>
            <d-col dimension="1" gap="8px">
              <d-row
                dimension="1"
                class="row-col-container"
                align-items="right-top"
              >
                <div>right-top</div>
              </d-row>
              <d-row
                dimension="1"
                class="row-col-container"
                align-items="right-bottom"
              >
                <div>right-bottom</div>
              </d-row>
            </d-col>
            <d-col dimension="1" gap="8px">
              <d-row
                dimension="1"
                class="row-col-container"
                align-items="left-bottom"
              >
                <div>left-bottom</div>
              </d-row>
              <d-row
                dimension="1"
                class="row-col-container"
                align-items="left-top"
              >
                <div>left-top</div>
              </d-row>
            </d-col>
          </d-view>
        </div>
        <pre>
          <code className="language-html">
            {`<d-view layout="row" gap="12px">
  <d-col dimension='1'gap="8px">
    <d-row dimension="1" class="row-col-container" align-items="top">
      top
    </d-row>
    <d-row dimension="1" class="row-col-container" align-items="bottom">
      bottom
    </d-row>
  </d-col>
  <d-col dimension='1'gap="8px">
    <d-row dimension="1" class="row-col-container" align-items="left">
      left
    </d-row>
    <d-row dimension="1" class="row-col-container" align-items="right">
      right
    </d-row>
  </d-col>
  <d-col dimension='1'gap="8px">
    <d-row dimension="1" class="row-col-container" align-items="right-top">
      <div>right-top</div>
    </d-row>
    <d-row dimension="1" class="row-col-container" align-items="right-bottom">
      <div>right-bottom</div>
    </d-row>
  </d-col>
  <d-col dimension='1'gap="8px">
    <d-row dimension="1" class="row-col-container" align-items="left-bottom">
      <div>left-bottom</div>
    </d-row>
    <d-row dimension="1" class="row-col-container" align-items="left-top">
      <div>left-top</div>
    </d-row>
  </d-col>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <d-text crop="2px">
          <h2>column 布局子元素位置</h2>
        </d-text>
        <div className="case-container row-col-align-case">
          <d-view layout="col" gap="12px">
            <d-row dimension="1" gap="8px">
              <d-col dimension="1" class="row-col-container" align-items="top">
                top
              </d-col>
              <d-col
                dimension="1"
                class="row-col-container"
                align-items="right-top"
              >
                right-top
              </d-col>
              <d-col
                dimension="1"
                class="row-col-container"
                align-items="right"
              >
                <div>right</div>
              </d-col>
              <d-col
                dimension="1"
                class="row-col-container"
                align-items="right-bottom"
              >
                <div>right-bottom</div>
              </d-col>
            </d-row>
            <d-row dimension="1" gap="8px">
              <d-col
                dimension="1"
                class="row-col-container"
                align-items="left-top"
              >
                <div>left-top</div>
              </d-col>
              <d-col dimension="1" class="row-col-container" align-items="left">
                <div>left</div>
              </d-col>
              <d-col
                dimension="1"
                class="row-col-container"
                align-items="left-bottom"
              >
                <div>left-bottom</div>
              </d-col>
              <d-col
                dimension="1"
                class="row-col-container"
                align-items="bottom"
              >
                <div>bottom</div>
              </d-col>
            </d-row>
          </d-view>
        </div>
        <pre>
          <code className="language-html">
            {`<d-view layout="col" gap="12px">
  <d-row dimension='1' gap="8px">
    <d-col dimension="1" class="row-col-container" align-items="top">
      top
    </d-col>
    <d-col dimension="1" class="row-col-container" align-items="right-top">
      right-top
    </d-col>
    <d-col dimension="1" class="row-col-container" align-items="right">
      <div>right</div>
    </d-col>
    <d-col dimension="1" class="row-col-container" align-items="right-bottom">
      <div>right-bottom</div>
    </d-col>
  </d-row>
  <d-row dimension='1' gap="8px">
    <d-col dimension="1" class="row-col-container" align-items="left-top">
      <div>left-top</div>
    </d-col>
    <d-col dimension="1" class="row-col-container" align-items="left">
      <div>left</div>
    </d-col>
    <d-col dimension="1" class="row-col-container" align-items="left-bottom">
      <div>left-bottom</div>
    </d-col>
    <d-col dimension="1" class="row-col-container" align-items="bottom">
      <div>bottom</div>
    </d-col>
  </d-row>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <d-text crop="2px">
          <h2>等宽 3 列，元素水平垂直居中</h2>
        </d-text>
        <div className="case-container">
          <d-view layout="row" gap="12px">
            <d-col dimension="1" align-items="center">
              <d-row align-items="center">
                <div>A</div>
                <div>A</div>
              </d-row>
            </d-col>
            <d-col dimension="1" align-items="center">
              BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
            </d-col>
            <d-col dimension="1" align-items="center">
              CC
            </d-col>
          </d-view>
        </div>
        <pre>
          <code className="language-html">
            {`<d-view layout='row' gap='12px'>
  <d-col dimension='1' align-items='center'>
    <d-row align-items='center'>
      <div>A</div>
      <div>A</div>
    </d-row>
  </d-col>
  <d-col dimension='1' align-items='center'>BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB</d-col>
  <d-col dimension='1' align-items='center'>CC</d-col>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <d-text crop="2px">
          <h2>不同比例列，元素水平垂直居中</h2>
        </d-text>
        <div className="case-container">
          <d-view layout="row" gap="12px">
            <d-col dimension="1" align-items="center">
              <div>A</div>
              <div>A</div>
            </d-col>
            <d-col dimension="2" align-items="center">
              BB
            </d-col>
            <d-col dimension="2" align-items="center">
              CC
            </d-col>
          </d-view>
        </div>
        <pre>
          <code className="language-html">
            {`<d-view layout='row' gap='12px'>
  <d-col dimension='1' align-items='center'><div>A</div><div>A</div></d-col>
  <d-col dimension='2' align-items='center'>BB</d-col>
  <d-col dimension='2' align-items='center'>CC</d-col>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <d-text crop="2px">
          <h2>水平三明治布局</h2>
        </d-text>
        <div className="case-container">
          <d-view layout="row" gap="12px">
            <d-col align-items="center">AAA</d-col>
            <d-col dimension="stretch" align-items="center">
              B
            </d-col>
            <d-col align-items="center">C</d-col>
          </d-view>
        </div>
        <pre>
          <code className="language-html">
            {`<d-view layout='row' gap='12px'>
  <d-col align-items='center'>AAA</d-col>
  <d-col dimension='stretch' align-items='center'>B</d-col>
  <d-col align-items='center'>C</d-col>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <d-text crop="2px">
          <h2>垂直三明治布局</h2>
        </d-text>
        <div className="case-container">
          <d-view layout="col" gap="12px">
            <d-row align-items="center">A</d-row>
            <d-row dimension="stretch" align-items="center">
              B
            </d-row>
            <d-row align-items="center">C</d-row>
          </d-view>
        </div>
        <pre>
          <code className="language-html">
            {`<d-view layout='col' gap='12px'>
  <d-row align-items='center'>A</d-row>
  <d-row dimension='stretch' align-items='center'>B</d-row>
  <d-row align-items='center'>C</d-row>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <d-text crop="2px">
          <h2>不同比例行布局</h2>
        </d-text>
        <div className="case-container">
          <d-view layout="col" gap="12px">
            <d-row
              dimension="1"
              gap="10px"
              style={{ backgroundColor: 'transparent' }}
            >
              <d-col align-items="center">A</d-col>
              <d-col dimension="stretch" align-items="center">
                B
              </d-col>
              <d-col align-items="center">C</d-col>
            </d-row>
            <d-row
              dimension="2"
              gap="10px"
              style={{ backgroundColor: 'transparent' }}
            >
              <d-col align-items="center" style={{ width: 30 }}>
                A
              </d-col>
              <d-col dimension="stretch" align-items="center">
                B
              </d-col>
              <d-col align-items="center">C</d-col>
            </d-row>
          </d-view>
        </div>
        <pre>
          <code className="language-html">
            {`<d-view layout='col' gap='12px'>
  <d-row dimension='1' gap='10px' style={{backgroundColor: 'transparent'}}>
    <d-col align-items='center'>A</d-col>
    <d-col dimension='stretch' align-items='center'>B</d-col>
    <d-col align-items='center'>C</d-col>
  </d-row>
  <d-row dimension='2' gap='10px' style={{backgroundColor: 'transparent'}}>
    <d-col align-items='center' style={{ width: 30 }}>A</d-col>
    <d-col dimension='stretch' align-items='center'>B</d-col>
    <d-col align-items='center'>C</d-col>
  </d-row>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <d-text crop="2px">
          <h2>浮动元素定位</h2>
        </d-text>
        <div className="case-container">
          <d-view>
            <d-float class="my-class" align="top">
              top
            </d-float>
            <d-float align="right-top">right-top</d-float>
            <d-float align="right">right</d-float>
            <d-float align="right-bottom">right-bottom</d-float>
            <d-float align="bottom">bottom</d-float>
            <d-float align="left-bottom">left-bottom</d-float>
            <d-float align="left">left</d-float>
            <d-float align="left-top">left-top</d-float>
            <d-float align="center">center</d-float>
          </d-view>
        </div>
        <pre>
          <code className="language-html">
            {`<d-view>
  <d-float class='my-class' align='top'>top</d-float>
  <d-float align='right-top'>right-top</d-float>
  <d-float align='right'>right</d-float>
  <d-float align='right-bottom'>right-bottom</d-float>
  <d-float align='bottom'>bottom</d-float>
  <d-float align='left-bottom'>left-bottom</d-float>
  <d-float align='left'>left</d-float>
  <d-float align='left-top'>left-top</d-float>
  <d-float align='center'>center</d-float>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <d-text crop="2px">
          <h2>inline 元素布局</h2>
        </d-text>
        <div className="case-container">
          <d-view layout="inline" gap="12px 16px">
            <d-elem className="inline-elem1">test</d-elem>
            <d-elem class="inline-elem2" layout="row" gap="10px">
              <d-col align-items="center">
                <span>A</span>
                <span>B</span>
                <span>C</span>
              </d-col>
              <d-col align-items="center">B</d-col>
              <d-col align-items="center">C</d-col>
            </d-elem>
            <d-elem layout="col" gap="10px">
              <d-row>A</d-row>
              <d-row>B</d-row>
              <d-row>C</d-row>
            </d-elem>
            <d-elem class="inline-elem3" layout="row" gap="10px">
              <d-col align-items="center">A</d-col>
              <d-col align-items="center">B</d-col>
              <d-col align-items="center">C</d-col>
            </d-elem>
          </d-view>
        </div>
        <pre>
          <code className="language-html">
            {`<d-view layout="inline" gap='12px 16px'>
  <d-elem className='inline-elem1'>test</d-elem>
  <d-elem class='inline-elem2' layout='row' gap='10px'>
    <d-col align-items='center'><span>A</span><span>B</span><span>C</span></d-col>
    <d-col align-items='center'>B</d-col>
    <d-col align-items='center'>C</d-col>
  </d-elem>
  <d-elem layout='col' gap='10px'>
    <d-row>A</d-row>
    <d-row>B</d-row>
    <d-row>C</d-row>
  </d-elem>
  <d-elem class='inline-elem3' layout='row' gap='10px'>
    <d-col align-items='center'>A</d-col>
    <d-col align-items='center'>B</d-col>
    <d-col align-items='center'>C</d-col>
  </d-elem>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <d-text crop="2px">
          <h2>自动修正文本 line height 导致的边距问题</h2>
        </d-text>
        <d-row gap="12px">
          <d-text crop="1px">
            DXML 设计了更适合设计稿直接转布局代码的一套标签
          </d-text>
          <d-text crop="1px">
            DXML Design for a better layout markable language from design to
            developer
          </d-text>
          <d-text>
            DXML Design for a better layout markable language from design to
            developer
          </d-text>
        </d-row>
        <pre>
          <code className="language-html">
            {`<d-row>
  <d-text crop="1px">DXML 设计了更适合设计稿直接转布局代码的一套标签</d-text>
  <d-text crop="1px">DXML Design for a better layout markable language from design to developer</d-text>
  <d-text>DXML Design for a better layout markable language from design to developer</d-text>
</d-row>`}
          </code>
        </pre>
        <p>
          提示⚠️⚠️⚠️：d-text 标签不设置 crop
          标签时，会通过插入新的节点来获得文本行高，这会对首屏渲染有 10ms
          以上的性能影响，如果把本页面中的标题都去掉 crop 属性，影响在 30ms
          左右。
        </p>
      </section>
    </div>
  );
}

export default App;
