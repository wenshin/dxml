import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{ padding: 40 }}>
      <section>
        <h1>圣杯布局</h1>
        <div className='case-container'>
          <d-view layout='col' gap='10px'>
            <d-row align-items='center'>
              Header
            </d-row>
            <d-row dimension='stretch'>
              <d-col align-items='center'>SideBar</d-col>
              <d-col dimension='stretch' align-items='center'>Content</d-col>
              <d-col align-items='center'>SideBar</d-col>
            </d-row>
            <d-row align-items='center'>
              Footer
            </d-row>
          </d-view>
        </div>
        <pre>
          <code className="language-html">{
`<d-view layout='col'>
  <d-row align-items='center'>
    Header
  </d-row>
  <d-row dimension='stretch'>
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
        <d-text><h1>等宽 3 列，元素水平垂直居中</h1></d-text>
        <div className='case-container'>
          <d-view layout='row'>
            <d-col dimension='1' align-items='center'>
              <d-row align-items='center'>
                <div>A</div>
                <div>A</div>
              </d-row>
            </d-col>
            <d-col dimension='1' align-items='center'>BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB</d-col>
            <d-col dimension='1' align-items='center'>CC</d-col>
          </d-view>
        </div>
        <pre>
          <code className="language-html">{
`<d-view layout='row'>
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
      <h1>不同比例列，元素水平垂直居中</h1>
      <div className='case-container'>
        <d-view layout='row'>
          <d-col dimension='1' align-items='center'><div>A</div><div>A</div></d-col>
          <d-col dimension='2' align-items='center'>BB</d-col>
          <d-col dimension='2' align-items='center'>CC</d-col>
        </d-view>
      </div>
      <pre>
          <code className="language-html">{
`<d-view layout='row'>
  <d-col dimension='1' align-items='center'><div>A</div><div>A</div></d-col>
  <d-col dimension='2' align-items='center'>BB</d-col>
  <d-col dimension='2' align-items='center'>CC</d-col>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <h1>水平三明治布局</h1>
        <div className='case-container'>
          <d-view layout='row'>
            <d-col align-items='center'>AAA</d-col>
            <d-col dimension='stretch' align-items='center'>B</d-col>
            <d-col align-items='center'>C</d-col>
          </d-view>
        </div>
        <pre>
          <code className="language-html">{
`<d-view layout='row'>
  <d-col align-items='center'>AAA</d-col>
  <d-col dimension='stretch' align-items='center'>B</d-col>
  <d-col align-items='center'>C</d-col>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <h1>垂直三明治布局</h1>
        <div className='case-container'>
          <d-view layout='col'>
            <d-row align-items='center'>A</d-row>
            <d-row dimension='stretch' align-items='center'>B</d-row>
            <d-row align-items='center'>C</d-row>
          </d-view>
        </div>
        <pre>
          <code className="language-html">{
`<d-view layout='col'>
  <d-row align-items='center'>A</d-row>
  <d-row dimension='stretch' align-items='center'>B</d-row>
  <d-row align-items='center'>C</d-row>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <h1>不同比例行布局</h1>
        <div className='case-container'>
          <d-view layout='col'>
            <d-row dimension='1'>
              <d-col align-items='center'>A</d-col>
              <d-col dimension='stretch' align-items='center'>B</d-col>
              <d-col align-items='center'>C</d-col>
            </d-row>
            <d-row dimension='2'>
              <d-col align-items='center' style={{ width: 30 }}>A</d-col>
              <d-col dimension='stretch' align-items='center'>B</d-col>
              <d-col align-items='center'>C</d-col>
            </d-row>
          </d-view>
        </div>
        <pre>
          <code className="language-html">{
`<d-view layout='col'>
  <d-row dimension='1'>
    <d-col align-items='center'>A</d-col>
    <d-col dimension='stretch' align-items='center'>B</d-col>
    <d-col align-items='center'>C</d-col>
  </d-row>
  <d-row dimension='2'>
    <d-col align-items='center' style={{ width: 30 }}>A</d-col>
    <d-col dimension='stretch' align-items='center'>B</d-col>
    <d-col align-items='center'>C</d-col>
  </d-row>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <h1>浮动元素定位</h1>
        <div className='case-container'>
          <d-view>
            <d-float class='my-class' align='top'>top</d-float>
            <d-float align='right-top'>right-top</d-float>
            <d-float align='right'>right</d-float>
            <d-float align='right-bottom'>right-bottom</d-float>
            <d-float align='bottom'>bottom</d-float>
            <d-float align='left-bottom'>left-bottom</d-float>
            <d-float align='left'>left</d-float>
            <d-float align='left-top'>left-top</d-float>
            <d-float align='center'>center</d-float>
          </d-view>
        </div>
        <pre>
          <code className="language-html">{
`<d-view>
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
        <h1>自动修正文本 line height 导致的边距问题</h1>
        <div style={{ width: '200px' }}>
          <d-text>DXML 设计了更适合设计稿直接转布局代码的一套标签</d-text>
        </div>
      </section>
    </div>
  );
}

export default App;
