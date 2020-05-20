export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const UPDATE_PRICE = "UPDATE_PRICE";

export const updatePrice = (additionalPrice) => {
  return {
    type: UPDATE_PRICE,
    payload: additionalPrice,
  };
};

export const addFeature = (newFeature) => {
  return {
    type: ADD_FEATURE,
    payload: newFeature,
  };
};

export const removeFeature = (idFeature) => {
  return {
    type: REMOVE_FEATURE,
    payload: idFeature,
  };
};
