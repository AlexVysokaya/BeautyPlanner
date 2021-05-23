import { createBrowserHistory } from 'history';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Comeback from '../button/comeback/comeback';
import style from './AddNew.module.css';

const Form = ({handleSubmit}) => {
  return <form onSubmit={handleSubmit}>
    <div className={style.wrapper_field}>
      <Field placeholder={'Название'}
        name={'name'}
        component={'input'} />
    </div>
    <div className={style.wrapper_button}>
      <button>Добавить</button>
    </div>
  </form>
}

const AddNewForm = reduxForm({
  form: 'addNewInCosmedics',
})(Form);

const AddNew = ({ addNew }) => {

  let history = createBrowserHistory();

  const onSubmit = (formData) => {
    // запрос на добавление
    let category = history.location.pathname.split('/');
    category.shift();
    const newElem = {id: 27, name: formData.name};
    addNew(newElem, category);
    history.back();
  }

  return <div className={style.wrapper}>
    <div className={style.button_back}>
      <Comeback history={history} />
    </div>
    <div className = {style.wrapper_form}>
      <AddNewForm onSubmit={onSubmit}/>
    </div>
  </div>

}

export default AddNew;