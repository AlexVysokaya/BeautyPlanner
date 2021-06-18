import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect} from 'react-router';
import { deleteElemDaily, editUserPlanThunk, getUserPlanThunk, setDate } from '../../redux/dailyReducer';
import AddNewDay from './addNewDay/AddNewDay';
import Daily from './Daily';


const DailyContainer = ({isAuth, cosmetics, date, plan, getUserPlanThunk, setDate, editUserPlanThunk}) => {
    return <div>
      {(!isAuth) && <Redirect to='/login'/>}
      <Route exact path='/daily' render={()=> <Daily date={date} plan={plan} getUserPlanThunk={getUserPlanThunk} setDate={setDate} editUserPlanThunk={editUserPlanThunk}/>} />
      <Route path='/daily/new' render={() => <AddNewDay date={date} plan={plan} cosmetics={cosmetics} editUserPlanThunk={editUserPlanThunk}/>} />
    </div>
}

const mapStateToProps = (state) => {
  return {
    date: state.daily.date,
    plan: state.daily.plan,
    cosmetics: state.cosmetics
  }
}

export default connect (mapStateToProps, {getUserPlanThunk, setDate, editUserPlanThunk})(DailyContainer);
