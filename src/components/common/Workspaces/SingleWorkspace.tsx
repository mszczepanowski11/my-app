import React from 'react';
import { Card, Image,Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import 'semantic-ui-css/semantic.min.css'


const HeaderImage = styled.div`
position:relative;
bottom:40px;
left:5%;
background-color:white;
border-radius:2px;
padding:10px;
float:left;
box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);

`
const SingleWorkspaceContent = styled.div`
    margin-right:15px;
`

const SingleWorkspace = (props) => {

    return(
        <SingleWorkspaceContent>
            <Card  as={Link} to='/workspace' style={{display:'inline-block',margin:'10px',color:'gray'}}>
                <Image 
                    style={{width:'280px',height:'140px'}} 
                    src={props.workspace.image} />
                        <HeaderImage>
                            <Icon  
                                size='huge' 
                                name={props.workspace.headerImage} 
                                alt="single_workspace_icon"/>
                        </HeaderImage>
                <Card.Content extra>
                    <Card.Header  
                        style={{fontSize:'15px',textAlign:'right'}}>
                        {props.workspace.header}
                    </Card.Header>
                    <Image src={props.workspace.icon} />
                    <Card.Meta style={{position:'absolute',float:'left',marginRight:'10px'}}>
                       <Icon name={props.workspace.metaIcon}/>
                        {props.workspace.meta}  
                        <Card.Content style={{fontSize:'12px'}} extra>{props.workspace.extra} </Card.Content>
                    </Card.Meta>
                </Card.Content>
            </Card>
         </SingleWorkspaceContent>
    )
}
  
export default SingleWorkspace