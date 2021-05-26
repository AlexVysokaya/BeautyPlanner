import React from 'react';
import style from './addElem.module.css';
import logo from '../../../img/pencil.svg';
import { NavLink } from 'react-router-dom';

const AddElem = ({ history }) => {

  return <NavLink to={`${history.location.pathname}/new`}>
    <div className={style.button_add} >
      {/* <img src={logo} className={style.button_logo} /> */}
      <span>Добавить</span>
    </div>
  </NavLink>
}

export default AddElem;