import React from 'react'

import StyledMap from './StyledMap'
import StyledCanvasMap from './StyledCanvasMap'
import StyledMapWrapper from './StyledMapWrapper'

// import Marker from '../Marker/StyledMarker';

import {PaperScope} from '../paper-react/components/PaperScope'
import {Image} from '../paper-react/components/Image'
import ContainedImage from '../canvas/ContainedImage'
import Marker from '../canvas/Marker'

import Paper, { Point, Tool, Rectangle } from 'paper';

//assets
import Map from './map.png';

export default class WorldMap extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      markers: [],
      opacity: 0
    }
  }

  componentDidMount (){
    this.setState({
      opacity: 1
    })
  }

  onMove = (deltaX) => {
    //Move markers here
    let newMarkers = this.state.markers.map( (marker) => {
      marker.offsetX -= deltaX;
      return marker
    })

    this.setState({
      markers: newMarkers
    })
    this.props.isMoving()
  }

  imageLoaded = (scaleFactor) => {
    this.setState({
      markers: [
        {
          offsetX: -650 * scaleFactor,
          offsetY: 450 * scaleFactor
        },
        {
          offsetX: 220 * scaleFactor,
          offsetY: 330 * scaleFactor
        },
        {
          offsetX: 10 * scaleFactor,
          offsetY: 300 * scaleFactor
        }
      ]
    })
  }

  onMarkerClicked() {
    this.setState({
      opacity: 0
    })
  }

  render() {
    return (
      <StyledMapWrapper opacity={this.state.opacity}>
        <StyledCanvasMap id="map" data-paper-resize="true"/>
        <PaperScope 
          canvasId='map'>
          <ContainedImage 
            src={Map}
            onLoad={this.imageLoaded}
            onMove={this.onMove}
          />
          {
            this.state.markers.map( (markerProps, index) => {
              return <Marker key={index} {...markerProps} onClick={ () => this.onMarkerClicked(index)}/>
            })
          }
        </PaperScope> 
      </StyledMapWrapper>
    )
  }
}