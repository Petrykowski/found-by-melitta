// @no-flow

export default function withPropsDiff(WrappedComponent) {

  class PropsDiff extends WrappedComponent {

    componentDidMount(){
      super.componentDidMount();

      if(!this.updateElementProperty && process.env.NODE_ENV === 'development'){
        console.error(`withPropsDiff: Component ${WrappedComponent.name} needs to implement method 
          updateElementProperty(propertyKey: string, nextProps)`);
      }
    }

    componentWillReceiveProps(nextProps){
      if(super.componentWillReceiveProps){
        super.componentWillReceiveProps();
      }
      
      const diffKeys = this.createPropDiff(nextProps, this.props);
      diffKeys.forEach( (key) => this.updateElementProperty(key, nextProps));
    }
  
    createPropDiff(nextProps, props){
      const dirtyKeys = Object.keys(nextProps).filter( (key) => !props.hasOwnProperty(key) );
      const changedKeys = Object.keys(props).filter( (key) => props[key] !== nextProps[key] );
      return dirtyKeys.concat(changedKeys);
    }

    render() {
      return super.render();
    }
  };
  
  PropsDiff.propTypes = {
    ...WrappedComponent.propTypes,
  };

  return PropsDiff;
}

