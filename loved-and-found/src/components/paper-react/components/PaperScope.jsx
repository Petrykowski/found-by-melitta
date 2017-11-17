import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// Paper JS
import { enableScope, disableScope, bindCanvasToScope } from '../scopeHandler';
import Paper from 'paper';

let enabled = false;

export class PaperScope extends React.Component {

  constructor(props) {
    super(props);
    this.state = { mounted: false };
  }

  // Todo: is there a better way to pass the canvasRef?
  componentDidMount() {
    const canvasDomNode = ReactDOM.findDOMNode(document.getElementById(this.props.canvasId));
    [this.scopeId, this.scope] = bindCanvasToScope(this.scopeId, canvasDomNode);

    if(!enabled){
      enableScope(this.scopeId);
      enabled = true;
    }

    if (this.props.onPaperScopeReady) {
      this.props.onPaperScopeReady(this.paperProject);
    }
    this.setState({ mounted: true });
  }

  componentWillUnmount() {
    // disableScope(this.scopeId);
  }

  // The canvas object is not allowed to be a child of the paperscope
  // Children are only paper objects
  render() {
    return (
      <div style={{ display: 'none' }}> {
        this.state.mounted
          ? this.props.children
          : null
      }
      </div>
    );
  }
}

PaperScope.propTypes = {
  canvasId: PropTypes.string.isRequired,
  onPaperScopeReady: PropTypes.func,
};

