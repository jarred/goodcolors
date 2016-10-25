import React from 'react'
import { ColorUtil } from '../util/color.js'

class Swatch extends React.Component {
  constructor(props){
    super(props)
    this.onRemoveColor = this.onRemoveColor.bind(this);
    this.state = {
      color: props.color
    }
  }
  onRemoveColor(event){
    this.props.onRemoveColor(this.state.color)
  }
  render() {
    return <div className="fl w-25 w-25-m w-10-ns mr0-m mb0-m mr1-ns mb1-ns relative">
      <div className="aspect-ratio aspect-ratio--1x1 br0-ns br2-ns overflow-hidden z-0 relative">
        <div className="aspect-ratio--object cover" style={{backgroundColor: this.state.color.rgbString()}}></div>
      </div>
      <div className="absolute db top-0 right-0 pa1 br1 bg-black white z-1 pointer" onClick={this.onRemoveColor}>
        &times;
      </div>
    </div>;
  }
}

export { Swatch }
