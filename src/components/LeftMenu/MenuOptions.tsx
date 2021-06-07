import React,{FC} from 'react'
import styled from 'styled-components'
import './MenuOptions.scss'
import { List } from 'semantic-ui-react'
import { Link} from "react-router-dom";


const Content = styled.div`
   margin-left:15px;
   text-align:left;
   width:220px;
   heigh:auto;
`;

const  MenuOptions:FC = () => {
      return(
            <Content>
                <List> 
                    <li><img src="./icons/publications.png" alt="publications"/><Link to="/publications"> Publications</Link></li>
                    <li><img src="./icons/ecosystem.png" alt="ecosystem"/><Link to="/ecosystem"> Ecosystem</Link></li>
                    <li><img src="./icons/entities.png" alt="entities"/><Link to="/entities">Entities</Link></li>
                </List>
            </Content>
      );
}

export default MenuOptions