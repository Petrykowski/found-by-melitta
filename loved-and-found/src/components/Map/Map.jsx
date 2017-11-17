import React from 'react'

import StyledMap from './StyledMap'
import StyledCanvasMap from './StyledCanvasMap'
import StyledMapWrapper from './StyledMapWrapper'

import ReactDOM from 'react-dom'
// import Marker from '../Marker/StyledMarker';

import {PaperScope} from '../paper-react/components/PaperScope'
import {Image} from '../paper-react/components/Image'
import ContainedImage from '../canvas/ContainedImage'
import Marker from '../canvas/Marker'

import Preview from '../Preview/Preview'

import Paper, { Point, Tool, Rectangle } from 'paper';

//assets
import Map from './map.png';
import config from '../../config.js'

export default class WorldMap extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      markers: [],
      opacity: 0,
      loaded: false
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
          loaded: true,
        }
      })
    })
  }

  onSelectLocation(id) {
    let newMarkers = this.state.markers
    newMarkers[id].select = true;
    newMarkers[id].show = false;
    this.setState({
      markers: newMarkers,
      opacity: 0
    })
  }

  onMarkerClicked(index) {
    let newMarkers = this.state.markers.map( (marker) => ({...marker, active: false}) )
    console.log(newMarkers[index])
    newMarkers[index].show = !newMarkers[index].show

    newMarkers[index].active = true
    console.log(newMarkers[index])
    this.setState({
      show: newMarkers
    })
  }

  onMarkerHovered(index) {
    let newMarkers = this.state.markers.map( (marker) => ({...marker, active: false, show: true}) )
    newMarkers[index].active = true
    this.setState({
      markers: newMarkers
    })
  }

  render() {
    return (
      <StyledMapWrapper opacity={this.state.opacity}>
        <StyledCanvasMap id="map" data-paper-resize="true"/>
        {
          this.state.markers.length > 0 ?
          ReactDOM.createPortal(
            (<Preview marker={this.state.markers.filter( (m) => m.active)} showMore={(index) => this.onSelectLocation(index) } />),
            document.getElementById('modal'),
          ) : null
        }
        <PaperScope 
          canvasId='map'>
          <ContainedImage 
            src={Map}
            onLoad={this.imageLoaded}
            onMove={this.onMove}
          />
          {
            this.state.markers.map( (markerProps, index) => {
              return <Marker 
                key={index} 
                {...markerProps} 
                onHover={() => this.onMarkerHovered(index)} 
                onClick={ () => this.onMarkerClicked(index)} 
                />
            })
          }
        </PaperScope> 
      </StyledMapWrapper>
    )
  }
}