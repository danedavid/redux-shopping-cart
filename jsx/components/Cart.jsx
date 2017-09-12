import React from 'react';
import {connect} from 'react-redux';

import {Collection, CollectionItem, Row, Col, Button, Modal} from 'react-materialize';

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
                <span style={{fontWeight: "bold", fontSize: "25px"}}>Total: Rs. {this.props.total}</span>
              </Col>
              <Col l={4}>
                <div>
                  <Button large waves='green' className='green' onClick={() => {$('#foo').modal('open')}}>
                    <span style={{fontWeight: "bold", fontSize: "20px"}}>Checkout</span>
                  </Button>
                  <Modal id='foo' header='Purchase confirmed!'>
                    <Collection>
                      {collectionsArray}
                    </Collection>
                    <span style={{fontWeight: "bold", fontSize: "30px"}}>Total Amount: {this.props.total}</span>
                  </Modal>
                </div>
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
