import keyMirror from "keymirror";

export const actionType = keyMirror({
  LOGIN_REQUEST: null,
  LOGIN_SUCCESS: null,
  LOGIN_ERROR: null,
  SIGNUP_REQUEST: null,
  SIGNUP_SUCCESS: null,
  SIGNUP_ERROR: null,
  LOGOUT: null,
  REFRESH_USER_REQUEST: null,
  REFRESH_USER_SUCCESS: null,
  REFRESH_USER_ERROR: null,
});

// export const actionType = {
//   LOGIN_REQUEST: "session/LOGIN_REQUEST",
//   LOGIN_SUCCESS: "session/LOGIN_SUCCESS",
//   LOGIN_ERROR: "session/LOGIN_ERROR",
//   SIGNUP_REQUEST: "session/SIGNUP_REQUEST",
//   SIGNUP_SUCCESS: "session/SIGNUP_SUCCESS",
//   SIGNUP_ERROR: "session/SIGNUP_ERROR",
//   LOGOUT: "session/LOGOUT",
//   REFRESH_USER_REQUEST: "session/REFRESH_USER_REQUEST",
//   REFRESH_USER_SUCCESS: "session/REFRESH_USER_SUCCESS",
//   REFRESH_USER_ERROR: "session/REFRESH_USER_ERROR",
// };

// refresh current

export const refreshUserRequest = () => ({
  type: actionType.REFRESH_USER_REQUEST,
});

export const refreshUserSuccess = (data) => ({
  type: actionType.REFRESH_USER_SUCCESS,
  payload: { data },
});

export const refreshUserError = (error) => ({
  type: actionType.REFRESH_USER_ERROR,
  payload: { error },
});

// log in

export const loginRequest = () => ({
  type: actionType.LOGIN_REQUEST,
});

export const loginSuccess = (data) => ({
  type: actionType.LOGIN_SUCCESS,
  payload: { data },
});

export const loginError = (error) => ({
  type: actionType.LOGIN_ERROR,
  payload: { error },
});

// sign up

export const signupRequest = () => ({
  type: actionType.SIGNUP_REQUEST,
});

export const signupSuccess = (data) => ({
  type: actionType.SIGNUP_SUCCESS,
  payload: { data },
});

export const signupError = (error) => ({
  type: actionType.SIGNUP_ERROR,
  payload: { error },
});

// log out
export const logOut = () => ({
  type: actionType.LOGOUT,
});
