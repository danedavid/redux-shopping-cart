import React from 'react';
import {connect} from 'react-redux';

import Item from './Item.jsx';

class ItemsContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let it = 0;
    let itemsArray = this.props.products.map( (elem) => (
      <Item key={"prod-" + it++}
        pID={elem.id}
        pName={elem.name}
        pPrice={elem.price}
        pQuantity={elem.quantity}/>
    ));

    return (
      <div>
        {itemsArray}
      </div>
    );
  }
}

const mapStateToProps = (state, ownprops) => ({
  products: state.products
});

export default connect(mapStateToProps)(ItemsContainer);
