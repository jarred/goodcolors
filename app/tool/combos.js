import React from 'react';
import {getAccessibleCombos} from '../util/color';
import Combination from './combination';

const HelpText = ({combos}) => {
  if (combos.length <= 0) {
    return (
      <div className="gray">Add more colors to your palette to see some combinations.</div>
    );
  }

  return null;
};

HelpText.propTypes = {
  combos: React.PropTypes.array.isRequired
};

const Combos = ({level, colors}) => {
  const combos = getAccessibleCombos(colors, level);

  return (
    <div>
      <HelpText combos={combos}/>
      {combos.map(combo => (<Combination key={combo.base.hexString().replace('#', '')} combos={combo}/>))}
    </div>
  );
};

Combos.propTypes = {
  colors: React.PropTypes.array.isRequired,
  level: React.PropTypes.string.isRequired
};

export default Combos;
