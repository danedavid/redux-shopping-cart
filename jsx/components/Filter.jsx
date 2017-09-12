import React from 'react';
import {connect} from 'react-redux';
import {visibilityFilter, priceFilter} from '../actions/Actions.jsx';
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
            l={4}
            type='number'
            defaultValue='0'
            min='0'
            max='100000'
            label='Min'
            onChange={this.props.onRangeUpdate} />
          <Input name='max'
            l={4}
            type='number'
            defaultValue='100000'
            min='0'
            max='100000'
            label='Max'
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
  }
});

export default connect(null, mapDispatchToProps)(Filter);
