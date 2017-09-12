import products from './products.jsx';
import cart from './cart.jsx';
import total from './cartTotal.jsx';
import {combineReducers} from 'redux';

const cartApp = combineReducers({
  products: products,
  cart: cart,
  total: total
});

export default cartApp;
