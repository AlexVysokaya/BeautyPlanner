import React from 'react';
import { Redirect, Route} from 'react-router-dom';
import style from './Cosmetics.module.css';
import { connect } from 'react-redux';
import Catalog from './Catalog';
import Category from './Category';
import { addNew, deleteElemCosmetics } from '../../redux/cosmeticsReducer';
import AddNew from './addNew/AddNew';
import { createBrowserHistory } from 'history';

const Cosmetics = ({ state, addNew, deleteElemCosmetics, ...props }) => {
  let arrRoute = [];
  let history = createBrowserHistory();

  function fillRoute(url, parcel) {
    for (let key in parcel) {
      if (!Array.isArray(parcel[key].list)) {
        arrRoute.push(
          <Route exact path={`${url}/${key}`} render={() => <Category list={parcel[key].list} />} />
        )
        fillRoute(`${url}/${key}`, parcel[key].list);
      } else {
        arrRoute.push(
          <Route exact path={`${url}/${key}`} render={() => <Catalog list={parcel[key].list} deleteElemCosmetics = {deleteElemCosmetics}/>} />
        )
        arrRoute.push(
          <Route exact path={`${url}/${key}/new`} render={() => <AddNew history={history} addNew = {addNew}/>} />
        )
      }
    }
  }

  fillRoute('/cosmetic', state);

  return <div className={style.wrapper}>
    {(!props.isAuth) && <Redirect to='/login'/>}
    {arrRoute}
    <Route exact path='/cosmetic' render={() => <Category list={state} />} />
  </div>
}

const mapStateToProps = (state) => {
  return {
    state: state.cosmetics
  }
}

export default connect(mapStateToProps, { addNew, deleteElemCosmetics })(Cosmetics);