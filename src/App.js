import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import style from './App.module.css';
import CalendarContainer from './components/calendarContainer/CalendarContainer';
import Cosmetics from './components/cosmetics/Cosmetics';
import Daily from './components/daily/Daily';
import { Header } from './components/header/Header';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import Setting from './components/settings/Setting';

function App(props) {
  return (
    <div className={style.app}>
      {(props.isAuth) ? <Redirect to='/calendar'/> : <Redirect to='/login'/>}
      <Header />
      <div className={style.block}>
        <Route path='/calendar' render={()=> <CalendarContainer isAuth = {props.isAuth}/>} />
        <Route path='/daily' render={()=> <Daily isAuth = {props.isAuth}/>} />
        <Route path='/cosmetic' render={()=> <Cosmetics isAuth = {props.isAuth}/>} />
        <Route path='/setting'  render={()=> <Setting isAuth = {props.isAuth}/>} />
      </div>
      <Route path='/registration' render={()=> <Registration/>}/>
      <Route path='/login' render={()=> <Login/>}/>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps,{})(App);
