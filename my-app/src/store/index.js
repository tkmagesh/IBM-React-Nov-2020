import { createStore } from 'redux';

//import productsReducer from '../reducers/productsReducer';
import categoriesReducer from '../reducers/categoriesReducer';

//const store = createStore(productsReducer);
const store = createStore(categoriesReducer);

export default store;