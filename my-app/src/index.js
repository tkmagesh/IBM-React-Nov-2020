import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { bindActionCreators } from 'redux';

import Products from './products';
import productActionCreators from './products/actions';

import Categories from './categories';
import categoryActionCreators from './categories/actions';

import store from './store';

//creating action dispatchers
const productActionDispatchers = bindActionCreators(productActionCreators, store.dispatch);
const categoryActionDispatchers = bindActionCreators(categoryActionCreators, store.dispatch);

function renderApp(){
  //extracting the data
  const storeState = store.getState();
  const products = storeState.products;
  const categories = storeState.categories;

  //passing the data & action dispatchers to the component
  ReactDOM.render(
    <React.StrictMode>
      <Categories data={categories} {...categoryActionDispatchers} />
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
