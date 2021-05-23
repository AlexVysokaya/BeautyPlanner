import React from 'react';
import style from './comeback.module.css';
import back from '../../../../img/back.svg'

const Comeback = ({ history }) => {

  return <div className={style.button_back} onClick={ () => {history.back()}}>
    <img src={back} className={style.button_logo} />
    <span>Назад</span>
  </div>

}

export default Comeback;