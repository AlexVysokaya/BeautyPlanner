import React from 'react';
import del from '../../img/delete.svg';
import AddElement from './button/addElement';
import style from './Daily.module.css';

const List = ({ list, time }) => {

  let deleteElem = (id, time) => {
    console.log(id, time);
  }
  

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
    <div>
      <AddElement/>
    </div>
  </div>
}

export default List;
