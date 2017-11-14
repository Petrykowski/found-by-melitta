import React from 'react'

import StyledMap from './StyledMap'
import ReactMapboxGl, {Marker} from 'react-mapbox-gl'
import StyledMarker from '../Marker/StyledMarker'

const Map = new ReactMapboxGl({
  accessToken: "pk.eyJ1IjoicGV0cnlrb3dza2ltIiwiYSI6ImNqOXltamg4aDE1dW0yeG1kczc3b3J4N3gifQ.OQGr-go724ruHM_OuOtVNA",
  minZoom: 0,
  // renderWorldCopies: false,
  refreshExpiredTiles: false,
  // maxZoom: 20,
});


export default class WorldMap extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount (){
  }

  render() {
    return (
      <StyledMap>
        <Map zoom={[1]} style="mapbox://styles/petrykowskim/cj9ynxotu7stb2snzaqjiiud4">
        <Marker
          coordinates={[-9.244932, -73.975664]}
          anchor="bottom">
          <StyledMarker/>
        </Marker>
        </Map>
      </StyledMap>
    )
  }
}