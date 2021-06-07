import React, {FC} from 'react'
import ExpandedMenu from './ExpandedMenu'
import './TopNav.scss'
import styled from 'styled-components'
import {Form,FormControl,Navbar} from 'react-bootstrap'
import {Link} from "react-router-dom";


const RightIcons = styled.div``; 


const TopNav:FC = () => {
    

    return(
          <Navbar className="TopNav" bg="light">
            <Navbar.Collapse id="basic-navbar-nav">
              <Link to="/">
              <Navbar.Brand>
                <img
                  src="icons/house2.png"
                  className="d-inline-block align-top"
                  alt="Home"
                />{'  '} Home
              </Navbar.Brand>
            </Link>

              <ExpandedMenu>
              </ExpandedMenu>

              </Navbar.Collapse>
                <Form inline className="Search">
                  <FormControl type="text" placeholder="Search Legalcluster"/>
                </Form>
 
          <RightIcons className="rightIcons">
              <Link to="/"><img src="./icons/house.png" alt="publications"/></Link>
              <img src="icons/comments.png" alt="comments"/>
              <img src="icons/bell.png" alt="bell"/>
          </RightIcons>
        </Navbar>
    );
};

export {TopNav};

