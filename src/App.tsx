import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{ padding: 40 }}>
      <h1>圣杯布局</h1>
      <div style={{ height: '200px' }}>
        <d-view role='col'>
          <d-row align-items='center'>
            Header
          </d-row>
          <d-row dimension='stretch'>
            <d-view align-items='center'>SideBar</d-view>
            <d-view dimension='stretch' align-items='center'>Content</d-view>
            <d-view align-items='center'>SideBar</d-view>
          </d-row>
          <d-row align-items='center'>
            Footer
          </d-row>
        </d-view>
      </div>
      <h1>等宽 3 列，元素水平垂直居中</h1>
      <div style={{ height: '200px' }}>
        <d-view role='row'>
          <d-view dimension='1' align-items='center'><div>A</div><div>A</div></d-view>
          <d-view dimension='1' align-items='center'>BB</d-view>
          <d-view dimension='1' align-items='center'>CC</d-view>
        </d-view>
      </div>
      <h1>不同比例列，元素水平垂直居中</h1>
      <div style={{ height: '200px' }}>
        <d-view role='row'>
          <d-view dimension='1' align-items='center'><div>A</div><div>A</div></d-view>
          <d-view dimension='2' align-items='center'>BB</d-view>
          <d-view dimension='2' align-items='center'>CC</d-view>
        </d-view>
      </div>
      <h1>水平三明治布局</h1>
      <div style={{ height: '200px' }}>
        <d-view role='row'>
          <d-view align-items='center'>A</d-view>
          <d-view dimension='stretch' align-items='center'>B</d-view>
          <d-view align-items='center'>C</d-view>
        </d-view>
      </div>
      <h1>垂直三明治布局</h1>
      <div style={{ height: '200px' }}>
        <d-view role='col'>
          <d-view align-items='center'>A</d-view>
          <d-view dimension='stretch' align-items='center'>B</d-view>
          <d-view align-items='center'>C</d-view>
        </d-view>
      </div>
      <h1>不同比例行布局</h1>
      <div style={{ height: '200px' }}>
        <d-view role='col'>
          <d-row dimension='1'>
            <d-view align-items='center'>A</d-view>
            <d-view dimension='stretch' align-items='center'>B</d-view>
            <d-view align-items='center'>C</d-view>
          </d-row>
          <d-row dimension='2'>
            <d-view align-items='center' style={{ width: 30 }}>A</d-view>
            <d-view dimension='stretch' align-items='center'>B</d-view>
            <d-view align-items='center'>C</d-view>
          </d-row>
        </d-view>
      </div>
      <h1>浮动元素定位</h1>
      <div style={{ height: '200px' }}>
        <d-view role='col'>
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
    </div>
  );
}

export default App;
