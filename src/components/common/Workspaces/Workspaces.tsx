import React from 'react'
import styled from 'styled-components'
import SingleWorkspace from './SingleWorkspace'
import {Card} from 'semantic-ui-react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'semantic-ui-css/semantic.min.css'


const WorkspacesContent = styled.div`
    position:absolute;
    top:60%;
    width:1120px;
    height:400px;
    right:3%;
`
const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
};

export default class Workspaces extends React.Component {

    render() {
        
     return (
       <WorkspacesContent>
           <header style={{fontSize:'30px',margin:'20px'}}>Workspaces</header>
           <Slider {...settings}>
             <SingleWorkspace
                    workspace={{
                        image:'./icons/client_contract.jpeg',
                        header:'Client Contract',
                        headerImage:'edit outline',
                        meta:'Contract ・ 150 users',
                        metaIcon:'edit outline',
                        extra:'Last updated 2 days ago'
                    }}
                />
             <SingleWorkspace
                    workspace={{
                        image:'./icons/client_contract.jpeg',
                        header:'Supplier Contract',
                        headerImage:'edit outline',
                        meta:'Contract ・ 25 users',
                        metaIcon:'edit outline',
                        extra:'Last updated 2 days ago'
                    }}
                />
                 <SingleWorkspace
                    workspace={{
                        image:'./icons/corporate.jpeg',
                        header:'Corporate',
                        headerImage:'building',
                        meta:'Corporate ・ 25 users',
                        metaIcon:'building',
                        extra:'Last updated 2 days ago'
                    }}
                />
                 <SingleWorkspace
                    workspace={{
                        image:'./icons/skyscraper.jpeg',
                        header:'Group norms',
                        headerImage:'book',
                        meta:'Norms ・ 25 users',
                        metaIcon:'book',
                        extra:'Last updated 2 days ago'
                    }}
                />
                <SingleWorkspace
                    workspace={{
                        image:'./icons/client_contract.jpeg',
                        header:'Real estate contract',
                        headerImage:'edit outline',
                        meta:'Contract ・ 25 users',
                        metaIcon:'edit outline',
                        extra:'Last updated 2 days ago'
                    }}
                />
             {/* <div><img src='https://picsum.photos/200'alt="Credit to Igor Ovsyannykov on Unsplash"/></div>
             <div><img src='https://picsum.photos/200' alt="Credit to Pierre Châtel-Innocenti on Unsplash"/></div>
             <div><img src='https://picsum.photos/200' alt="Credit to Richard Nolan on Unsplash"/></div>
             <div><img src='https://picsum.photos/200' alt="Credit to Cristina Gottardi on Unsplash"/></div> */}
              </Slider>
          </WorkspacesContent>
      )
   }
}


 