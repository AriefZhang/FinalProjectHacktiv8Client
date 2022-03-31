import { FETCH_PAYMENTS } from "../actionTypes";

const initialState = {
  payments: [],
};

function paymentReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PAYMENTS:
      return { ...state, payments: action.payload };
    default:
      return state;
  }
}

export default paymentReducer;
