export const TYPES = {
  ADD_COLOR: 'ADD_COLOR',
  REMOVE_COLOR: 'REMOVE_COLOR'
};

export const addColor = color => {
  return {
    type: TYPES.ADD_COLOR,
    color
  };
};

export const removeColor = color => {
  return {
    type: TYPES.REMOVE_COLOR,
    color
  };
};
