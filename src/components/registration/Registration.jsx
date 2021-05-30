import { createBrowserHistory } from 'history';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './Registration.module.css';
import back from '../../img/back.svg';
import Comeback from '../button/comeback/comeback';
import { authorization } from '../../api/api';


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
      <button>Зарегистрироваться</button>
    </div>
  </form>
}

const RegForm = reduxForm({
  form: 'registration',
})(Form);

const Registration = () => {

  let history = createBrowserHistory();

  let onSubmit = (formData) => {
    // запрос на регистрацию
    const login = formData.login;
    const password = formData.password;
    authorization.registration(login, password);
  }

  return <div className={style.wrapper}>
    <div className={style.header}>
      <span>Регистрация</span>
    </div>
    <div className={style.wrapper_form}>
      <RegForm onSubmit={onSubmit} />
    </div>
    <div className={`${style.wrapper_button} ${style.wrapper_button_back}`}>
      <Comeback history = {history}/>
      {/* <button className={style.button_back} onClick={() => { history.back() }}>
        <img src={back} className={style.button_logo} />
        <span>Назад</span>
      </button>  */}
    </div>
  </div>
}

export default Registration;