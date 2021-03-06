import React from 'react';
import List from './List';
import style from './Daily.module.css';

const Plan = ({plan, editUserPlanThunk, date}) => {

  let arrPart = [];
  let dayTime = {
    morning: 'Утро',
    daytime: 'День',
    evening: 'Вечер'
  }

  for (let key in plan) {
    arrPart.push( <div className={style.daily}>
      <h3>{dayTime[key]}</h3>
      <List list={plan[key]} time={key} date={date} editUserPlanThunk={editUserPlanThunk} />
    </div> )
  }

  return <div className={style.daily_wrapper}>
    {arrPart}
  </div>

}


export default Plan;
