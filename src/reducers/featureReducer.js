import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";
const initialState = {
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};
export const featureReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        features: [...state.features, action.payload],
      };
    // NEW CASE HERE
    case REMOVE_FEATURE:
      return {
        ...state,
        features: state.features.filter(
          (feature) => feature.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
