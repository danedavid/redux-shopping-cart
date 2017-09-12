import React from 'react';

import ItemsContainer from './ItemsContainer.jsx';
import Cart from './Cart.jsx';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <ItemsContainer/>
        <Cart/>
      </div>
    );
  }
}

export default ShoppingCart;
