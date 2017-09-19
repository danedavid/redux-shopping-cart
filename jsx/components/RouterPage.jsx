import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import React from 'react';

import ShoppingCart from './ShoppingCart.jsx';
import Checkout from './Checkout.jsx';

class RouterPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ShoppingCart} />
          <Route path="/checkout" component={Checkout} />
        </div>
      </Router>
    );
  }
}

export default RouterPage;
