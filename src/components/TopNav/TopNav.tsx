import React, {FC} from 'react'
import ExpandedMenu from './ExpandedMenu'
import './TopNav.scss'
import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components'
import {Button,Form,FormControl,Navbar} from 'react-bootstrap'


const RightIcons = styled.div``; 

const TopNav : FC = () => {
    return(
          <Navbar className="TopNav" bg="light">
            <Navbar.Collapse id="basic-navbar-nav">
              <Navbar.Brand href="#home">
                <img
                  src="icons/house2.png"
                  className="d-inline-block align-top"
                  alt="Home"
                />{'  '} Home
              </Navbar.Brand>

              <ExpandedMenu>
              </ExpandedMenu>

              </Navbar.Collapse>
              
                <Form inline className="Search">
                  <FormControl type="text" placeholder="Search Legalcluster"/>
                </Form>
 
          <RightIcons className="rightIcons">
              <img src="icons/house.png" alt="house"/>
              <img src="icons/comments.png" alt="comments"/>
              <img src="icons/bell.png" alt="bell"/>
          </RightIcons>
        </Navbar>
    );
};

export {TopNav};

