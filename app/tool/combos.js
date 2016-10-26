import React from 'react'
import { ColorUtil } from '../util/color.js'
import {Combination} from './combination.js'

class Combos extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      colors: props.colors,
      level: props.level
    }
  }

  render() {
    let helpText = null;
    var combos = ColorUtil.getAccessibleCombos(this.state.colors, this.state.level)
    if(combos.length <= 0){
      helpText = <div className="gray">Add more colours to your palette to see some combinations.</div>
    }
    console.log('combos', combos)
    return <div>
      {helpText}
      {combos.map((result, index) => (
         <Combination key={result.base.hexString().replace('#', '') + this.state.level } combos={result} />
       ))}
    </div>;
  }
}

export { Combos }
