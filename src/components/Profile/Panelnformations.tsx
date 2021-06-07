import React,{FC,useState} from 'react';
import styled from 'styled-components'
import {Item,Image,Message,Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './style.scss'


const PanelContent = styled.div`
    margin:0 30px
`

const headerStyle = {
    opacity:'0.5'
}

const strongStyle = {
    marginRight:'40%'
}

interface IEditable {
    isEditable?:boolean
}

export const PanelInformations:FC<IEditable> = (props) => {

    const [edit,setEdit] = useState({
        fee:'610€/hour(Negociated)',
        terms_conditions:'Monthly 10k€ retainer - see with Jeany Smith',
        file:'Attachment_lorem_ipsum25425.jpg',
        projects:'Corporate M&A and international acquisitions',
        user1:'Firstname Lastname',
        user2:'Firstname Lastname'
    })

    return(
        <PanelContent className='panel-content'>
          <strong>Panel Informations</strong>
          <Item>
              <br></br>
              <Item.Header style={headerStyle}>Hourly fee</Item.Header>
              {!props.isEditable ? (
              <Item.Description>{edit?.fee}</Item.Description>
              ): <input value={edit?.fee} onChange={(event) => setEdit({...edit,fee:event.target.value})}/>}
          </Item>
            <br></br>
         <Item>
              <Item.Header style={headerStyle}>Terms & conditions</Item.Header>
              {!props.isEditable ? (
              <Item.Description>{edit?.terms_conditions}</Item.Description> 
              ) : <input value={edit?.terms_conditions} onChange={(event) => setEdit({...edit,terms_conditions:event.target.value})}/> }
              {!props.isEditable ? (
              <Message><Icon name='file outline'/>{edit?.file}</Message>
              ) : <Message><input type='file' onChange={(event) => setEdit({...edit,file:event.target.value})}/></Message>}
         </Item>
         <Item>
             <br></br>
             <strong>Services and projects</strong>
             {!props.isEditable ? (
              <Item.Description>{edit?.projects}</Item.Description>
             ) : <input value={edit?.projects} onChange={(event) => setEdit({...edit,projects:event.target.value})} />}
         </Item>
         <Item className='messages-content'>
             <br></br>
             <strong>Internal correspondants</strong>
             <Message className='panel-message'>
                 <Image src='https://i.pravatar.cc/39' avatar/>
                    {!props.isEditable ? (
                       <strong style={strongStyle}>{edit?.user1}</strong>
                    ): <input value={edit?.user1} onChange={(event) => setEdit({...edit, user1:event.target.value})}/>} 
                    <Link to="/profile"><Icon name='comment outline'/>Message</Link>{' '}
                    <Link to="/profile"><Icon name='user outline'/>Profile</Link>
             </Message>
             <Message className='panel-message'>
                 <Image src='https://i.pravatar.cc/40' avatar/>
                     {!props.isEditable ? (
                       <strong style={strongStyle}>{edit?.user2}</strong>
                    ): <input value={edit?.user2} onChange={(event) => setEdit({...edit, user2:event.target.value})}/>} 
                    <Link to ='/messages'><Icon name='comment outline'/>Message</Link>{' '}
                    <Link to='/profile'><Icon name='user outline'/>Profile</Link>
             </Message>
         </Item>
        </PanelContent>
    )   
}

