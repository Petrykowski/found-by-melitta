import React from 'react';
import PropTypes from 'prop-types';

// Paper JS
import Paper, { Point } from 'paper';

export class Path extends React.Component {

  componentDidMount() {
    this.element = new Paper.Path();
    this.element.strokeColor = this.props.strokeColor;

    this.props.points.forEach((point: Point) => {
      this.element.add(point);
    });
    this.element.closed = true;
  }
  
  componentWillUnmount() {
    this.element.remove();
  }

  componentWillReceiveProps(nextProps){
    this.updatePosition(nextProps.points);
  }

  updatePosition(newPoints){
    this.element.segments.forEach((segment, index) => {
      if (!segment.point.equals(newPoints[index])){
        this.element.segments[index].point = newPoints[index];
      }
    });
  }

  render() {
    return null;
  }
}

Path.propTypes = {
  points: PropTypes.arrayOf(Point),
  strokeColor: PropTypes.string,
};