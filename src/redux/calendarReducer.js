const initialState = {
  months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль',
    'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],

  weekDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],

  nDays: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
}

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default calendarReducer;