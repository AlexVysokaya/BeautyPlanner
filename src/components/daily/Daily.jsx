import React from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router';
import { addElemDaily, deleteElemDaily, setDatePlan } from '../../redux/dailyReducer';
import Download from '../Downloud/Downloud';
import style from './Daily.module.css';
import DateComp from './Date';
import Plan from './Plan';


class Daily extends React.Component {

  state = {
    //todayDate: new Date(),
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
    let year = this.state.selectedDate.getFullYear();
    let month = this.state.selectedDate.getMonth();
    let day = this.state.selectedDate.getDate() + n;
    this.props.setDatePlan( new Date(year, month, day));
  }

  render() {
    if (!this.state.selectedDate) {
      return <Download />
    }

    return <div className={style.wrapper}>
      {(!this.props.isAuth) && <Redirect to='/login'/>}
      <DateComp date={this.state.selectedDate} changeDate = {this.changeDate}/>
      <Plan plan = {this.props.plan} deleteElemDaily={this.props.deleteElemDaily} addElemDaily={this.props.addElemDaily}/>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    date: state.daily.date,
    plan: state.daily.plan,
  }
}

export default connect(mapStateToProps, {deleteElemDaily, setDatePlan, addElemDaily})(Daily);
