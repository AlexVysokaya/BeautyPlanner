import React from 'react';
import { withRouter } from 'react-router';
import style from './Calendar.module.css';

let Calendar = ({ matrix, year, month, day, history, setDatePlan }) => {

  let switchingToDate = (day, month, year) => { // переход на Ежедневник
    // history.push(`/daily?year=${year}&month=${month}&day=${day}`)
    console.log('попал в переход на ежедневник');
    const newDate = new Date(year, month, day);
    setDatePlan(newDate);
    history.push(`/daily`);
  }

  let calendar = matrix.map((row, rowIndex) => { //идем по строкам
    let rowItems = row.map((item, colIndex) => { //по элементам каждой строки
      return (
        <div key={colIndex} className={`${style.calendar_item}
                          ${item !== -1 && rowIndex !== 0 && style.calendar_day}
                          ${item === day && style.calendar_activeDay}
                          ${rowIndex === 0 && style.calendar_weekRow}
                          ${(colIndex === 0 || colIndex === 6) && style.calendar_weekend}`}
          onClick={() => (item !== -1 && rowIndex !== 0) && switchingToDate(item, month, year)}>
          {item !== -1 && item}
        </div>
      );
    });

    return (
      <div key={rowIndex} className={style.calender_week}>
        {rowItems}
      </div>
    )
  })

  return <div className={style.calendar_wrapper}>
    {calendar}
  </div>
}

export default withRouter(Calendar);
