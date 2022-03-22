import { FETCH_EXTERIORS } from "../actionTypes";

const initialState = {
  exteriors: [],
};

function exteriorReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EXTERIORS:
      return { ...state, exteriors: action.payload };
    default:
      return state;
  }
}

export default exteriorReducer;
