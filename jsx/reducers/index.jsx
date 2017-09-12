import products from './products.jsx';
import cart from './cart.jsx';
import total from './cartTotal.jsx';
import visibilityFilter from './visibilityFilter.jsx';
import priceFilter from './priceFilter.jsx';
import {combineReducers} from 'redux';

const cartApp = combineReducers({
  products: products,
  cart: cart,
  total: total,
  visibilityFilter: visibilityFilter,
  priceFilter: priceFilter
});

export default cartApp;
