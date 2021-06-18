import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { authLoginThunk } from '../../redux/authReducer';
import { createField, Input } from '../requiredComponents/FormControl/FormControl';
import style from './Login.module.css';

const Form = ({ handleSubmit, error }) => {
  return <form onSubmit={handleSubmit}>
    <div className={style.wrapper_field}>
      {
        createField('Логин', 'login', [], Input)
      }
    </div>
    <div className={style.wrapper_field}>
      {
        createField('Пароль', 'password', [], Input, { type: 'password' })
      }
    </div>
    {
      (error) && <div className={style.formSummaryError}>{error}</div>
    }
    <div className={style.wrapper_button}>
      <button>Войти</button>
    </div>
  </form>
}

const LogForm = reduxForm({
  form: 'login',
})(Form);

const Login = ({ authLoginThunk }) => {

  let onSubmit = (formData) => {
    // запрос на авторизацию
    const login = formData.login;
    const password = formData.password;
    authLoginThunk(login, password);
  }

  return <div className={style.wrapper}>
    <div className={style.header}>
      <span>Авторизация</span>
    </div>
    <div className={style.wrapper_form}>
      <LogForm onSubmit={onSubmit} />
    </div>
    <div className={style.registration}>
      <NavLink to='/registration'>Зарегистрироваться</NavLink>
    </div>
  </div>
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, { authLoginThunk })(Login);