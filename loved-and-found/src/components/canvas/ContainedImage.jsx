import React from 'react';
import PropTypes from 'prop-types';
import Exif from 'exif-js';

// Paper JS
import Paper, { Raster, Size } from 'paper';
import Image from '../paper-react/components/Image.jsx';

const ORIENTATION_ROTATION_MAP = {
  6: 90,
  8: -90,
  3: 180
};
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

  componentDidMount() {
    this.setState({
      x: Paper.view.center.x,
      y: Paper.view.center.y
    });
  }
  
  onLoad = (raster: Raster) => {
    this.imageElement = raster;
    const imageSize = raster.size;

    this.orientationOfImage(raster)
      .then( (orientation: number) => {
        let scalingSize = imageSize.clone();
        if (orientation === 6 || orientation === 8){
          scalingSize = new Size(scalingSize.height,scalingSize.width);
        };
        
        const scaleFactor = this.computeScaleFactor(Paper.view.viewSize, scalingSize);
        const offset = Paper.view.viewSize.subtract(scalingSize.multiply(scaleFactor)).divide(2);

        this.setState({
          scaleFactor: scaleFactor,
          rotation: ORIENTATION_ROTATION_MAP[orientation]
        });
        this.props.onLoad(scaleFactor);
      });
  }

  computeScaleFactor = (viewSize: Size, scalingSize: Size) : Number => {
    const scaleFactors = viewSize.divide(scalingSize);
    return scaleFactors.height;
  };

  // Returns value representing the orientation.
  // 6 - Upright (hochkant)
  // 8 - Lengthways (längs)
  // 3 - Upsidedown
  orientationOfImage(raster: Raster) : Number {
    return new Promise( (resolve, reject) => {
      Exif.getData(raster.image, function() {
        resolve(Exif.getTag(raster.image, 'Orientation'));
      });
    });
  }

  onMouseDown(event) {
  }
  onMouseDrag = (event) => {    
    let overlap = Paper.view.size.width - this.imageElement.bounds.size.width
    let minX = Paper.view.center.x - Math.abs(overlap / 2)
    let maxX = Paper.view.center.x + Math.abs(overlap / 2)

    let newX = Math.min(maxX, Math.max(this.state.x+event.delta.x, minX) )
    if(overlap < 0){
      this.props.onMove(this.state.x - newX)
      this.setState({
        x: newX
      })
    }
  }
  onMouseUp(event) {

  }

  render() {
    return (
      <Image 
        src={this.props.src} 
        onLoad={this.onLoad}
        scaleFactor={this.state.scaleFactor}
        rotation={this.state.rotation}
        onMouseDown={this.onMouseDown}
        onMouseDrag={this.onMouseDrag}
        onMouseUp={this.onMouseUp}
        x={this.state.x} y={this.state.y}/>);
  }
}

ContainedImage.propTypes = {
  src: PropTypes.string.isRequired,
};