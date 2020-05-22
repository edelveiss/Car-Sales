export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = (newFeatureobj) => {
  return {
    type: ADD_FEATURE,
    payload: newFeatureobj,
  };
};

export const removeFeature = (removedFeatureobj) => {
  return {
    type: REMOVE_FEATURE,
    payload: removedFeatureobj,
  };
};

// export const addFeature = (newFeature) => {
//   return {
//     type: ADD_FEATURE,
//     payload: newFeature,
//   };
// };

// export const removeFeature = (removedFeature) => {
//   return {
//     type: REMOVE_FEATURE,
//     payload: removedFeature,
//   };
// };
