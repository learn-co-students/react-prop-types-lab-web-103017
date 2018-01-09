// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component{
  constructor()
  {
    super()
  }
  render(){
    return(
      <h1>Product</h1>
    )
  }
}

// name: a string — required
// producer: a string — optional
// hasWatermark: a boolean — optional, defaults to false
// color: a string — required, can only be 'white', 'eggshell-white' or 'salmon'
// weight: a number — required, ranges between 80 and 300

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(["eggshell-white", "white", "salmon"]).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];
    if(weight === undefined)
    {
      return new Error("The 'weight' prop is required");
    }

    if(isNan(weight))
    {
      return new Error('The `weight` prop is not a number.');
    }

    const isValidWeight = weight > 80 && weight < 300;

    if (!isValidWeight) {
        return new Error('The `weight` prop should range between 80 and 300.');
    }
  },

};
export default Product;
