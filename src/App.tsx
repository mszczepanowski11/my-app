import React,{FC} from 'react';
import {TopNav} from './components/TopNav/TopNav';
import {LeftMenu} from './components/LeftMenu/LeftMenu'
import MainPage from './MainPage'
import MainProfile from './components/Profile/MainProfile'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'


const AppWrapper : FC = () => {
  return (
    <div>
      <Router>
       <TopNav/>
         <LeftMenu/>
            <Switch>
              <Route path="/" exact component={MainPage}/>
              <Route path="/profile" exact component={MainProfile}/>
            </Switch>
      </Router>
    </div>
  );
};

export default AppWrapper;
 