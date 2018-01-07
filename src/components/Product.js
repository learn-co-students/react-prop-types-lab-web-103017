import React from 'react'
import PropTypes from 'prop-types'

export default class Product extends React.Component {
  render(){
    return (
      <div>
        <ul>
          <li> name: {this.props.name}</li>
          <li> name: {this.props.producer}</li>
          <li> name: {this.props.hasWatermark}</li>
          <li> name: {this.props.color}</li>
          <li> name: {this.props.weight}</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
}

const requireWeight = (prop, propName, componentName) => {
  const num = prop[propName];

  if (typeof num === "string"){
    return new Error("Must be a number")
  } else if (num < 80 || num > 300) {
    return new Error("Must be greater than 80 or less than 300")
  } else if (num === undefined) {
    return new Error("Must have a weight");
  }

}

const validWeight = (props, propName, componentName) => {
  const num = props[propName];

  if (num == "undefined") {
    return null;
  }
  return requireWeight(prop, propName, componentName);
};

validWeight.isRequired = requireWeight

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: validWeight.isRequired
}
