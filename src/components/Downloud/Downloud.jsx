import React from 'react';
import style from './Downloud.module.css';
import louding from '../../img/loading2.gif';


const Download = () => {
  return <div className={style.louding_wrapper}>
    <img src={louding}/>
  </div>
}

export default Download;