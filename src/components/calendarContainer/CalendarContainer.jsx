import React from 'react';
import { connect } from 'react-redux';
import Calendar from './calendar/Calendar';
import style from './CalendarContainer.module.css';
import { generationMatrix } from '../../function/generationMatrix';
import { getDateParametrs } from '../../function/getDateParametrs';
import { Redirect } from 'react-router';
import { getUserPlanThunk, setDate } from '../../redux/dailyReducer';

class CalendarContainer extends React.Component {

  state = {
    activeDate: new Date(),
  }

  changeMonth(n) {
    const { year, month, day } = getDateParametrs(this.state.activeDate);
    this.setState(() => {
      if (((month === 0 && n === 1) || (month === 2 && n === -1)) && day > 28) { //если переход на февраль
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) { //год високосный
          return {
            activeDate: new Date(year, month + n, 29)
          }
        }
        return {
          activeDate: new Date(year, month + n, 28)
        }
      }
      return {
        activeDate: new Date(year, month + n, day)
      }
    })
  }

  render() {
    const months = this.props.months;
    const { year, month, day } = getDateParametrs(this.state.activeDate);

    let matrix = generationMatrix(this.props.weekDays, this.state.activeDate, this.props.nDays)

    return (
      <div className={style.wrapper}>
        {(!this.props.isAuth) && <Redirect to='/login'/>}
        <div className={style.wrapper_month}>
          <div className={style.calendar_button} onClick={() => this.changeMonth(-1)}>
            <div className={style.button_back}></div>
          </div>
          {months[month]}
            &nbsp;
            {year}
          <div className={style.calendar_button} onClick={() => this.changeMonth(+1)}>
            <div className={style.button_forward}></div>
          </div>
        </div>
        <Calendar matrix={matrix} year={year} month={month} day={day} setDate={this.props.setDate} getUserPlanThunk={this.props.getUserPlanThunk}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    months: state.calendar.months,
    weekDays: state.calendar.weekDays,
    nDays: state.calendar.nDays,
  }
}

export default connect(mapStateToProps, {setDate, getUserPlanThunk})(CalendarContainer);
