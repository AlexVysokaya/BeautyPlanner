import React from 'react';
import style from './Daily.module.css';

const DateComp = ({date, changeDate}) => {

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return <div className={style.wrapper_date}>
      <div className={style.date_button} onClick={() => { changeDate( -1 ) }}>
        <div className={style.button_back}></div>
      </div>
      {`${day}.${(month > 10) ? month : '0' + month}.${year}`}
      <div className={style.date_button} onClick={() => { changeDate( 1 ) }}>
        <div className={style.button_forward}></div>
      </div>
    </div>
}

export default DateComp;
