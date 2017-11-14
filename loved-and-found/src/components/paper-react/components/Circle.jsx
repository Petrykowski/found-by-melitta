import React from 'react';
import PropTypes from 'prop-types';

// HOC
import withPropsDiff from '../withPropsDiff.js';
import isInteractable from '../properties/isInteractable.jsx';

// Paper JS
import { Path, Point } from 'paper';

class PaperCircle extends React.Component {

  constructor(props) {
    super(props)
    this.sth = "hall";
  }
  componentDidMount() {
    this.element = new Path.Circle(new Point(this.props.x,this.props.y), this.props.radius);
    this.element.fillColor = this.props.fillColor;
  }
  
  componentWillUnmount() {
    this.element.remove();
  }

  say(){
    console.log("hello circle")
  }

  updateElementProperty(propertyKey: string, nextProps){
    switch(propertyKey){
    case 'x':
    case 'y':
      this.element.position[propertyKey] = nextProps[propertyKey];
      break;
    case 'fillColor':
      this.element.fillColor = nextProps.fillColor;
      break;
    case 'radius':
      this.changeRadius(nextProps.radius);
      break;
    default:
      break;
    }
  }

  // Segments-Order 
  // [0] - left 
  // [1] - bottom 
  // [2] - right
  // [3] - top
  changeRadius(newRadius) {
    const radiusDiff = newRadius - this.props.radius;
    this.element.segments[0] += radiusDiff;
    this.element.segments[1] += radiusDiff;
    this.element.segments[2] += radiusDiff;
    this.element.segments[3] += radiusDiff;
  }
  
  render() {
    return null;
  }
}

PaperCircle.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  fillColor: PropTypes.string,
};

export const Circle = isInteractable( withPropsDiff( PaperCircle ) );