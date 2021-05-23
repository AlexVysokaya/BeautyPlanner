import React from 'react';
import style from './addElement.module.css';
import logo from '../../../img/pencil.svg';
import { NavLink } from 'react-router-dom';

const AddElement = () => {

  return <div className={style.button_add} >
      <img src={logo} className={style.button_logo} />
      <span>Добавить</span>
    </div>
}

export default AddElement;