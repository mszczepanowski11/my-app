import React,{FC} from 'react';
import {useSelector} from 'react-redux'
import {IState} from '../../reducers'
import {IUsersReducer} from '../../reducers/usersReducer'
import {IPhotosReducer} from '../../reducers/photosReducer'
import styled from 'styled-components'
import {ProfileInfo} from './ProfileInfo'
import {About} from './About'
import {Proposals} from './Proposals'
import {Reviews} from './Reviews'
import {Fees} from './Fees'
import {PanelInformations} from './Panelnformations'
import '../common/LatestPublications/LatestPublicationsData'
import {Breadcrumb,Icon} from 'semantic-ui-react'


const Content = styled.div`
    position:absolute;
    top:8%;
    left:30%;
    width:600px;
    height:auto;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
    border-radius:5px;
`


const MainProfile : FC = () => {

    const {usersList,currentUser} = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos
    }))


    return(
       
        <Content>
             <Breadcrumb style={{backgroundColor:'#fff',float:'right',paddingBottom:'0'}}>
                <Breadcrumb.Section link><Icon name="comment"/>Message</Breadcrumb.Section>
                <Breadcrumb.Section link><Icon name="file alternate"/>Create a request</Breadcrumb.Section>
                <Breadcrumb.Section link><Icon name="briefcase"/>Add to a cluster</Breadcrumb.Section>
                <Breadcrumb.Section link><Icon name="x"/></Breadcrumb.Section>
            </Breadcrumb>  
            <ProfileInfo
                avatar = "https://via.placeholder.com/60/92c952"
                link = "See profile"
                name= "Humberta Swift"
                company = "Clifford Chance"
                city = "New York"
                role = "Partner"
                email = "humbertaswift@gmail.com"
                phone = '+33(0) 6 12 34 56 78'
            />
            
            <About/>
            <PanelInformations/>
            <Proposals/>
            <Reviews/>
            <Fees/>

        </Content>
    )
}

export default MainProfile