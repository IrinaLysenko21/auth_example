import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040";

export const setAuthToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  axios.defaults.headers.common["Authorization"] = null;
};

export const signIn = async (credentials) => {
  try {
    const response = await axios.post("/auth/signin", credentials);

    return response;
  } catch (err) {
    throw new Error(err);
  }
};

export const signUp = async (credentials) => {
  try {
    const response = await axios.post("/auth/signup", credentials);

    return response;
  } catch (err) {
    throw new Error(err);
  }
};

export const refreshUser = async () => {
  try {
    const response = await axios.get("/auth/current");

    return response;
  } catch (err) {
    throw new Error(err);
  }
};
