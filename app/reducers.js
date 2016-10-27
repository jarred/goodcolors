import Color from 'color'

const getState = () => {
  let initialColours = []
  // Green
  initialColours = ['00D065','#001B0B', '#215732', '#00491E', '#007737', '#00892F', '#30B700', '#006F44', '#00A376', '#00B388', '#4DB748', '#00B140', '#00CFB4', '#007041', '#3E9A2C', '#215732', '#007A33', '#009739', '#56C271', '#00A82D', '#00AA13', '#279F00', '#1FA824', '#4CAE04', '#025F1D', '#008C15', '#A0DCAF', '#86CD8B', '#E1F4E4', '#1DAC57', '#1A5213', '#1A5213', '#1A5213', '#1A5213', '#1A5213', '#FFF'];

  // Material
  // initialColours = ['#ECEFF1','#CFD8DC','#B0BEC5','#90A4AE','#78909C','#607D8B','#546E7A','#455A64','#37474F','#263238','#FFFDE7','#FFF9C4','#FFF59D','#FFF176','#FFEE58','#FFEB3B','#FDD835','#FBC02D','#F9A825','#F57F17','#FFFF8D','#FFFF00','#FFEA00','#FFD600','#EDE7F6','#D1C4E9','#B39DDB','#9575CD','#7E57C2','#673AB7','#5E35B1','#512DA8','#4527A0','#311B92','#B388FF','#7C4DFF','#651FFF','#6200EA']

  // material greens
  // initialColours = ['E0F2F1','B2DFDB','80CBC4','4DB6AC','26A69A','009688','00897B','00796B','00695C','004D40','E8F5E9','C8E6C9','A5D6A7','81C784','66BB6A','4CAF50','43A047','388E3C','2E7D32','1B5E20','F1F8E9','DCEDC8','C5E1A5','AED581','9CCC65','8BC34A','7CB342','689F38','558B2F','33691E','FAFAFA','F5F5F5','EEEEEE','E0E0E0','BDBDBD','9E9E9E','757575','616161','424242','212121']

  return initialColours
    .map((result) => result.indexOf('#') <= -1 ? `#${result}` : result)
    .map(Color)
    .reduce((colors, color) => {
      colors[color.hexString()] = color
      return colors
    }, {})
}

export default (state = getState(), action) => {
  switch (action.type) {
    case 'addColour':
      state[action.color.hexString()] = color
      return state
    case 'removeColour':
      delete state[action.color.hexString()]
      return state
    default:
      return state
  }
}