import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>Producer: {this.props.producer}</p>
        <p>Watermark: {String(this.props.hasWatermark)}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(prop, key) {
    const weight = prop[key];

    if(weight === undefined){
      return new Error ("Sorry you must include a number for weight.");
    }else if (isNaN(weight)) {
      return new Error ("Sorry weight must be a number.")
    }else if (weight < 80 || weight > 300) {
      return new Error("Must be within range of 80 to 300");
    }
    return null;
  }
};
