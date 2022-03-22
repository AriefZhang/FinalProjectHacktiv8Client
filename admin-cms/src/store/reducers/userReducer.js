import { USER_LOGIN, USER_LOGOUT } from "../actionTypes";

const initialState = {
  isLogin: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, isLogin: true };
    case USER_LOGOUT:
      return { ...state, isLogin: false };
    default:
      return state;
  }
}

export default userReducer;
