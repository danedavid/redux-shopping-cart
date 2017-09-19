import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import Item from './Item.jsx';
import Filter from './Filter.jsx';
import {fetchData} from '../actions/Actions.jsx';

class ItemsContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.receiveData('http://localhost:8000/productListing');
  }
  render() {
    let visibleProducts;
    if( this.props.visibilityFilter ) {
      visibleProducts = this.props.products.filter( (elem) => ( elem.quantity > 0 ) );
    } else {
      visibleProducts = this.props.products;
    }

    let it = 0;
    let itemsArray = visibleProducts.map( (elem) => (
      <Item key={"prod-" + it++}
        pID={elem.productID}
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

const mapDispatchToProps = (dispatch, ownprops) => ({
  receiveData: (url) => {
    axios.get(url)
    .then(function(response) {
      dispatch(fetchData(response.data.result));
    })
    .catch(function (error) {
      console.log("Error");
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
