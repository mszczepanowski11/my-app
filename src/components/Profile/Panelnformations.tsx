import React,{FC} from 'react';
import styled from 'styled-components'
import {Item,Image,Message,Icon} from 'semantic-ui-react'


const PanelContent = styled.div`
    margin:0 30px
`

const headerStyle = {
    opacity:'0.5'
}

const strongStyle = {
    marginRight:'40%'
}

export const PanelInformations:FC = () => {
    return(
        <PanelContent>
          <strong>Panel Informations</strong>
          <Item>
              <br></br>
              <Item.Header style={headerStyle}>Hourly fee</Item.Header>
              <Item.Description>610€/hour(Negociated)</Item.Description>
          </Item>
            <br></br>
         <Item>
              <Item.Header style={headerStyle}>Terms & conditions</Item.Header>
              <Item.Description>Monthly 10k€ retainer - see with Jeany Smith</Item.Description>
              <Message info><Icon name='file outline'/>Attachment_lorem_ipsum25425.jpg</Message>
         </Item>
         <Item>
             <br></br>
             <strong>Services and projects</strong>
             <Item.Description>Corporate M&A and international acquisitions</Item.Description>
         </Item>
         <Item>
             <br></br>
             <strong>Internal correspondants</strong>
             <Message>
                 <Image src='https://i.pravatar.cc/40' avatar/>
                 <strong style={strongStyle}>  Firstname Lastname</strong>
                    <a href="/profile"><Icon name='comment outline'/>Message</a>{'  '}
                    <a href="/profile"><Icon name='user outline'/>Profile</a>
             </Message>
             <Message>
                 <Image src='https://i.pravatar.cc/40' avatar/>
                 <strong style={strongStyle}>  Firstname Lastname</strong>
                    <a href="/profile"><Icon name='comment outline'/>Message</a>{'  '}
                    <a href="/profile"><Icon name='user outline'/>Profile</a>
             </Message>
         </Item>
        </PanelContent>
    )
}

