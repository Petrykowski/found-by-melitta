import React from 'react';
import PropTypes from 'prop-types';

// Paper JS
import { Point, Raster } from 'paper';

import isInteractable from '../properties/isInteractable'

export class Image extends React.Component {

  componentDidMount() {
    this.element = new Raster();
    this.element.onLoad = this.onLoad;
    this.element.position = new Point(this.props.x, this.props.y);
    this.element.source = this.props.src;
  }

  componentWillUnmount() {
    this.element.remove();
  }

  componentWillReceiveProps(nextProps){
    const diffKeys = this.createPropDiff(nextProps, this.props);
    diffKeys.forEach( (key) => this.updateElementProperty(key, nextProps));
  }

  createPropDiff(nextProps, props){
    const dirtyKeys = Object.keys(nextProps).filter( (key) => !props.hasOwnProperty(key) );
    const changedKeys = Object.keys(props).filter( (key) => props[key] !== nextProps[key] );
    return dirtyKeys.concat(changedKeys);
  }

  updateElementProperty(propertyKey: string, nextProps){
    switch(propertyKey){
    case 'x':
      this.element.position.x = nextProps.x;
      break;
    case 'y':
      this.element.position.y = nextProps.y;
      break;
    case 'src':
      this.element.source = nextProps.src;
      break;
    case 'scaleFactor':
      this.element.scale(nextProps.scaleFactor);
      break;
    case 'rotation':
      this.element.rotation = nextProps.rotation;
      break;
    default:
      break;
    }
  }
  
  onLoad = () => {
    if(this.props.onLoad){
      this.props.onLoad(this.element);
    }
  }

  render() {
    return null;
  }
}

Image.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  scaleFactor: PropTypes.number,
  rotation: PropTypes.number,
  src: PropTypes.string.isRequired,
  onLoad: PropTypes.func,
};

Image.defaultProps = {
  x: 0,
  y: 0,
};

const InteractableImage = isInteractable(Image);
export default InteractableImage