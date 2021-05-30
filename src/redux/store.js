import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import calendarReducer from "./calendarReducer";
import cosmeticsReducer from "./cosmeticsReducer";
import dailyReducer from "./dailyReducer";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  auth: authReducer,
  calendar: calendarReducer,
  cosmetics: cosmeticsReducer,
  daily: dailyReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store; //для просмотра через консоль

export default store;