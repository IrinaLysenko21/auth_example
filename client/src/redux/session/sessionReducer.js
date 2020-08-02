import { combineReducers } from "redux";
import { actionType } from "./sessionActions";

const userReducer = (state = null, { type, payload }) => {
  switch (type) {
    case actionType.LOGIN_SUCCESS:
    case actionType.SIGNUP_SUCCESS:
      return payload.data.user;

    case actionType.REFRESH_USER_SUCCESS:
      return payload.data;

    case actionType.LOGOUT:
      return null;

    default:
      return state;
  }
};

const tokenReducer = (state = null, { type, payload }) => {
  switch (type) {
    case actionType.LOGIN_SUCCESS:
    case actionType.SIGNUP_SUCCESS:
      return payload.data.token;

    case actionType.LOGOUT:
      return null;

    default:
      return state;
  }
};

const authenticated = (state = false, { type }) => {
  switch (type) {
    case actionType.LOGIN_SUCCESS:
    case actionType.SIGNUP_SUCCESS:
    case actionType.REFRESH_USER_SUCCESS:
      return true;

    case actionType.LOGOUT:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case actionType.LOGIN_ERROR:
    case actionType.SIGNUP_ERROR:
    case actionType.REFRESH_USER_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  authenticated,
  token: tokenReducer,
  error: errorReducer,
});
