export const isAuthenticated = (store) => store.session.authenticated;

export const getToken = (store) => store.session.token;

export const getUser = (store) => store.session.user;
