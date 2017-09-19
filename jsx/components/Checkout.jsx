import React from 'react';
import {connect} from 'react-redux';
import {Collection, CollectionItem, Row, Col} from 'react-materialize';

class Checkout extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let it = 0;
    let collectionsArray = this.props.cart.map( (elem) => (
      <CollectionItem key={ "cart-item-" + it++ }>
        <Row>
          <Col l={4}>
            {elem.name}
          </Col>
          <Col l={4}>
            {elem.count}
          </Col>
          <Col l={4}>
            {elem.price * elem.count}
          </Col>
        </Row>
      </CollectionItem>
    ));

    let cartContent = null;
    if( collectionsArray.length === 0 ) {
      cartContent = <span style={{fontWeight: "bold", fontSize: "30px"}}>Cart Empty!</span>;
    }
    else {
      cartContent = <div>
                        <h1>Your Order</h1>
                        <Collection>{collectionsArray}</Collection>
                        <span style={{fontWeight: "bold", fontSize: "30px"}}>
                          Total Amount: {this.props.total}
                        </span>
                      </div>;
    }
    return (
      <div>
        {cartContent}
      </div>
    );
  }
}

const mapStateToProps = (state, ownprops) => ({
  cart: state.cart,
  total: state.total
});

export default connect(mapStateToProps)(Checkout);
