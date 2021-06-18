import React from 'react';
import { getDateParametrs } from '../../function/getDateParametrs';
import Download from '../requiredComponents/Downloud/Downloud';
import style from './Daily.module.css';
import DateComp from './Date';
import Plan from './Plan';


class Daily extends React.Component {

  state = {
    selectedDate: this.props.date,
  }

  changeSelectedDate(date) {
    this.setState(() => {
      return {
        selectedDate: date,
      }
    });
  }

  componentDidMount() {
    this.changeSelectedDate(this.props.date);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.date !== this.props.date) {
      this.changeSelectedDate(this.props.date);
    }
  }

  changeDate = (n) => {

    const {year, month, day} = getDateParametrs(this.state.selectedDate);
    const newData = `${day+n}.${ (month+1 > 10) ? month+1 : '0'+(month+1)}.${year}`;
    this.props.setDate( new Date(year, month, day + n));
    this.props.getUserPlanThunk(newData);
  }

  render() {
    if (!this.state.selectedDate) {
      return <Download />
    }

    return <div className={style.wrapper}>
      <DateComp date={this.state.selectedDate} changeDate = {this.changeDate}/>
      <Plan plan = {this.props.plan} date={this.state.selectedDate} editUserPlanThunk={this.props.editUserPlanThunk}/>
    </div>
  }
}

export default Daily;
