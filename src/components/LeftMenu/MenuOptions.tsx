import React from 'react'
import {Publications} from '../Publications/Publications';
import {Ecosystem} from '../Ecosystem/Ecosystem';
import {Entities} from '../Entities/Entities';
import styled from 'styled-components'
import './MenuOptions.scss'
import { List } from 'semantic-ui-react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";


const Content = styled.div`
   margin-left:15px;
   text-align:left;
   width:220px;
   heigh:auto;
`;


export default class MenuOptions extends React.Component {

    render(){
      return(
          <Router>
            <Content>
                <List> 
                    <li><img src="./icons/publications.png" alt="publications"/><Link to="/publications">Publications</Link></li>
                    <li><img src="./icons/ecosystem.png" alt="ecosystem"/><Link to="/ecosystem">Ecosystem</Link></li>
                    <li><img src="./icons/entities.png" alt="entities"/><Link to="/entities">Entities</Link></li>
                </List>
            </Content>

          
            <Switch> 
              <Route path="/publications">
                <Publications />
              </Route>
              <Route path="/ecosystem">
                <Ecosystem />
              </Route>
              <Route path="/entities">
                <Entities />
              </Route>
            </Switch>
          </Router>
        );
    }
}

