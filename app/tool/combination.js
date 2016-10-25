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
    return <div className="db pa3" style={style}>
    <h2 className="mb2 ma0">Heading options</h2>
    {this.state.headings.map((result) => (
      <div className="fl db br2 mr1 mb1" style={{width: '30px', backgroundColor: result.rgbString()}}>
        <div className="aspect-ratio aspect-ratio--1x1">
          <div className="aspect-ratio--object cover" />
        </div>
      </div>
     ))}
     <div className="cf"></div>
     <p className="mt2 mb2">Body text ajhsdfg kajshdfg aksjdhfgaksdjhfg asd</p>
    {this.state.body.map((result) => (
      <div className="fl db br2 mr1 mb1" style={{width: '30px', backgroundColor: result.rgbString()}}>
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
