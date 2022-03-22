import { FETCH_KOLONG } from "../actionTypes";

const initialState = {
  kolongs: [],
};

function kolongReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_KOLONG:
      return { ...state, kolongs: action.payload };
    default:
      return state;
  }
}

export default kolongReducer;
