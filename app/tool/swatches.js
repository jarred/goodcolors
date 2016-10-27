import React from 'react'
import {Swatch} from './swatch.js'
import Color from 'color'

class Swatches extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.updateColorSelector = this.updateColorSelector.bind(this);
  }

  handleColorChange(event){
    this.refs.color_input.value = this.refs.color_selector.value;
  }

  handleSubmit(event){
    event.preventDefault()
    const color = Color(this.refs.color_input.value)
    this.props.dispatch({ type: 'addColour', color: this.props.color })
  }

  updateColorSelector(event){
    try{
      let c = Color(this.refs.color_input.value);
      this.refs.color_selector.value = c.hexString();
    } catch (e) {
      console.log('Shiieeet')
    }
  }

  render() {
    const {colors, dispatch} = this.props
    return (
      <div>
        { colors.map((color) => <Swatch key={color.hexString().replace('#', '')} color={color} dispatch={dispatch} />) }
        <div className="cf"></div>
        <form className="mt3" onSubmit={this.handleSubmit}>
          <fieldset className="mb2 bn pa0 ma0">
            <input className="input-reset bn bg-light-gray dib pv2 ph3 mr3" type="text" ref="color_input" onChange={this.updateColorSelector} />
            <input className="input-reset bn pa0 bg-white dib" type="color" ref="color_selector" onChange={this.handleColorChange} />
          </fieldset>
          <button className="pv2 ph3 br1 button-reset bg-black-70 hover-bg-black white pointer bn" type="submit">Add color</button>
        </form>
      </div>
    );
  }
}

export { Swatches }
