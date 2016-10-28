import React from 'react';
import {connect} from 'react-redux';
import {removeColor} from '../action-creators';

class Swatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveColor = this.handleRemoveColor.bind(this);
  }

  handleRemoveColor() {
    this.props.removeColor(this.props.color);
  }

  render() {
    return (
      <div className="fl w-25 w-25-m w-10-ns mr0-m mb0-m mr1-ns mb1-ns relative">
        <div className="aspect-ratio aspect-ratio--1x1 br0-ns br2-ns overflow-hidden z-0 relative">
          <div className="aspect-ratio--object cover" style={{backgroundColor: this.props.color.rgbString()}}/>
        </div>
        <div className="absolute db top-0 right-0 pa1 br1 bg-black white z-1 pointer" onClick={this.handleRemoveColor}>
          &times;
        </div>
      </div>
    );
  }
}

Swatch.propTypes = {
  removeColor: React.PropTypes.func.isRequired,
  color: React.PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({removeColor: color => dispatch(removeColor(color))});
export default connect(() => ({}), mapDispatchToProps)(Swatch);
