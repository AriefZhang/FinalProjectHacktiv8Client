import { FETCH_ROADTEST } from "../actionTypes";

const initialState = {
  roadtests: [],
};

function roadTestReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ROADTEST:
      return { ...state, roadtests: action.payload };
    default:
      return state;
  }
}

export default roadTestReducer;
