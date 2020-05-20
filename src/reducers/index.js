import { combineReducers } from "redux";
import { carReducer } from "./carReducer";
import { featureReducer } from "./featureReducer";
import { priceReducer } from "./priceReducer";

export default combineReducers({ carReducer, featureReducer, priceReducer });
