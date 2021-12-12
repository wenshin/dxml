import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{ padding: 40 }}>
      <section>
      <d-text><h1>布局的原理</h1></d-text>
        <p>一般的我们用树这种数据结构来管理 UI 元素。从元素树的角度看，布局有两个方向，一个是由上而下，从父节点限制子节点空间；一个是由下而上，子节点决定父节点空间。</p>
        <p>由上而下的布局，性能好。而由下而上的布局，往往会涉及到大量元素的回溯计算，以及整体重新计算布局。</p>
        <p>由下而上的布局，往往是在涉及到长度不等的文本展示时会遇到，我们会建议在这种布局上加上最大最小的限制，以提高布局性能。</p>
      </section>
      <section>
      <d-text><h1>圣杯布局</h1></d-text>
        <div className='case-container'>
          <d-view layout='col' gap='10px'>
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
          </d-view>
        </div>
        <pre>
          <code className="language-html">{
`<d-view layout='col' gap='10px'>
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
        <d-text><h1>等宽 3 列，元素水平垂直居中</h1></d-text>
        <div className='case-container'>
          <d-view layout='row' gap='12px'>
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
`<d-view layout='row' gap='12px'>
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
        <d-text><h1>不同比例列，元素水平垂直居中</h1></d-text>
        <div className='case-container'>
          <d-view layout='row' gap='12px'>
            <d-col dimension='1' align-items='center'><div>A</div><div>A</div></d-col>
            <d-col dimension='2' align-items='center'>BB</d-col>
            <d-col dimension='2' align-items='center'>CC</d-col>
          </d-view>
        </div>
        <pre>
          <code className="language-html">{
`<d-view layout='row' gap='12px'>
  <d-col dimension='1' align-items='center'><div>A</div><div>A</div></d-col>
  <d-col dimension='2' align-items='center'>BB</d-col>
  <d-col dimension='2' align-items='center'>CC</d-col>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <d-text><h1>水平三明治布局</h1></d-text>
        <div className='case-container'>
          <d-view layout='row' gap='12px'>
            <d-col align-items='center'>AAA</d-col>
            <d-col dimension='stretch' align-items='center'>B</d-col>
            <d-col align-items='center'>C</d-col>
          </d-view>
        </div>
        <pre>
          <code className="language-html">{
`<d-view layout='row' gap='12px'>
  <d-col align-items='center'>AAA</d-col>
  <d-col dimension='stretch' align-items='center'>B</d-col>
  <d-col align-items='center'>C</d-col>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <d-text><h1>垂直三明治布局</h1></d-text>
        <div className='case-container'>
          <d-view layout='col' gap='12px'>
            <d-row align-items='center'>A</d-row>
            <d-row dimension='stretch' align-items='center'>B</d-row>
            <d-row align-items='center'>C</d-row>
          </d-view>
        </div>
        <pre>
          <code className="language-html">{
`<d-view layout='col' gap='12px'>
  <d-row align-items='center'>A</d-row>
  <d-row dimension='stretch' align-items='center'>B</d-row>
  <d-row align-items='center'>C</d-row>
</d-view>`}
          </code>
        </pre>
      </section>
      <section>
        <d-text><h1>不同比例行布局</h1></d-text>
        <div className='case-container'>
          <d-view layout='col' gap='12px'>
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
          </d-view>
        </div>
        <pre>
          <code className="language-html">{
`<d-view layout='col' gap='12px'>
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
        <d-text><h1>浮动元素定位</h1></d-text>
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
        <d-text><h1>inline 元素布局</h1></d-text>
        <div className='case-container'>
          <d-view layout="inline" gap='12px 16px'>
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
          </d-view>
        </div>
        <pre>
          <code className="language-html">{
`<d-view layout="inline" gap='12px 16px'>
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
        <d-text><h1>自动修正文本 line height 导致的边距问题</h1></d-text>
        <d-row>
          <d-text>DXML 设计了更适合设计稿直接转布局代码的一套标签</d-text>
          <d-text>DXML Design for a better layout markable language from design to developer</d-text>
        </d-row>
      </section>
    </div>
  );
}

export default App;
