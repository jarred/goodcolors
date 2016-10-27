import React from 'react'
import {Swatches} from './swatches.js'
import {Combos} from './combos.js'
import _ from 'underscore'
import Color from 'color'
import { createStore } from 'redux'
import database from '../reducers'

const getValues = (obj) => {
  const values = []
  for(var key in obj) {
    values.push(obj[key])
  }
  return values
}
const store = createStore(database)

class Tool extends React.Component {
  constructor(props){
    super(props)
  }

  render () {
    const dispatch = store.dispatch
    const colors = getValues(store.getState())
    console.log(colors)
    return (
      <div>
        <Swatches colors={colors} dispatch={dispatch} />
        <h4 className="mt5">AAA Combinations</h4>
        <Combos level="AAA" colors={colors} />
        <h4 className="mt5">AA Combinations</h4>
        <Combos level="AA" colors={colors} />
      </div>
    )
  }
}

export { Tool }
