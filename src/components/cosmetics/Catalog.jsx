import React from 'react';
import style from './Cosmetics.module.css';
import del from '../../img/delete.svg';
import Comeback from './button/comeback/comeback';
import AddElem from './button/addElem/addElem';
import { createBrowserHistory } from 'history';

const Catalog = ({ list, deleteElemCosmetics }) => {

  let history = createBrowserHistory();

  let deleteElem = (id) => {
    let category = history.location.pathname.split('/');
    category.shift();
    deleteElemCosmetics(id, category);
  }

  return <div className={style.button_wrapper}>
    <div className={style.button_back}>
      <Comeback history={history} />
    </div>
    <AddElem history={history}/>
    {
      list.map(elem => {
        return <div key={elem.id} className={`${style.button_box} ${style.element}`}>
          <span>{elem.name}</span>
          <div className={style.button_delete} onClick = {() => deleteElem(elem.id)}>
            <img src={del} />
          </div>
        </div>
      })
    }

  </div>
}

export default Catalog;