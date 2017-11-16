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
import config from '../../config.js'

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
      markers: config.markers.map((marker) => {
        return {
          ...marker,
          offsetX: marker.offsetX * scaleFactor,
          offsetY: marker.offsetY * scaleFactor,
        }
      })
    })
  }

  onMarkerClicked() {
    this.setState({
      opacity: 0
    })
  }

  onMarkerHovered(index) {
    let newMarkers = this.state.markers.map( (marker) => ({...marker, active: false}) )
    newMarkers[index].active = true
    this.setState({
      markers: newMarkers
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
              return <Marker key={index} {...markerProps} onHover={() => this.onMarkerHovered(index)} onClick={ () => this.onMarkerClicked(index)}/>
            })
          }
        </PaperScope> 
      </StyledMapWrapper>
    )
  }
}