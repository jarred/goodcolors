import React from 'react';
import {connect} from 'react-redux';
import Swatches from './swatches';
import Combos from './combos';

const getValues = obj => {
  const values = [];
  for (const key in obj) { // eslint-disable-line guard-for-in
    values.push(obj[key]);
  }
  return values;
};

const Tool = ({colors}) => {
  return (
    <div>
      <Swatches colors={colors}/>
      <h4 className="mt5">AAA Combinations</h4>
      <Combos level="AAA" colors={colors}/>
      <h4 className="mt5">AA Combinations</h4>
      <Combos level="AA" colors={colors}/>
    </div>
  );
};

Tool.propTypes = {
  colors: React.PropTypes.array
};

const mapStateToProps = state => ({colors: getValues(state)});
export default connect(mapStateToProps)(Tool);
