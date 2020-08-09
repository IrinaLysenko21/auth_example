import keyMirror from "keymirror";

export const actionType = keyMirror({
  GET_LANGUAGE_REQUEST: null,
  GET_LANGUAGE_SUCCESS: null,
  GET_LANGUAGE_ERROR: null,
  SET_LANGUAGE_REQUEST: null,
  SET_LANGUAGE_SUCCESS: null,
  SET_LANGUAGE_ERROR: null,
});

// get language

export const getLanguageRequest = () => ({
  type: actionType.GET_LANGUAGE_REQUEST,
});

export const getLanguageSuccess = (language) => ({
  type: actionType.GET_LANGUAGE_SUCCESS,
  payload: { language },
});

export const getLanguageError = (error) => ({
  type: actionType.GET_LANGUAGE_ERROR,
  payload: { error },
});

// set language

export const setLanguageRequest = () => ({
  type: actionType.SET_LANGUAGE_REQUEST,
});

export const setLanguageSuccess = (language) => ({
  type: actionType.SET_LANGUAGE_SUCCESS,
  payload: { language },
});

export const setLanguageError = (error) => ({
  type: actionType.SET_LANGUAGE_ERROR,
  payload: { error },
});
