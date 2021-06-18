import { stopSubmit } from 'redux-form';
import { authorization } from '../api/api';
import avatar from '../img/ava.jpg'
import { getCosmBagThunk } from './cosmeticsReducer';

const SET_AUTH = 'SET-AUTH';

const initialState = {
  id: null,
  isAuth: false,
  // name: 'Александра',
  login: 'mimi-sloth',
  photo: null,
  // cookie: null,
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    // case SET_NAME: {
    //   return {...state, name: action.name}
    // }

    case SET_AUTH: {
      return {
        ...state,
        isAuth: action.isAuth,
        login: action.login,
      }
    }

    default:
      return state;
  }
}

// export const setProfileName = (name) => {
//   return {type: SET_NAME, name}
// }

export const setAuth = (isAuth, login = null, id = null) => {
  return { type: SET_AUTH, isAuth, login, id }
}

export const authLogoutThunk = () => async (dispatch) => {
  const response = await authorization.logout();

  if (response.status === 200) {
    dispatch(setAuth(false));
  } else {
    alert(response.data);
  }
}


//не работает валидация на неверный логин или пароль
export const authLoginThunk = (login, password) => async (dispatch) => {

  console.log('зашли в санку')

  const response = await authorization.login(login, password);

  console.log('сделали запрос')

  if (response.status === 200) {

    console.log('ответ 200')

    dispatch(setAuth(true, response.data.login, response.data.id));
    dispatch(getCosmBagThunk());
  } else {

    console.log('ответ не 200')

    dispatch(stopSubmit('login', { _error: 'не верный логин или пароль' }))
  }
}


//не работает валидация насуществующего пользователя
export const authRegistrationThunk = (login, password) => async (dispatch) => {
  const response = await authorization.registration(login, password);

  if (response.status === 200) {
    dispatch(setAuth(true, response.data.login, response.data.id));
    dispatch(getCosmBagThunk());
  } else {
    dispatch(stopSubmit('registration', { _error: 'логин уже используется' }))
  }
}

export default authReducer;