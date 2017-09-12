import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import cartApp from '../reducers/index.jsx';

import ShoppingCart from './ShoppingCart.jsx';

let store = createStore(
  cartApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  //for devtools debugging
);

ReactDOM.render(
  <Provider store={store}>
    <ShoppingCart/>
  </Provider>,
  document.getElementById('root')
);
