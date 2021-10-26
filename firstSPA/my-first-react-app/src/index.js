import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 요렇게 import를 해오기 위해서는 해당 콤포넌트에서 반드시 export를 해줘야 한다.

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
