import React from 'react';
import {connect} from 'react-redux';
import {addItemToCart} from '../actions/Actions.jsx';
import axios from 'axios';
import {Card, Row, Col, Button, Icon} from 'react-materialize';

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
              onClick={this.props.onButtonClick}>Add to Cart<Icon small right>add_shopping_cart</Icon></Button>
          </Col>
        </Row>
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch, ownprops) => ({
  onButtonClick: () => {
    console.log("buttonclick");
    axios.post('http://localhost:8000/add_to_cart',{
      "item": {
        "productID": ownprops.pID,
        "name": ownprops.pName,
        "price": ownprops.pPrice,
        "quantity": 1
      }
    })
    .then(function(response) {
      console.log(response.data.result);
      dispatch(addItemToCart({
        productID: ownprops.pID,
        name: ownprops.pName,
        price: ownprops.pPrice
      }));
    })
    .catch(function(error) {
      console.log("POST error!");
    });
  }
});

export default connect(null, mapDispatchToProps)(Item);
