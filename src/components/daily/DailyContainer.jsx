import React from 'react';
import { Route} from 'react-router';
import AddNewDay from './addNewDay/AddNewDay';
import Daily from './Daily';


const DailyContainer = ({isAuth}) => {
    return <div>
      <Route exact path='/daily' render={()=> <Daily isAuth = {isAuth}/>} />
      <Route path='/daily/new' render={() => <AddNewDay/>} />
    </div>
}


export default DailyContainer;
