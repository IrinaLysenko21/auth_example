import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sessionReducer from "./session/sessionReducer";

const sessionPersistConfig = {
  key: "session",
  storage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  session: persistReducer(sessionPersistConfig, sessionReducer),
  form: formReducer,
});

const middleware = [ReduxThunk];

const enhancer = applyMiddleware(...middleware);

export const store = createStore(rootReducer, composeWithDevTools(enhancer));
export const persistor = persistStore(store);
