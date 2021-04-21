import React ,{FC}  from 'react'
import Profile from './Profile'
import MenuOptions from './MenuOptions'
import styled from 'styled-components'
//import 'semantic-ui-css/semantic.min.css'
import './LeftMenu.scss'


const LeftMenuComponent = styled.div``;

export const LeftMenu :FC = () => {
    return(
        <LeftMenuComponent>
            <Profile></Profile>
             <MenuOptions></MenuOptions> 
        </LeftMenuComponent>
    )
}



