import React from 'react'
import {Card,Icon,Image} from 'semantic-ui-react'
import styled from 'styled-components'

const SingleHoldingContent = styled.div`
    margin-bottom:25px;
`

export const SingleHolding = (props) => {
    return(
        <SingleHoldingContent>
             <Card fluid>
                <Image style={{height:'195px'}} src={props.image}/>
                    <Card.Content>      
                        <Icon size='huge' style={{float:'left',color:'gray',marginRight:'10px'}} name={props.headerImage as any} />
                        <Card.Header>{props.header} holdings</Card.Header>

                        <Icon 
                            size='large'
                            style={{position:'absolute',right:'2%',top:'70%'}} 
                            name='setting'/>
                        <span style={{display:'block',margin:'10px 0 0 0'}}>
                            Workspace purpose and a bit of content.This much needed description is here to remind people
                            where they are, if they are new or have poor memory.
                        </span>
                    </Card.Content>
             </Card>
        </SingleHoldingContent>
    )
}