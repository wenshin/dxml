import React from 'react';
import './App.css';

function App() {
  return (
    <d-view>
      <d-row height='equal'>
        <d-layer>
          <d-float class='my-class' align='top'>top</d-float>
          <d-float align='right-top'>right-top</d-float>
          <d-float align='right'>right</d-float>
          <d-float align='right-bottom'>right-bottom</d-float>
          <d-float align='bottom'>bottom</d-float>
          <d-float align='left-bottom'>left-bottom</d-float>
          <d-float align='left'>left</d-float>
          <d-float align='left-top'>left-top</d-float>
          <d-float align='center'>center</d-float>
        </d-layer>
      </d-row>
      <d-row height='equal'>
        <d-view>
          <d-col>col1</d-col>
          <d-col width='stretch'>
            <d-view>
              <d-row height='equal'>row1</d-row>
              <d-row height='equal'>row2</d-row>
              <d-row height='equal'>row3</d-row>
            </d-view>
          </d-col>
        </d-view>
      </d-row>
    </d-view>
  );
}

export default App;
