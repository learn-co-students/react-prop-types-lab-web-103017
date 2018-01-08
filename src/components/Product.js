import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component{
  render() {
    return (
      <div className="product">
        <h1>{this.props.name}</h1>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
      )
  }
};

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightRangeChecker
};

function weightRangeChecker(props, propName, componentName) {
  if (props[propName]) {
    let value = props[propName];
    if (typeof value !== 'number') {
      return new Error("must be number")
    } else if (typeof value === 'number') {
    return (value > 80 && value < 300) ? null : new Error("not in range")
    }  
  } else if (props[propName]=== undefined) {
    return new Error("is required")
  }

  return null;
}

export default Product;