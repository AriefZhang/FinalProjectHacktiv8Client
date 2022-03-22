import { FETCH_CARS } from "../actionTypes";

const initialState = {
  cars: [],
};

function carReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARS:
      return { ...state, cars: action.payload };
    default:
      return state;
  }
}

export default carReducer;
