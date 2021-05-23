import avatar from '../img/ava.jpg'

const SET_NAME = 'SET-NAME';
// const SAVE_PHOTO = 'SAVE-PHOTO';
const SET_AUTH = 'SET-AUTH';

const initialState = {
  isAuth: true,
  name: 'Александра',
  login: 'mimi-sloth',
  photo: null,
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_NAME: {
      return {...state, name: action.name}
    }

    case SET_AUTH: {
      return {...state, isAuth: action.isAuth}
    }

    // case SAVE_PHOTO: {
    //   debugger;
    //   return {...state, photo: action.photo}
    // }

    default:
      return state;
  }
}

export const setProfileName = (name) => {
  return {type: SET_NAME, name}
}

export const setAuth = (isAuth) => {
  return {type: SET_AUTH, isAuth}
}

// export const savePhoto = (photo) => {
//   return {type: SAVE_PHOTO, photo}
// }

export default authReducer;