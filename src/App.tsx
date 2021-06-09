import React,{FC,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components'


import {TopNav} from './components/TopNav/TopNav';
import {LeftMenu} from './components/LeftMenu/LeftMenu'
import MainPage from './MainPage'
import MainProfile from './components/Profile/MainProfile'
import Entities from './components/Entities/Entities'
import Workspace from './components/Workspace/Workspace'
import {Administration} from './components/TestSites/Administration/Administration'
import {Ecosystem} from './components/TestSites/Ecosystem/Ecosystem'
import {People} from './components/TestSites/People/People'
import {Privacy} from './components/TestSites/Privacy/Privacy'
import {Publications} from './components/TestSites/Publications/Publications'
import {Settings} from './components/TestSites/Settings/Settings'


import {getUsers} from './actions/actionsTypes/userActions'
import {getPhotos} from './actions/actionsTypes/photoActions'
import {getComments} from './actions/actionsTypes/commentActions'
import {getPosts} from './actions/actionsTypes/postsActions'

import {BrowserRouter as Router,Switch,Route,withRouter} from 'react-router-dom'

const MainWrapper = styled.div``

type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>
type GetComments = ReturnType<typeof getComments>
type GetPosts = ReturnType<typeof getPosts>

const AppWrapper : FC = () => {

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch<GetUsers>(getUsers()).then(() => {
      dispatch<GetPhotos>(getPhotos()).then(() => {
      dispatch<GetComments>(getComments()).then(() => {
      dispatch<GetPosts>(getPosts())    
          })
        })    
      })
  },[])

  return (
    <div>
      <Router>
        
         <TopNav/>
         <LeftMenu/>

            <MainWrapper>
              <Switch>
                <Route  exact path='/'
                 component={MainPage}>   
                </Route>
                <Route exact path='/entities'
                  component={withRouter(Entities)}>
                </Route>
                <Route exact path='/profile'
                  component={MainProfile}>  
                </Route> 
                <Route exact path='/workspace'
                  component={Workspace}>  
                </Route> 
                <Route exact path='/administration'
                  component={Administration}>  
                </Route> 
                <Route exact path='/ecosystem'
                  component={Ecosystem}>  
                </Route> 
                <Route exact path='/people'
                  component={People}>  
                </Route> 
                <Route exact path='/privacy'
                  component={Privacy}>  
                </Route> 
                <Route exact path='/publications'
                  component={Publications}>  
                </Route> 
                <Route exact path='/settings'
                  component={Settings}>  
                </Route> 
                <Route exact path='/client_contract'
                  component={Workspace}>
                </Route>  
                <Route exact path='/supplier_contract'
                  component={Workspace}>
                </Route>  
                <Route exact path='/corporate'
                  component={Workspace}>
                </Route>  
                <Route exact path='/group_norms'
                  component={Workspace}>
                </Route>  
                <Route exact path='/estate_contract'
                  component={Workspace}>
                </Route>  
              </Switch>
            </MainWrapper>
      </Router>
    </div>
  );
};

export default AppWrapper;
 