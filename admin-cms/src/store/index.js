import { createStore, applyMiddleware, combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";
import loggerMiddleware from "./middlewares/logger";
import inspectionReducer from "./reducers/inspectionReducer";
import carReducer from "./reducers/carReducer";
import exteriorReducer from "./reducers/exteriorReducer";
import interiorReducer from "./reducers/interiorReducer";
import roadTestReducer from "./reducers/roadTestReducer";
import kolongReducer from "./reducers/kolongReducer";

const rootReducer = combineReducers({
  userReducer,
  inspectionReducer,
  carReducer,
  exteriorReducer,
  interiorReducer,
  roadTestReducer,
  kolongReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware));

export default store;
