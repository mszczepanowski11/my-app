import React from 'react'
import {Card,Icon} from 'semantic-ui-react'
import styled from 'styled-components'

const SingleCorporateContent = styled.div`
    padding:10px
`

export const SingleCard = (props) => {
    return(
        <SingleCorporateContent>
                <Card style={{padding:'10px'}}>
                    <Icon  size='massive' name={props.watermark} style={{position:'absolute',opacity:'0.1',color:'var(--text-color)',right:'5%'}}/>
                    <Icon style={{color:'var(--text-color)'}} size='big' name={props.icon}/>
                    <Card.Header style={{fontSize:'18px',padding:"5px 0 10px 0"}}>{props.title} <strong>{props.header}</strong> </Card.Header>
                    <Card.Description style={{fontSize:'14px',padding:'3px 0 0 0'}}>
                       {props.description}
                    </Card.Description>
                </Card>
        </SingleCorporateContent>
    )
    
}