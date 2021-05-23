import React from 'react';
import style from './Setting.module.css';
import { connect } from 'react-redux';
import Name from './profile-name/Name';
import { setProfileName } from '../../redux/authReducer';
import Avatar from './profile-photo/Avatar.jsx';
import { Redirect } from 'react-router';


const Setting = ({ name, login, photo, setProfileName, ...props}) => {

  return (
    <div className={style.setting}>
      {(!props.isAuth) && <Redirect to='/login'/>}
      <div className={style.setting_wrapper}>
        <Avatar photo={photo} />
        <div className={style.profile_info}>
          <Name name={name} setProfileName={setProfileName} />
          <div className={style.profile_login}>
            {login || 'Логин'}
          </div>
        </div>
        <button className={style.button_exit}>Выйти</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    name: state.auth.name,
    login: state.auth.login,
    photo: state.auth.photo,
  }
}

export default connect(mapStateToProps, { setProfileName })(Setting)