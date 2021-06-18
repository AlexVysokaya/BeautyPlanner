import { createBrowserHistory } from 'history';
import React from 'react';
import { stringDate } from '../../function/stringDate';
import del from '../../img/delete.svg';
import AddElem from '../button/addElem/addElem';
import style from './Daily.module.css';

const List = ({ date, list, time, editUserPlanThunk}) => {

  let deleteElem = (id, time) => {
    const newPlan = list.filter(elem => elem.id !== id);
    const strDate = stringDate(date);
    editUserPlanThunk(strDate, time, newPlan);
  }

  let history = createBrowserHistory();
  return <div className={style.part_day}>
    {
      (list.length === 0) ? <div className={`${style.element} ${style.no_plan}`}>Нет плана</div> :
      list.map((elem) => {
        return <div className={`${style.element}`}>
          <span>{elem.name}</span>
          <div className={style.button_delete} onClick={()=>{deleteElem(elem.id, time)}}>
            <img src={del} />
          </div>
        </div>
      })
    }
    <div className={style.button_add}>
      <AddElem history={history} time={time}/>
    </div>
  </div>
}

export default List;
