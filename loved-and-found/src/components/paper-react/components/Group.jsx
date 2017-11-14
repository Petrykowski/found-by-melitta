import React from 'react';
import PropTypes from 'prop-types';

// Paper JS
import { Group as PaperGroup, Layer, Point } from 'paper';

export class Group extends React.Component {

  componentDidMount() {
    this.element = new PaperGroup();
    // console.log(this.props.children );
    // console.log(this.props.children[0]);
    // React.Children.forEach(this.props.children, function(child){child.ref.say()})
  }

  componentWillUnmount() {
    this.element.remove();
  }
  
  render() {
    return (
      <div> {this.props.children} </div>
    );
  }
}

Group.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};