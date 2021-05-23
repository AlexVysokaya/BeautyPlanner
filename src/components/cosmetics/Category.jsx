import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Cosmetics.module.css';
import Comeback from './button/comeback/comeback';
import { createBrowserHistory } from 'history';

const Category = ({ list }) => {

  let history = createBrowserHistory();
  let location = history.location;

  let arrButton = [];

  for (let key in list) {
    arrButton.push(
      <NavLink to={`${location.pathname}/${key}`}>
        <div className={`${style.button_box}`}>
          <span>{list[key].name}</span>
        </div>
      </NavLink>
    )
  }



  return <div className={style.button_wrapper}>
    {
      (location.pathname !== '/cosmetic') && <div className={style.button_back}>
        <Comeback history={history} />
      </div>
    }

    {arrButton}
  </div>
}

export default Category;