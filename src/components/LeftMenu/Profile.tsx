import React from 'react';
import styled from 'styled-components'

const Content = styled.div`
    width:220px;
    height:auto;
    overflow:hidden;
    margin:15px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
    border-radius:5px;
    outline:none;

`;


export default class Profile extends React.Component{

    state = {
        user:null,
        company:null
      }
  
        async componentDidMount() {
          const url = 'https://jsonplaceholder.typicode.com/users'
          const response = await fetch(url)
          const data = await response.json()
          this.setState({user:data[0].name, company:data[0].company.name})
      }
   render(){
    return(
        <Content>
            <img src="./icons/image.png" className="profilePhoto" alt="image1"/>
            <h4 style={{fontSize:'20px'}}>{this.state.user}</h4>
            <label>{this.state.company}</label>

            <hr></hr>

            <span className="YoursButtons">
                <img src="./icons/people.png" alt="people"/>Your network
                <button><img src="./icons/user-plus.png" alt="user-plus"/></button>
            </span>
            <span className="YoursButtons">
                <img src="./icons/publications.png" alt="people"/>Your publications
                <button><img src="./icons/plus.png" alt="user-plus"/></button>
            </span>
        </Content>
    
    )}
  }
