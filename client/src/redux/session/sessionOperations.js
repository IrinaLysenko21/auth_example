import * as sessionActions from "./sessionActions";
import * as sessionSelectors from "./sessionSelectors";
import * as API from "../../services/api";

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(sessionActions.loginRequest());

    API.signIn(credentials).then((response) => {
      if (response) {
        API.setAuthToken(response.data.token);
        dispatch(sessionActions.loginSuccess(response.data));
      }
    });
  } catch (err) {
    dispatch(sessionActions.loginError(err));
  }
};

export const signup = (credentials) => async (dispatch) => {
  try {
    dispatch(sessionActions.signupRequest());

    API.signUp(credentials).then((response) => {
      if (response) {
        API.setAuthToken(response.data.token);
        dispatch(sessionActions.signupSuccess(response.data));
      }
    });
  } catch (err) {
    dispatch(sessionActions.loginError(err));
  }
};

export const refreshUser = () => async (dispatch, getState) => {
  try {
    const token = sessionSelectors.getToken(getState());

    if (!token) return;

    API.setAuthToken(token);

    dispatch(sessionActions.refreshUserRequest());

    API.refreshUser().then((response) => {
      if (response) {
        dispatch(sessionActions.refreshUserSuccess(response.data));
      }
    });
  } catch (err) {
    API.clearAuthToken();
    dispatch(sessionActions.refreshUserError(err));
  }
};

export const logOut = () => (dispatch) => {
  API.clearAuthToken();
  dispatch(sessionActions.logOut());
};
