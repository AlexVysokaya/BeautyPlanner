import { createBrowserHistory } from 'history';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './Registration.module.css';
import back from '../../img/back.svg';
import Comeback from '../button/comeback/comeback';
import { connect } from 'react-redux';
import { authRegistrationThunk } from '../../redux/authReducer';
import { minLength10, minLength8, required } from '../../validators/validator';
import { createField, Input } from '../requiredComponents/FormControl/FormControl';

const Form = ({ handleSubmit, error }) => {
  return <form onSubmit={handleSubmit}>
    <div className={style.wrapper_field}>
      {
        createField('Логин (не менее 8 символов)*', 'login', [required, minLength8], Input)
      }
    </div>
    <div className={style.wrapper_field}>
      {
        createField('Пароль (не менее 10 символов)*', 'password', [required, minLength10], Input, { type: 'password' })
      }
    </div>
    {
      (error) && <div className={style.formSummaryError}>{error}</div>
    }
    <div className={style.wrapper_button}>
      <button>Зарегистрироваться</button>
    </div>
  </form>
}

const RegForm = reduxForm({
  form: 'registration',
})(Form);

const Registration = ({ authRegistrationThunk }) => {

  let history = createBrowserHistory();

  let onSubmit = (formData) => {
    // запрос на регистрацию
    const login = formData.login;
    const password = formData.password;
    authRegistrationThunk(login, password);
  }

  return <div className={style.wrapper}>
    <div className={style.header}>
      <span>Регистрация</span>
    </div>
    <div className={style.wrapper_form}>
      <RegForm onSubmit={onSubmit} />
    </div>
    <div className={`${style.wrapper_button} ${style.wrapper_button_back}`}>
      <Comeback history={history} />
    </div>
  </div>
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, { authRegistrationThunk })(Registration);