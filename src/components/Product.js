// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component{
  render(){
    return (
      <div className="order">
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.producer}</li>
        <li>{this.props.hasWatermark}</li>
        <li>{this.props.color}</li>
        <li>{this.props.weight}</li>
      </ul>
    </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white','salmon']).isRequired,
  // weight: function(props, propName, componentName) {
  //   const weight = props[propName];
  //   if (weight === undefined) {
  //     return new Error("Sorry you must include a number for weight.");
  //   }
  //
  //   if (isNaN(weight)) {
  //     return new Error("Sorry weight must be a number.");
  //   }
  //
  //   return weight > 80 && weight < 300 ? null : new Error("Must be within range of 80 to 300");
  // }
  weight: function(props, propName, componentName) {
    const weight = props[propName];
    if(weight === undefined){
      return new Error ("Sorry you must include a number for weight.");
    }else if (isNaN(weight)) {
      return new Error ("Sorry weight must be a number.")
    }else if (props[propName] < 80 || props[propName] > 300) {
      return new Error("Must be within range of 80 to 300");
    }
    return null;
  }
}

export default Product
