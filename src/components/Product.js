// Code Product Component Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Product extends React.Component{
  render() {
    return(
      <div className='products'>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    );
  };
};

Product.defaultProps={
  hasWatermark: false
}

Product.propTypes={
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(prop, name) {
    const weight = prop[name];
    if (!weight) {
      return new Error('weight is required');
    };
    if (isNaN(weight)) {
      return new Error('weight is not a number.');
    }
    if (!(weight > 80 && weight < 300)) {
      return new Error ('weight is not between 80 and 300.');
    }
  }
}


export default Product;
