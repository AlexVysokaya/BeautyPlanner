import React from 'react';
import style from './Header.module.css';
import calendar from '../../img/calend.svg';
import daily from '../../img/daily.svg';
import cosmetic from '../../img/cosmetics.svg';
import setting from '../../img/profile.svg';
import { NavLink } from 'react-router-dom';
import { getUserPlanThunk, setDate } from '../../redux/dailyReducer';
import { connect } from 'react-redux';
import { stringDate } from '../../function/stringDate';


const Header = ({setDate, getUserPlanThunk}) => {

  // const {year, month, day} = getDateParametrs(new Date());
  const setTodayDate = () => {
    let dateNow = new Date();
    setDate(dateNow);
    //запрос плана на новый день
    let strDate = stringDate(dateNow);
    getUserPlanThunk(strDate);
  }

  return (
    <div className={style.header}>
      <NavLink to='/calendar' activeClassName={style.active_logo}>
        <div className={style.header_logo}>
          <img src={calendar} />
        </div>
      </NavLink>
      <NavLink to={`/daily`} activeClassName={style.active_logo} onClick={()=>{setTodayDate()}}>
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

const mapStateToProps = (state) => {
  return {}
}

export default connect (mapStateToProps,{setDate, getUserPlanThunk})(Header)