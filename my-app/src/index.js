import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { bindActionCreators } from 'redux';
import Products from './products';
import productActionCreators from './products/actions';

import store from './store';

const productActionDispatchers = bindActionCreators(productActionCreators, store.dispatch);

function renderApp(){
  const products = store.getState();
  ReactDOM.render(
    <React.StrictMode>
      <Products data={products} {...productActionDispatchers} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderApp();

store.subscribe(renderApp);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
