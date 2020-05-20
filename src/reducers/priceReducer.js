import { UPDATE_PRICE } from "../actions";
const initialState = {
  additionalPrice: 0,
};

export const priceReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRICE:
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload,
      };
    default:
      return state;
  }
};
