import { createBrowserHistory } from 'history';
import React from 'react';
import del from '../../img/delete.svg';
import AddElem from '../button/addElem/addElem';
import style from './Daily.module.css';

const List = ({ list, time, deleteElemDaily}) => {

  let deleteElem = (id, time) => {
    deleteElemDaily(id, time)
  }

  let history = createBrowserHistory();

  return <div className={style.part_day}>
    {
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
