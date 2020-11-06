import { createStore, combineReducers } from 'redux';

import productsReducer from '../reducers/productsReducer';
import categoriesReducer from '../reducers/categoriesReducer';

const rootReducer = combineReducers({
    products : productsReducer,
    categories : categoriesReducer
});

//const store = createStore(productsReducer);
//const store = createStore(categoriesReducer);

const store = createStore(rootReducer);

//important : the following line has to REMOVED when the application is deployed for production
window['store'] = store;

// store state = { products : [], categories : []}
export default store;