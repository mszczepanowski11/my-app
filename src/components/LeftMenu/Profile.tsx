import React, {FC} from 'react';
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
 
const Profile:FC = () => {
    return(
        <Content>
            <img src="./icons/image.png" className="profilePhoto" alt="image1"/>
            <h4>Humberta Swift</h4>
            <label>Job - title company</label>

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

export default Profile