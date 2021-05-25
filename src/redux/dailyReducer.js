// const SET_DATE_PLAN = 'SET-DATE-PLAN';
const SET_DATA = 'SET-DATA';
const DELETE_ELEMENT_DAY = 'DELETE-ELEMENT-DAY';
const ADD_ELEMENT_DAY = 'ADD-ELEMENT-DAY';

const initialState = {
  date: new Date(2021, 5, 23), //дата, на которую сделан запрос
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

const dailyReducer = (state = initialState, action) => {

  console.log(action.type);

  switch (action.type) {

    case SET_DATA: {
      console.log('попал в reduce установки даты');
      return {
        ...state,
        date: action.date
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

export const deleteElemDaily = (id, time) => {
  return { type: DELETE_ELEMENT_DAY, id, time }
}

export const setDatePlan = (date) => {
  //загрузка плана по дате
  console.log('попал в action установки даты');
  return { type: SET_DATA , date}
}

export const addElemDaily = (elem, time) => {
  return { type: ADD_ELEMENT_DAY, elem, time }
}

//установка данных из запроса

export default dailyReducer;