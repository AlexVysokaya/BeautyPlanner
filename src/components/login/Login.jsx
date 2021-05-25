import React from 'react';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import style from './Login.module.css';

const Form = ({ handleSubmit }) => {
  return <form onSubmit={handleSubmit}>
    <div className={style.wrapper_field}>
      <Field placeholder={'Логин'}
        name={'login'}
        component={'input'} />
    </div>
    <div className={style.wrapper_field}>
      <Field placeholder={'Пароль'}
        name={'password'}
        component={'input'}
        type={'password'} />
    </div>
    <div className={style.wrapper_button}>
      <button>Войти</button>
    </div>
  </form>
}

const LogForm = reduxForm({
  form: 'login',
})(Form);

const Login = () => {

  let onSubmit = (formData) => {
    // запрос на авторизацию
  }

  return <div className={style.wrapper}>
    <div className = {style.header}>
      <span>Авторизация</span>
    </div>
    <div className = {style.wrapper_form}>
      <LogForm onSubmit={onSubmit} />
    </div>
    <div className = {style.registration}>
      <NavLink to='/registration'>Зарегистрироваться</NavLink>
    </div>
  </div>
}

export default Login;