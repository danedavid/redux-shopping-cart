import React from 'react';
import {connect} from 'react-redux';

import {Collection, CollectionItem, Row, Col} from 'react-materialize';

var collectionsArray = [];

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let it = 0;
    collectionsArray = this.props.cart.map( (elem) => (
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

    return (
      <div>
        <h2>Your Cart</h2>
        <Collection>
          {collectionsArray}
          <CollectionItem active>
            <Row>
              <Col l={8}>
              </Col>
              <Col l={4}>
                <span style={{fontWeight: "bold", fontSize: "25px"}}>Total: Rs. {this.props.total}</span>
              </Col>
            </Row>
          </CollectionItem>
        </Collection>
      </div>
    );
  }
}

const mapStateToProps = (state, ownprops) => ({
  cart: state.cart,
  total: state.total
});

export default connect(mapStateToProps)(Cart);
