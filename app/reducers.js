import Color from 'color';
import {TYPES} from './action-creators';

const {ADD_COLOR, REMOVE_COLOR} = TYPES;
const getState = () => {
  let initialColours = [];

  // new green colours
  initialColours = ['00B2A2','319C8A','00A497','319C8A','79BE70','007737','00491E','4CAE04','1Fa824','008655','8FD6BD','00B388','00965e','007A53','115740','50A684','00966c','008755','007b4b','005844','00c389','00af66','9be189','79d79c','2cc84d','00BB31','009a17','257226','00c65e','30b700','00a82d','00aa13','008c15','025f1d','13322b','183029','2cc84d','9be198','00D065', '#001B0B', '#215732', '#00491E', '#007737', '#00892F', '#30B700', '#006F44', '#00A376', '#00B388', '#4DB748', '#00B140', '#00CFB4', '#007041', '#3E9A2C', '#215732', '#007A33', '#009739', '#56C271', '#00A82D', '#00AA13', '#279F00', '#1FA824', '#4CAE04', '#025F1D', '#008C15', '#A0DCAF', '#86CD8B', '#E1F4E4', '#1DAC57', '#1A5213', '#1A5213', '#1A5213', '#1A5213', '#1A5213', '#FFF'];
  // Green
  // initialColours = ['00D065', '#001B0B', '#215732', '#00491E', '#007737', '#00892F', '#30B700', '#006F44', '#00A376', '#00B388', '#4DB748', '#00B140', '#00CFB4', '#007041', '#3E9A2C', '#215732', '#007A33', '#009739', '#56C271', '#00A82D', '#00AA13', '#279F00', '#1FA824', '#4CAE04', '#025F1D', '#008C15', '#A0DCAF', '#86CD8B', '#E1F4E4', '#1DAC57', '#1A5213', '#1A5213', '#1A5213', '#1A5213', '#1A5213', '#FFF'];

  // Material
  // initialColours = ['#ECEFF1','#CFD8DC','#B0BEC5','#90A4AE','#78909C','#607D8B','#546E7A','#455A64','#37474F','#263238','#FFFDE7','#FFF9C4','#FFF59D','#FFF176','#FFEE58','#FFEB3B','#FDD835','#FBC02D','#F9A825','#F57F17','#FFFF8D','#FFFF00','#FFEA00','#FFD600','#EDE7F6','#D1C4E9','#B39DDB','#9575CD','#7E57C2','#673AB7','#5E35B1','#512DA8','#4527A0','#311B92','#B388FF','#7C4DFF','#651FFF','#6200EA'];

  // material greens
  // initialColours = ['E0F2F1','B2DFDB','80CBC4','4DB6AC','26A69A','009688','00897B','00796B','00695C','004D40','E8F5E9','C8E6C9','A5D6A7','81C784','66BB6A','4CAF50','43A047','388E3C','2E7D32','1B5E20','F1F8E9','DCEDC8','C5E1A5','AED581','9CCC65','8BC34A','7CB342','689F38','558B2F','33691E','FAFAFA','F5F5F5','EEEEEE','E0E0E0','BDBDBD','9E9E9E','757575','616161','424242','212121']

  return initialColours
    .map(result => result.indexOf('#') <= -1 ? `#${result}` : result)
    .map(Color)
    .reduce((colors, color) => {
      colors[color.hexString()] = color;
      return colors;
    }, {});
};

const colors = (state = getState(), action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case ADD_COLOR:
      newState[action.color.hexString()] = action.color;
      return newState;
    case REMOVE_COLOR:
      delete newState[action.color.hexString()];
      return newState;
    default:
      return state;
  }
};

export default colors;
