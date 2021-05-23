import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import Download from '../Downloud/Downloud';
import style from './Daily.module.css';
import List from './List';


class Daily extends React.Component {

  state = {
    todayDate: new Date(),
    selectedDate: null,
  }

  changeSelectedDate(date) {
    this.setState(() => {
      return {
        selectedDate: date,
      }
    });
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const year = Number(query.get('year'));
    const month = Number(query.get('month'));
    const day = Number(query.get('day'));
    this.changeSelectedDate(new Date(year, month, day));
  }

  componentDidUpdate(prevProps, prevState) {
    const query = new URLSearchParams(this.props.location.search);
    const year = Number(query.get('year'));
    const month = Number(query.get('month'));
    const day = Number(query.get('day'));
    const NewDate = new Date(year, month, day);
    if (+prevState.selectedDate !== +NewDate) {
      this.changeSelectedDate(NewDate);
    }
  }

  changeDate = (n) => {

  }



  render() {
    if (!this.state.selectedDate) {
      return <Download />
    }

    let year = this.state.selectedDate.getFullYear();
    let month = this.state.selectedDate.getMonth() + 1;
    let day = this.state.selectedDate.getDate();
    let { plan } = this.props;

    return <div className={style.wrapper}>
      {(!this.props.isAuth) && <Redirect to='/login'/>}
      <div className={style.wrapper_date}>
        <div className={style.date_button} onClick={()=>{this.changeDate(-1)}}>
          <div className={style.button_back}></div>
        </div>
        {`${day}.${(month > 10) ? month : '0' + month}.${year}`}
        <div className={style.date_button} onClick={()=>{this.changeDate(1)}}>
          <div className={style.button_forward}></div>
        </div>
      </div>
      <div  className={style.daily_wrapper}>
        <div className={style.daily}>
          <h3>Утро</h3>
          <List list={plan.morning} time='morning' />
        </div>
        <div className={style.daily}>
          <h3>День</h3>
          <List list={plan.daytime} time='daytime' />
        </div>
        <div className={style.daily}>
          <h3>Вечер</h3>
          <List list={plan.evening} time='evening' />
        </div>
      </div>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    plan: state.daily.plan,
  }
}

export default connect(mapStateToProps, {})(withRouter(Daily));
