import React from 'react';
import PropTypes from 'prop-types';

// Paper JS
import Paper, { Raster, Size, Point } from 'paper';
import Image from '../paper-react/components/Image.jsx';

import Marker from '../Marker/marker.svg'
import ReactGA from 'react-ga';

const ACTIVE_SCALE = 1.2;
const INACTIVE_SCALE = 0.83334;

/**
 * Image that that is spread as large as possible.
 */
export default class ContainedImage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    };
  }

  getScaleFactor(props) {
    if(props.active){
      return ACTIVE_SCALE
    }else{
      if(this.state.scaleFactor){
        return INACTIVE_SCALE
      }
    }
  }

  componentDidMount() {
    this.setState({
      x: Paper.view.center.x + this.props.offsetX,
      y: Paper.view.center.y + this.props.offsetY,
      scaleFactor: this.getScaleFactor(this.props)
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      x: Paper.view.center.x + nextProps.offsetX,
      y: Paper.view.center.y + nextProps.offsetY,
      scaleFactor: this.getScaleFactor(nextProps)
    });
  }
  
  onLoad = (raster: Raster) => {
    this.imageElement = raster;
    const imageSize = raster.size;
  }

  onClick = (event) => {
    this.props.onClick()
    const initialCenter = Paper.view.center;
    ReactGA.event({
      category: 'User',
      action: `selected location ${this.props.id}`
    });
    animateViewChange(new Point(this.state.x, this.state.y), 4, 150)
    .then( () => {
        Paper.view.center = initialCenter;
        Paper.view.zoom = 1;
        window.location.href = `http://${window.location.host}/country/${this.props.id}`
      })
  }

  onMouseEnter = () => {
    this.setState({
      scaleFactor: ACTIVE_SCALE
    })
    this.props.onHover();
  }

  onMouseLeave = () => {
  }

  render() {
    return (
      <Image 
        src={Marker} 
        onLoad={this.onLoad}
        scaleFactor={this.state.scaleFactor}
        rotation={this.state.rotation}
        onClick={this.onClick}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        x={this.state.x} y={this.state.y}/>);
  }
}

ContainedImage.propTypes = {
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
  active: PropTypes.bool
};


const easeOut = (step: number, start: number, target: number) => {
  return (start - target) * step * (step - 2) + start;
};
const easeIn = function (step: number, start: number, target: number) {
  return (target - start) * step * step + start;
};

export const MAX_ZOOM_OUT = 0.1; // can NOT be smaller than 0.01 otherwise canvas breaks

// Center View
export const MAX_ZOOM_IN = 5; // Closer will make zooming out very slow
export const ANIMATION_STEPS = 20; // Animation frames for moving the view box


const animateViewChange = (toCenter: Point, toZoom: number, steps: number = 20): Promise<*> => {
  return new Promise((resolve: () => void) => {
    const fromCenter = Paper.view.center;
    const fromZoom = Paper.view.zoom;
    const centerAnimation = toZoom < fromZoom ? easeIn : easeOut;
    const zoomAnimation = toZoom < fromZoom ? easeOut : easeIn;
    let step = 0;
    Paper.view.onFrame = () => {
      const progress = step / steps;
      Paper.view.center = new Point(
        centerAnimation(progress, fromCenter.x, toCenter.x),
        centerAnimation(progress, fromCenter.y, toCenter.y),
      );
      Paper.view.zoom = zoomAnimation(progress, fromZoom, toZoom);
      step += 1;
      // Animation is done
      if (step >= steps) {
        Paper.view.onFrame = null;
        resolve();
      }
    };
  });
};