import { combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import calendarReducer from "./calendarReducer";
import cosmeticsReducer from "./cosmeticsReducer";
import dailyReducer from "./dailyReducer";
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
  auth: authReducer,
  calendar: calendarReducer,
  cosmetics: cosmeticsReducer,
  daily: dailyReducer,
  form: formReducer,
});

let store = createStore(reducers);
window.store = store; //для просмотра через консоль

export default store;