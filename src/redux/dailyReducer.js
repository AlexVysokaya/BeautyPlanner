import { calendar } from "../api/api";

// const SET_DATE_PLAN = 'SET-DATE-PLAN';
const SET_DATA = 'SET-DATA';
const SET_PLAN = 'SET-PLAN';
const EDIT_PLAN = 'EDIT-PLAN';
//
const DELETE_ELEMENT_DAY = 'DELETE-ELEMENT-DAY';
const ADD_ELEMENT_DAY = 'ADD-ELEMENT-DAY';

const initialState = { //изменить дату на строку
  date: null, //дата, на которую сделан запрос
  plan: {
    morning: [
      { id: 10, name: 'Пенка для умывания', photo: null },
      { id: 17, name: 'Тканевая маска', photo: null},
      { id: 14, name: 'Крем с SPF', photo: null},
    ],
    daytime: [
      { id: 1, name: 'Гель для душа с клубникой', photo: null},
      { id: 3, name: 'Крем для тела', photo: null}
    ],
    evening: [
      { id: 11, name: 'Гель для умывания', photo: null},
      { id: 5, name: 'Шампунь для объема', photo: null},
      { id: 7, name: 'Бальзам для волос', photo: null}
    ],
  }
}

// const initialState = { //изменить дату на строку
//   date: null, //дата, на которую сделан запрос
//   // date: '', //изменить везде на строку
//   plan: {
//     morning: [],
//     daytime: [],
//     evening: [],
//   }
// }

const dailyReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_DATA: {
      return {
        ...state,
        date: action.date
      }
    }

    case SET_PLAN: {
      return {
        ...state,
        plan: {
          morning: [ ...action.plan.morning],
          daytime: [ ...action.plan.daytime],
          evening: [ ...action.plan.evening],
        }
      }
    }

    case DELETE_ELEMENT_DAY: {
      const newPlan = state.plan[action.time].filter(elem => elem.id !== action.id);
      return {
        ...state,
        plan: {
          ...state.plan,
          [action.time]: [...newPlan]
        }
      }
    }

    case ADD_ELEMENT_DAY: {
      let copyState = {
        ...state,
        plan: {
          ...state.plan,
          [action.time]: [ ...state.plan[action.time]]
        }
      }
      copyState.plan[action.time].push(action.elem);
      return copyState;
    }

    default:
      return state;
  }
}
//оставить
export const setDate = (date) => {
  return { type: SET_DATA , date}
}

const setUserPlan = (plan) => {
  return { type: SET_PLAN , plan}
}

const editUserPlan = (period, state) => {
  return { type: EDIT_PLAN , period, state}
}

//заменить
export const addElemDaily = (elem, time) => {
  return { type: ADD_ELEMENT_DAY, elem, time }
}

export const deleteElemDaily = (id, time) => {
  return { type: DELETE_ELEMENT_DAY, id, time }
}

//
export const getUserPlanThunk = (date) => async (dispatch) => {
  const response = await calendar.getUserPlan(date);

  if (response.status === 200) {
    dispatch(setUserPlan(response.data.plan))
  } else {
    alert(response.data)
  }
}

export const editUserPlanThunk = (date, period, state) => async (dispatch) => {
  const response = await calendar.editUserPlan({date, period, state});

  if (response.status === 200) {
    dispatch(editUserPlan(period, state))
  } else {
    alert(response.data)
  }
}



export default dailyReducer;