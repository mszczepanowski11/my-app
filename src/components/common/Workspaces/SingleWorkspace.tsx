import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import styled from 'styled-components'
import 'semantic-ui-css/semantic.min.css'


const SingleWorkspace = (props) => {
   
    const HeaderImage = styled.div`
        position:relative;
        bottom:15%;
        left:5%;
        width:auto;
        background-color:white;
        border-radius:2px;
        display:inline-block;
        padding:5px;
        float:left;
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);

    `


    return(
        
            <Card link style={{display:'inline-block'}} fluid>
                <Image src={props.workspace.image} />
                <HeaderImage>
                        <img  src={props.workspace.headerImage} alt="single_workspace_icon"></img>
                    </HeaderImage>
                <Card.Content extra>
                    <Card.Header style={{fontSize:'20px',textAlign:'right'}}>{props.workspace.header}
                    </Card.Header>
                    <Image src={props.workspace.icon} />
                    <Card.Meta style={{textAlign:'left'}}>
                        {props.workspace.meta}  
                        <Card.Content style={{fontSize:'12px'}} extra>{props.workspace.extra} </Card.Content>
                    </Card.Meta>
                </Card.Content>
            </Card>
    )
}
  
export default SingleWorkspace