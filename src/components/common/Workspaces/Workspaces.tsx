import React from 'react'
import styled from 'styled-components'
import SingleWorkspace from './SingleWorkspace'
import {Card} from 'semantic-ui-react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Content = styled.div`
    position:absolute;
    top:60%;
    max-width:1100px;
    max-height:250px;
    margin:auto;
    left:20%;
`

export default class Workspaces extends React.Component {
   

    render() {
     
     return(
       <Content>
           <header style={{fontSize:'30px',margin:'20px'}}>Workspaces</header>
              <Card.Group itemsPerRow='4'>
                <SingleWorkspace
                    workspace={{
                        image:'https://picsum.photos/700/400',
                        header:'Client Contract',
                        headerImage:'./icons/contract3.png',
                        meta:'Contract ・ 150 users',
                        extra:'Last updated 2 days ago'
                    }}
                />
                <SingleWorkspace
                    workspace={{
                        image:'https://picsum.photos/700/400',
                        header:'Supplier contract',
                        headerImage:'./icons/contract3.png',
                        meta:'Contract ・ 25 users',
                        extra:'Last updated 2 days ago'
                    }}
                />
                 <SingleWorkspace
                    workspace={{
                        image:'https://picsum.photos/700/400',
                        header:'Corporate',
                        headerImage:'./icons/job.png',
                        meta:'Contract ・ 25 users',
                        extra:'Last updated 2 days ago'
                    }}
                />
                 <SingleWorkspace
                    workspace={{
                        image:'https://picsum.photos/700/400',
                        header:'Group norms',
                        headerImage:'./icons/book.png',
                        meta:'Contract ・ 25 users',
                        extra:'Last updated 2 days ago'
                    }}
                />
              </Card.Group>
          </Content>
      )
   }
}


 