import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {visibilityFilter, priceFilter, fetchData} from '../actions/Actions.jsx';
import {Input, h5, Row, Col} from 'react-materialize';

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Row>
        <Col l={4}>
          <Input name='inStock'
            type='checkbox'
            value='inStock'
            label='Exclude out of stock'
            onChange={this.props.onFilter} />
        </Col>
        <Col l={2}>
          <h5>Price range:</h5>
        </Col>
        <Col l={6}>
          <Input name='min'
            id='min-1'
            l={4}
            type='number'
            defaultValue='0'
            min='0'
            max='100000'
            label='Min'
            step='1000'
            onChange={this.props.onRangeUpdate} />
          <Input name='max'
            id='max-1'
            l={4}
            type='number'
            defaultValue='100000'
            min='0'
            max='100000'
            label='Max'
            step='1000'
            onChange={this.props.onRangeUpdate} />
        </Col>
      </Row>
    )
  }
}

const mapDispatchToProps = (dispatch, ownprops) => ({
  onFilter: () => {
    dispatch(visibilityFilter());
  },
  onRangeUpdate: (ev) => {
    let arg = {
      [ev.target.name]: ev.target.value
    }
    dispatch(priceFilter(arg));

    let minVal = document.getElementById('min-1').value;
    let maxVal = document.getElementById('max-1').value
    let url = `http://localhost:8000/productListing?min_price=${minVal}&max_price=${maxVal}`;
    axios.get(url)
    .then(function (response) {
      dispatch(fetchData(response.data.result));
    })
    .catch(function(err) {
      console.log(err);
    });
  }
});

export default connect(null, mapDispatchToProps)(Filter);
