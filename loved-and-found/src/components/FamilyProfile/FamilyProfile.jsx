import React from 'react';

import StyledFamilyProfile from './StyledFamilyProfile'
import SectionWrapper from './SectionWrapper'
import TableRow from './TableRow'
import TableCell from './TableCell'
import StyledPin from './StyledPin'

import Pin from './Pin.svg'

export default class FamiliyProfile extends React.Component {

  render() {
    return (
      <StyledFamilyProfile>
        <SectionWrapper>
          <StyledPin src={Pin}></StyledPin>
        </SectionWrapper>
        <SectionWrapper>
        <h2>{this.props.name}</h2>
        </SectionWrapper>
        <SectionWrapper>
        <TableRow first={true}>
          <TableCell first={true}>
            Region
          </TableCell>
          <TableCell>
            {this.props.region}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell first={true}>
            Bekannt für
          </TableCell>
          <TableCell>
            {this.props.knownFor}
          </TableCell>
        </TableRow>
        <TableRow last={true}>
          <TableCell first={true}>
            Volumen
          </TableCell>
          <TableCell>
            {this.props.volume}
          </TableCell>
        </TableRow>
        <TableRow last={true}>
          <TableCell full={true}>
            {this.props.description}
          </TableCell>
        </TableRow>
        </SectionWrapper>
      </StyledFamilyProfile>
    )
  }
}