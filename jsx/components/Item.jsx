import React from 'react';
import {connect} from 'react-redux';
import {addItemToCart} from '../actions/Actions.jsx';

import {Card, Row, Col, Button} from 'react-materialize';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card horizontal title={this.props.pName}>
        <Row>
          <Col l={6}>
            <p>Price: Rs.{this.props.pPrice}</p>
            <p>Quantity available: {this.props.pQuantity}</p>
          </Col>
          <Col l={6}>
            <Button waves='light' className='green'
              disabled={ ( this.props.pQuantity === 0 )? true : false}
              onClick={this.props.onButtonClick}>Add to Cart</Button>
          </Col>
        </Row>
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch, ownprops) => ({
  onButtonClick: () => {
    dispatch(addItemToCart({
      id: ownprops.pID,
      name: ownprops.pName,
      price: ownprops.pPrice,
      quantity: ownprops.pQuantity
    }));
  }
});

export default connect(null, mapDispatchToProps)(Item);
