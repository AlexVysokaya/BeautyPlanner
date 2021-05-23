import React from 'react';
import style from './Header.module.css';
import calendar from '../../img/calend.svg';
import daily from '../../img/daily.svg';
import cosmetic from '../../img/cosmetics.svg';
import setting from '../../img/profile.svg';
import { NavLink } from 'react-router-dom';
import { getDateParametrs } from '../../function/getDateParametrs';


export const Header = () => {

  const {year, month, day} = getDateParametrs(new Date());

  return (
    <div className={style.header}>
      <NavLink to='/calendar' activeClassName={style.active_logo}>
        <div className={style.header_logo}>
          <img src={calendar} />
        </div>
      </NavLink>
      <NavLink to={`/daily?year=${year}&month=${month}&day=${day}`} activeClassName={style.active_logo}>
        <div className={style.header_logo}>
          <img src={daily} />
        </div>
      </NavLink>
      <NavLink to='/cosmetic' activeClassName={style.active_logo}>
        <div className={style.header_logo}>
          <img src={cosmetic} />
        </div>
      </NavLink>
      <NavLink to='/setting' activeClassName={style.active_logo}>
        <div className={style.header_logo}>
          <img src={setting} />
        </div>
      </NavLink>
    </div>
  )
}