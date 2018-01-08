// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.producer}</h2>
        <h2>{this.props.color}</h2>
        <h2>{this.props.weight}</h2>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark : false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  hasWatermark: PropTypes.bool,
  producer: PropTypes.string,
  color: PropTypes.oneOf ([
    "white",
    "eggshell-white",
    "salmon"
  ]).isRequired,
  weight: function weightProp(props, propName) {
    const weight = props[propName]

    if (weight === undefined) {
      return new Error('weight is required!')
    }

    if (isNaN(weight)) {
      return new Error('weight must be a number!')
    }

    if (weight < 80 || weight > 300) {
      return new Error('weight must be between 80 and 300!')
    }
  }
}

export default Product
