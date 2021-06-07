import React from 'react'
import styled from 'styled-components'
import SingleWorkspace from './SingleWorkspace'
import {WorkspacesData} from './WorkspacesData'
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

const Workspaces = () => {

     return (
       <WorkspacesContent>
           
           <header style={{fontSize:'30px',margin:'20px'}}>Workspaces</header>
           <Slider {...settings}>
            {WorkspacesData.map((workspace) => {
                return(
                      <SingleWorkspace 
                            workspace={{
                                url:workspace.url,
                                image:workspace.image,
                                header:workspace.header,
                                headerImage:workspace.headerImage,
                                meta:workspace.meta,
                                metaIcon:workspace.metaIcon,
                                extra:workspace.extra,
                          }}
                      />
                  )})}  
              </Slider>
          </WorkspacesContent>
      )
   }

export default Workspaces
 