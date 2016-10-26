import React from 'react'
import {Swatches} from './swatches.js'
import {Combos} from './combos.js'
import _ from 'underscore'
import Color from 'color'

class Tool extends React.Component {
  constructor(props){
    super(props)
    this.onAddColor = this.onAddColor.bind(this);
    this.onRemoveColor = this.onRemoveColor.bind(this);

    let initialColours = []

    // Green
    // initialColours = ['#001B0B', '#215732', '#00491E', '#007737', '#00892F', '#30B700', '#006F44', '#00A376', '#00B388', '#4DB748', '#00B140', '#00CFB4', '#007041', '#3E9A2C', '#215732', '#007A33', '#009739', '#56C271', '#00A82D', '#00AA13', '#279F00', '#1FA824', '#4CAE04', '#025F1D', '#008C15', '#A0DCAF', '#86CD8B', '#E1F4E4', '#1DAC57', '#1A5213', '#1A5213', '#1A5213', '#1A5213', '#1A5213', '#FFF'];

    // Material
    // initialColours = ['#ECEFF1','#CFD8DC','#B0BEC5','#90A4AE','#78909C','#607D8B','#546E7A','#455A64','#37474F','#263238','#FFFDE7','#FFF9C4','#FFF59D','#FFF176','#FFEE58','#FFEB3B','#FDD835','#FBC02D','#F9A825','#F57F17','#FFFF8D','#FFFF00','#FFEA00','#FFD600','#EDE7F6','#D1C4E9','#B39DDB','#9575CD','#7E57C2','#673AB7','#5E35B1','#512DA8','#4527A0','#311B92','#B388FF','#7C4DFF','#651FFF','#6200EA']

    let readyColors = [];

    initialColours.map((result) => {
      readyColors.push(Color(result));
    });

    this.state = {
      colors: readyColors
    }
  }
  onRemoveColor(color){
        // remove  color from state.colors and re-render
  }
  onAddColor(color){
    var colors = this.state.colors;
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
