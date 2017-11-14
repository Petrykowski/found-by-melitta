// @no-flow
import PropTypes from 'prop-types';

const availableListener = 
  {
    onMouseDown: 'mousedown',
    onMouseUp: 'mouseup',
    onMouseDrag: 'mousedrag',
    onClick: 'click',
    onDoubleClick: 'doubleclick',
    onMouseMove: 'mousemove',
    onMouseEnter: 'mouseenter',
    onMouseLeave: 'mouseleave',
  };

export default function isInteractable(WrappedComponent) {

  class InteractableComponent extends WrappedComponent {

    componentDidMount() {
      super.componentDidMount();

      let listenerToRegister = Object.keys(this.props)
        .filter( (propKey) => propKey in availableListener );
      listenerToRegister
        .forEach( (listenerKey) => this.element.on( availableListener[listenerKey], this.props[listenerKey]) );
    }
    
    componentWillUnmount() {
      super.componentWillUnmount();
      this.element.off({
        mousedown: this.props.onMousedown,
        mouseup: this.props.onMouseup,
        mousedrag: this.props.onMousedrag,
        click: this.props.onClick,
        doubleclick: this.props.onMoubleclick,
        mousemove: this.props.onMousemove,
        mouseenter: this.props.onMouseenter,
        mouseleave: this.props.onMouseleave,
      });
    }

    render() {
      return super.render();
    }
  };

  InteractableComponent.propTypes = {
    ...WrappedComponent.propTypes,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    onMouseDrag: PropTypes.func,
    onClick: PropTypes.func,
    onDoubleClick: PropTypes.func,
    onMouseMove: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
  };

  
  return InteractableComponent;
}

