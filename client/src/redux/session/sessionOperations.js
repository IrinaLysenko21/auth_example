import axios from "axios";
import * as sessionActions from "./sessionActions";
import * as sessionSelectors from "./sessionSelectors";

axios.defaults.baseURL = "http://localhost:4040";

const setAuthToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common["Authorization"] = null;
};

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(sessionActions.loginRequest());

    const response = await axios.post("/auth/signin", credentials);

    if (response) {
      setAuthToken(response.data.token);
      dispatch(sessionActions.loginSuccess(response.data));
    }
  } catch (err) {
    dispatch(sessionActions.loginError(err));
  }
};

export const signup = (credentials) => async (dispatch) => {
  try {
    dispatch(sessionActions.signupRequest());

    const response = await axios.post("/auth/signup", credentials);

    if (response) {
      setAuthToken(response.data.token);
      dispatch(sessionActions.signupSuccess(response.data));
    }
  } catch (err) {
    dispatch(sessionActions.loginError(err));
  }
};

export const refreshUser = () => async (dispatch, getState) => {
  try {
    const token = sessionSelectors.getToken(getState());

    if (!token) return;

    setAuthToken(token);

    dispatch(sessionActions.refreshUserRequest());

    const response = await axios.get("/auth/current");

    if (response) {
      dispatch(sessionActions.refreshUserSuccess(response.data));
    }
  } catch (err) {
    clearAuthToken();
    dispatch(sessionActions.refreshUserError(err));
  }
};

export const logOut = () => (dispatch) => {
  clearAuthToken();
  dispatch(sessionActions.logOut());
};
