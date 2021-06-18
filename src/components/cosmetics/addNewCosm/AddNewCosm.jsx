import { createBrowserHistory } from 'history';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { minLength10, required } from '../../../validators/validator';
import Comeback from '../../button/comeback/comeback';
import { createField, Input } from '../../requiredComponents/FormControl/FormControl';
import style from './AddNewCosm.module.css';

const Form = ({ handleSubmit }) => {
  return <form onSubmit={handleSubmit}>
    <div className={style.wrapper_field}>
      {
        createField('Название (не менее 10 символов)*', 'name', [minLength10, required], Input)
      }
    </div>
    <div className={style.wrapper_button}>
      <button>Добавить</button>
    </div>
  </form>
}

const AddNewForm = reduxForm({
  form: 'addNewInCosmedics',
})(Form);

const AddNewCosm = ({ editCosmBagThunk, state }) => {

  let history = createBrowserHistory();

  const onSubmit = (formData) => {
    // запрос на добавление
    let category = history.location.pathname.split('/');
    category.shift();
    const newElem = { id: Number(new Date()), name: formData.name };
    let newPlan = [...state[category[1]].list[category[2]].list];
    newPlan.push(newElem);
    editCosmBagThunk(category[1], category[2], newPlan);
    history.back();
  }

  return <div className={style.wrapper}>
    <div className={style.button_back}>
      <Comeback history={history} />
    </div>
    <div className={style.wrapper_form}>
      <AddNewForm onSubmit={onSubmit} />
    </div>
  </div>

}

export default AddNewCosm;