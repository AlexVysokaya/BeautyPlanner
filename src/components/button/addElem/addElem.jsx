import React from 'react';
import style from './addElem.module.css';
import logo from '../../../img/pencil.svg';
import { NavLink } from 'react-router-dom';

const AddElem = ({ history, time }) => {

  let newPath =`${history.location.pathname}/new`;
  if (time) {
    newPath += `/${time}`;
  }

  return <NavLink to={newPath}>
    <div className={style.button_add} >
      {/* <img src={logo} className={style.button_logo} /> */}
      <span>Добавить</span>
    </div>
  </NavLink>
}

export default AddElem;