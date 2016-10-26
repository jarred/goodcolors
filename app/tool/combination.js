import React from 'react'
import { ColorUtil } from '../util/color.js'

class Combination extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      base: props.combos.base,
      headings: props.combos.headings,
      body: props.combos.body,
      headingColor: null,
      bodyColor: null
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

    return <div className="db" style={style}>
      <div className="fl w-100 w-100-m w-50-ns pa3 pa4-ns">
        <h2 style={{color: headingColor }} className="mb2 ma0">{headingText}</h2>
        <p style={{ color: bodyColor }} className="mt2 mb2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ex ut eros sagittis, vestibulum faucibus purus lobortis. Donec volutpat metus sit amet sapien tincidunt, ornare euismod purus fermentum. Cras ac pretium libero. Maecenas vehicula hendrerit nulla eget venenatis. Suspendisse placerat non arcu id malesuada.
        </p>
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
