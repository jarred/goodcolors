import React from 'react'
import { ColorUtil } from '../util/color.js'

class Combination extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      base: props.combos.base,
      headings: props.combos.headings,
      body: props.combos.body
    }
  }
  render() {
    let style = {
      backgroundColor: this.state.base.rgbString()
    }
    let headingColor = 'rgba(255,255,255,.7)';
    if(this.state.base.light()){
      headingColor = 'rgba(0,0,0,.7)';
    }
    if(this.state.headings.length > 0){
      headingColor = this.state.headings[0].rgbString();
    }
    let bodyColor = 'rgba(255,255,255,.7)';
    if(this.state.base.light()){
      bodyColor = 'rgba(0,0,0,.7)';
    }
    if(this.state.body.length > 0){
      bodyColor = this.state.body[0].rgbString();
    }

    let headingText = "No accessible heading options found. Try adding more colours!"
    if(this.state.headings.length == 1){
      headingText = "One accessible option available"
    }else if(this.state.headings.length > 1){
      headingText = this.state.headings.length + " options found.";
    }

    let bodyText = "No accessible paragraph options found. Try adding more colours!"
    if(this.state.headings.length == 1){
      bodyText = "One accessible option available"
    }else if(this.state.body.length){
      bodyText = this.state.headings.length + " options found.";
    }

    return <div className="db pa3" style={style}>
    <h2 style={{color: headingColor }} className="mb2 ma0">{headingText}</h2>
    {this.state.headings.map((result) => (
      <div className="fl db br1 mr1 mb1" style={{width: '30px', backgroundColor: result.rgbString()}}>
        <div className="aspect-ratio aspect-ratio--1x1">
          <div className="aspect-ratio--object cover" />
        </div>
      </div>
     ))}
     <div className="cf"></div>
     <p style={{ color: bodyColor }} className="mt2 mb2">{bodyText}</p>
    {this.state.body.map((result) => (
      <div className="fl db br1 mr1 mb1" style={{width: '30px', backgroundColor: result.rgbString()}}>
        <div className="aspect-ratio aspect-ratio--1x1">
          <div className="aspect-ratio--object cover" />
        </div>
      </div>
     ))}
     <div className="cf"></div>
    </div>;
  }
}

export { Combination }
