import { authorization } from '../api/api';
import avatar from '../img/ava.jpg'

// const SET_NAME = 'SET-NAME';
// const SAVE_PHOTO = 'SAVE-PHOTO';
const SET_AUTH = 'SET-AUTH';

const initialState = {
  id: null,
  isAuth: false,
  // name: 'Александра',
  login: null,
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
  return {type: SET_AUTH, isAuth, login, id}
}

export const authLoginThunk = (login, password) => async (dispatch) => {
  const response = await authorization.login(login, password);

  if (response.status === 200) {
    dispatch(setAuth(true, response.data.login, response.data.id ));
  } else {
    //должна быть валидация
  }
}

export const authLogoutThunk = () => async (dispatch) => {
  const response = await authorization.logout();

  if (response.status === 200) {
    dispatch(setAuth(false));
  } else {
    alert(response.data);
  }
}




export default authReducer;