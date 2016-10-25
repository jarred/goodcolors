import React from 'react'
import {Swatches} from './swatches.js'
import {Combos} from './combos.js'
import _ from 'underscore'

class Tool extends React.Component {
  constructor(props){
    super(props)
    this.onAddColor = this.onAddColor.bind(this);
    this.onRemoveColor = this.onRemoveColor.bind(this);
    this.state = {
      colors: []
    }
  }
  onRemoveColor(color){
        // remove this color from state.colors
  }
  onAddColor(color){
    var colors = this.state.colors || [];
    colors.push(color)
    this.setState({ colors: colors })
  }
  render() {
    return <div>
      <Swatches colors={this.state.colors} onAddColor={this.onAddColor} onRemoveColor={this.onRemoveColor} />
      <h4 className="mt5">AAA Combinations</h4>
      <Combos level="AAA" colors={this.state.colors} />
      <h4 className="mt5">AA Combinations</h4>
      <Combos level="AA" colors={this.state.colors} />
    </div>;
  }
}

export { Tool }

/*
<h4 className="mt5">AA Combinations</h4>
<Combos level="AA" colors={this.state.colors} />
*/
