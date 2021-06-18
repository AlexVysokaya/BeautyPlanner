import React from 'react';
import style from './Cosmetics.module.css';
import del from '../../img/delete.svg';
import { createBrowserHistory } from 'history';
import AddElem from '../button/addElem/addElem';
import Comeback from '../button/comeback/comeback';

const Catalog = ({ list, editCosmBagThunk }) => {

  let history = createBrowserHistory();

  let deleteElem = (id) => {
    let category = history.location.pathname.split('/');
    category.shift();
    const newPlan = list.filter( elem => elem.id !== id );
    editCosmBagThunk(category[1], category[2], newPlan);
  }

  return <div className={style.button_wrapper}>
    <div className={style.button_back}>
      <Comeback history={history} />
    </div>
    <div className={style.button_add}>
      <AddElem history={history} />
    </div>
    {
      list.map(elem => {
        return <div key={elem.id} className={`${style.button_box} ${style.element}`}>
          <span>{elem.name}</span>
          <div className={style.button_delete} onClick={() => deleteElem(elem.id)}>
            <img src={del} />
          </div>
        </div>
      })
    }

  </div>
}

export default Catalog;