import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './webc';

ReactDOM.render(
  <React.StrictMode>
    <App />
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
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
