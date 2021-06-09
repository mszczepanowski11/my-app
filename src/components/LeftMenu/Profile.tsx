import React, { FC } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import { IState } from '../../reducers/index';
import { IUsersReducer } from '../../reducers/usersReducer';
import {IPhotosReducer} from '../../reducers/photosReducer'

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
    const { usersList,photosList } = useSelector<IState,IUsersReducer & IPhotosReducer>
    (globalState => ({
        ...globalState.users,
        ...globalState.photos
    }));

    return(
        <Content>
            <Link to='/profile'>
                <img src={photosList?.[1]?.thumbnailUrl} className="profilePhoto" alt="image1"/>
                <h4 style={{fontSize:'20px'}}>{usersList?.[1]?.name}</h4>
                <label style={{textAlign:'center',color:'black',cursor:'pointer'}}>{usersList?.[1]?.company?.name}</label>
            </Link>

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
    
    )
}

  export default Profile