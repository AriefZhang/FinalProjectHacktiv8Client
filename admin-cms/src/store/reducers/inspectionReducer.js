import { FETCH_INSPECTIONS } from "../actionTypes";

const initialState = {
  inspections: [],
};

function inspectionReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_INSPECTIONS:
      return { ...state, inspections: action.payload };
    default:
      return state;
  }
}

export default inspectionReducer;
