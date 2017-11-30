import React from 'react'

import StyledPreview from './StyledPreview'
import Paper from 'paper'

import SectionWrapper from '../FamilyProfile/SectionWrapper'
import DetailButton from './detailButton'
import TopSection from './TopSection'

import config from '../../config'

export default class Preview extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      x: 0,
      y: 0,
      show: true
    }
    console.log(this.props)
  }

  select = () => {
    this.props.showMore(this.props.marker[0].id)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.marker.length === 1){
      var marker = nextProps.marker[0]

      var x = marker.offsetX + (Paper.view.bounds.width / 2)
      var y = marker.offsetY + (Paper.view.bounds.height / 2)

      this.setState({
        x: x,
        y: y,
        coffee: config.coffees[marker.id],
        show: marker.show
      })
    }
  }

  render() {
    // <img src="/farmer_small.png" style={{color: 'white'}}/>
    return this.state.coffee ? (
      <StyledPreview className='preview' x={this.state.x} y={this.state.y} show={this.state.show}>
        <TopSection>
          <span style={{color: 'white'}}>{this.state.coffee.country}</span>
        </TopSection>
        <SectionWrapper>
          <span >{this.state.coffee.description}</span>
        </SectionWrapper>
        <SectionWrapper>
          <DetailButton onClick={() => this.select()}>Mehr Erfahren</DetailButton>
        </SectionWrapper>
      </StyledPreview>
    ) : null
  }
}

Preview.defaultProps = {
  show: true,
}