import React,{FC,useState} from 'react';
import styled from 'styled-components'
import './style.scss'
import {ProfileForm} from './ProfileForm'
import {About} from './About'
import {Proposals} from './Proposals'
import {Reviews} from './Reviews'
import {Fees} from './Fees'
import {PanelInformations} from './Panelnformations'
import {Breadcrumb,Icon} from 'semantic-ui-react'


const Content = styled.div`
    position:absolute;
    top:8%;
    left:30%;
    width:700px;
    height:auto;
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
    border-radius:5px;
`
const editIcon = <Icon size='large' name='pencil' color='black'/>
const saveIcon = <Icon size='large' name='save' color='black'/>

const MainProfile : FC = () => {
    const [isEditable,edit] = useState(false)

    return(
        <Content>
             <Breadcrumb className='breadcrumb' style={{backgroundColor:'#fff',float:'right',paddingBottom:'0',marginRight:'5px'}}>
                <Breadcrumb.Section link><span><Icon name="comment outline"/>Message</span></Breadcrumb.Section>
                <Breadcrumb.Section link><span><Icon name="file alternate outline"/>Create a request</span></Breadcrumb.Section>
                <Breadcrumb.Section link><span><Icon name="briefcase"/>Add to a cluster</span></Breadcrumb.Section>
                <Breadcrumb.Section link><span><Icon name="x"/></span></Breadcrumb.Section>
            </Breadcrumb>  
            
           
            <ProfileForm onSubmit={() => {}}/>
            <hr></hr>
            <About/>
            <hr></hr>
            <Icon 
                style={{float:'right',display:'block',marginBottom:'10px',marginRight:'30px',cursor:'pointer'}}  
                basic 
                onClick={() => {edit(!isEditable)}}>{isEditable ? saveIcon : editIcon}
            </Icon>  
            <PanelInformations isEditable={isEditable}/>     
            <hr></hr>
            <Proposals isEditable={isEditable}/>
            <hr></hr>
            <Reviews isEditable={isEditable}/>
            <hr></hr>
            <Fees isEditable={isEditable}/>
        </Content>
    )
}

export default MainProfile