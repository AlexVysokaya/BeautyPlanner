import React from 'react';
import style from './addElement.module.css';
import logo from '../../../img/pencil.svg';
import { NavLink } from 'react-router-dom';

const AddElement = ({time, addElemDaily}) => {

  const addElem = () => {
    addElemDaily( { id: 31, name: 'Крем для рук', photo: null}, time);
  }

  return <div className={style.button_add} onClick={()=>{addElem()}}>
      <img src={logo} className={style.button_logo} />
      <span>Добавить</span>
    </div>
}

export default AddElement;