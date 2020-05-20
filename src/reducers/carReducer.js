import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";

const initialState = {
  price: 26395,
  name: "2019 Ford Mustang",
  image:
    "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
  features: [],
};
export const carReducer = (state = initialState, action) => {
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
