import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* 
import * as calculator from './math';
console.log(calculator); 
*/

/* 
//import * as calculator from './math';
//calculator.add(10,20)
//const add = calculator.add;
//const { add } = calculator;
import { add } from './math'
add(10,20) 
*/

//importing default exported object
/* 
import calculator from './math';
calculator.add(10,20); 
*/

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
