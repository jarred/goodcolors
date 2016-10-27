import React from 'react'
import Color from 'color'
import { ColorUtil } from '../util/color.js'
import TopStories from 'json!../data/nyt-top-stories.json'

class Combination extends React.Component {
  constructor(props){
    super(props)

    // console.log('TopStories', TopStories)

    let story = TopStories.results[Math.floor(Math.random() * TopStories.results.length)]

    this.state = {
      base: props.combos.base,
      headings: props.combos.headings,
      body: props.combos.body,
      headingColor: null,
      bodyColor: null,
      titleText: story.title,
      bodyText: story.abstract
    }
  }
  setHeadingColor(event){
    let el = event.target;
    let c = el.getAttribute('data-value');
    this.setState({
      headingColor: c
    });
  }
  setBodyColor(event){
    let el = event.target;
    let c = el.getAttribute('data-value');
    this.setState({
      bodyColor: c
    });
  }
  render() {
    let style = {
      backgroundColor: this.state.base.rgbString()
    }
    let headingColor = 'rgba(255,255,255,.4)';
    if(this.state.base.light()){
      headingColor = 'rgba(0,0,0,.4)';
    }
    if(this.state.headings.length > 0){
      headingColor = this.state.headings[0].rgbString();
    }
    let bodyColor = 'rgba(255,255,255,.4)';
    if(this.state.base.light()){
      bodyColor = 'rgba(0,0,0,.4)';
    }
    if(this.state.body.length > 0){
      bodyColor = this.state.body[0].rgbString();
    }

    if(this.state.headingColor != null){
      headingColor = this.state.headingColor;
    }

    if(this.state.bodyColor != null){
      bodyColor = this.state.bodyColor;
    }

    let headingText = "No accessible heading options found. Try adding more colours!"
    if(this.state.headings.length == 1){
      headingText = "One accessible heading option available"
    }else if(this.state.headings.length > 1){
      headingText = this.state.headings.length + " options found.";
    }

    let bodyText = <p className="pa0 ma0">No accessible paragraph options found. <br />Try adding more colours!</p>
    if(this.state.body.length == 1){
      bodyText = "One accessible paragraph2 option available"
    }else if(this.state.body.length){
      bodyText = this.state.body.length + " options found.";
    }

    let c = Color(headingColor)
    let swatchStyle = {
      backgroundColor: c.hexString(),
      color: "rgba(255,255,255,.5)",
      fontSize: '11px'
    }
    if(c.light()){
      swatchStyle.color = 'rgba(0,0,0,.5)'
    }
    let headingSwatch = <span className="dib pa2 br2" style={ swatchStyle }>{c.hexString()}</span>

    c = Color(bodyColor)
    swatchStyle = {
      backgroundColor: c.hexString(),
      color: "rgba(255,255,255,.4)",
      fontSize: '11px'
    }
    if(c.light()){
      swatchStyle.color = 'rgba(0,0,0,.4)'
    }
    let bodySwatch = <span className="dib pa2 br2" style={ swatchStyle }>{c.hexString()}</span>


    let baseSwatchStyle = {
      // backgroundColor: '#000',
      color: this.state.base.hexString(),
      fontSize: '11px',
      border: '1px solid rgba(0,0,0,.1)',
      color: 'rgba(0,0,0,.5)'
    }
    if(this.state.base.dark()){
      baseSwatchStyle.border = '1px solid rgba(255,255,255,.1)';
      baseSwatchStyle.color = 'rgba(255,255,255,.5)'
    }
    let baseSwatch = <span className="border-box dib pa2 br2" style={ baseSwatchStyle }>{this.state.base.hexString()}</span>

    return <div className="db" style={style}>
      <div className="fl w-100 w-100-m w-50-ns pa3 pa4-ns">
        <h2 style={{color: headingColor }} className="mb2 ma0">{this.state.titleText}</h2>
        <p style={{ color: bodyColor }} className="mt2 mb2 f6 lh-copy">
          {this.state.bodyText}
        </p>
        <div className="mt3">
          {baseSwatch} {headingSwatch} {bodySwatch}
        </div>
      </div>

      <div className="fl w-100 w-100-m w-50-ns pa3 pa4-ns">
        <span style={{color: headingColor }}  className="db mb2 f6">{headingText}</span>
        <div className="mr5-ns">
        {this.state.headings.map((result) => (
          <div className="fl db br1 mr1 mb1" style={{width: '30px', backgroundColor: result.rgbString()}}>
            <div className="aspect-ratio aspect-ratio--1x1">
              <div className="aspect-ratio--object cover pointer dim" onClick={this.setHeadingColor.bind(this)} data-value={result.rgbString()} />
            </div>
          </div>
         ))}
         </div>
         <div className="cf"></div>
         <span style={{ color: bodyColor }} className="db mb2 f6 mt3">{bodyText}</span>
         {this.state.body.map((result) => (
           <div className="fl db br1 mr1 mb1" style={{width: '30px', backgroundColor: result.rgbString()}}>
             <div className="aspect-ratio aspect-ratio--1x1">
               <div className="aspect-ratio--object cover pointer dim" onClick={this.setBodyColor.bind(this)} data-value={result.rgbString()} />
             </div>
           </div>
          ))}
          <div className="cf"></div>
      </div>
      <div className="cf"></div>
    </div>;
  }
}

export { Combination }
