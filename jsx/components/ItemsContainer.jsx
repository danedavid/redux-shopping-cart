import React from 'react';
import {connect} from 'react-redux';

import Item from './Item.jsx';
import Filter from './Filter.jsx';

class ItemsContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let visibleProducts;
    if( this.props.visibilityFilter ) {
      visibleProducts = this.props.products.filter( (elem) => ( elem.quantity > 0 ) );
    } else {
      visibleProducts = this.props.products;
    }

    visibleProducts = visibleProducts.filter( (elem) => (
      (elem.price >= this.props.priceFilter.min)&&(elem.price <= this.props.priceFilter.max)
    ));

    let it = 0;
    let itemsArray = visibleProducts.map( (elem) => (
      <Item key={"prod-" + it++}
        pID={elem.id}
        pName={elem.name}
        pPrice={elem.price}
        pQuantity={elem.quantity}/>
    ));

    return (
      <div>
        <Filter/>
        {itemsArray}
      </div>
    );
  }
}

const mapStateToProps = (state, ownprops) => ({
  products: state.products,
  visibilityFilter: state.visibilityFilter,
  priceFilter: state.priceFilter
});

export default connect(mapStateToProps)(ItemsContainer);
