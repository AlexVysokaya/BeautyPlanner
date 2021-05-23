const SET_DATE = 'SET-DATE';

const initialState = {
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
    notes: null,
  }
}

const dailyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE: {
      return {...state, date: action.date}
    }
    default:
      return state;
  }
}

//установка даты из url
export const setDate = (date) => {
  return {type: SET_DATE, date}
}

//установка данных из запроса

export default dailyReducer;