import { FETCH_INTERIORS } from "../actionTypes";

const initialState = {
  interiors: [],
};

function interiorReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_INTERIORS:
      return { ...state, interiors: action.payload };
    default:
      return state;
  }
}

export default interiorReducer;
