import React from 'react';
import {connect} from 'react-redux';

import {Collection, CollectionItem, Row, Col, Button, Modal, Icon} from 'react-materialize';

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

    let modalContent = null;
    if( collectionsArray.length === 0 ) {
      modalContent = <span style={{fontWeight: "bold", fontSize: "30px"}}>Cart Empty!</span>;
    }
    else {
      modalContent = <div>
                        <Collection>{collectionsArray}</Collection>
                        <span style={{fontWeight: "bold", fontSize: "30px"}}>
                          Total Amount: {this.props.total}
                        </span>
                      </div>;
    }

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
                    <Icon right>shopping_cart</Icon>
                  </Button>
                  <Modal id='foo' header='Purchase confirmed!'>
                    {modalContent}
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
