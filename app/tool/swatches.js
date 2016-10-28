import React from 'react';
import Color from 'color';
import {connect} from 'react-redux';

import {addColor} from '../action-creators';
import Swatch from './swatch';

class Swatches extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleColorInputChange = this.handleColorInputChange.bind(this);
    this.state = {
      color: '#FFFFFF'
    };
  }

  handleColorChange(event) {
    this.setState({color: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const color = Color(this.state.color); // eslint-disable-line babel/new-cap
    this.props.addColor(color);
  }

  handleColorInputChange(event) {
    const color = Color(event.target.value); // eslint-disable-line babel/new-cap
    this.setState({color: color.hexString()});
  }

  render() {
    const {colors} = this.props;
    return (
      <div>
        {colors.map(color => <Swatch key={color.hexString().replace('#', '')} color={color}/>)}
        <div className="cf"/>
        <form className="mt3" onSubmit={this.handleSubmit}>
          <fieldset className="mb2 bn pa0 ma0">
            <input className="input-reset bn bg-light-gray dib pv2 ph3 mr3" type="text" onChange={this.handleColorInputChange}/>
            <input className="input-reset bn pa0 bg-white dib" type="color" onChange={this.handleColorChange}/>
          </fieldset>
          <button className="pv2 ph3 br1 button-reset bg-black-70 hover-bg-black white pointer bn" type="submit">Add color</button>
        </form>
      </div>
    );
  }
}

Swatches.propTypes = {
  colors: React.PropTypes.array,
  addColor: React.PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({addColor: color => dispatch(addColor(color))});
export default connect(() => ({}), mapDispatchToProps)(Swatches);
