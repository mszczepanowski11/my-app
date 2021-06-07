import React, {FC} from 'react';
import {useSelector} from 'react-redux'
import { IState } from '../../../reducers/index';
import { IUsersReducer } from '../../../reducers/usersReducer';
import { IPhotosReducer } from '../../../reducers/photosReducer';
import { IPostsReducer } from '../../../reducers/postsReducers';
import styled from 'styled-components'
import MainPhoto from './MainPhoto'
import SinglePublication from './SinglePublication'


const LatestPublicationsComponent = styled.div`
    position:absolute;
    top:8%;
    left:20%;
    width:1100px;
    max-height:370px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
    padding-right:5px;
    border-radius:5px;
`;

const monthName:string[] = [ 
    "January","February", "March",
    "April", "May", "June",
    "July", "August", "September", 
    "October", "November", "December"
];

const date = new Date();
export const currentDate = date.getDate()+ ' ' + monthName[date.getMonth()] + ' ' + date.getFullYear();

 const LatestPublications:FC = () => {

    const { usersList, photosList, postsList } = useSelector<IState, IUsersReducer & IPhotosReducer &
    IPostsReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos,
        ...globalState.posts,
    }));


    return(
        
        <LatestPublicationsComponent>
            {console.log(usersList)}
            <MainPhoto>
            </MainPhoto>
                <header style={{fontSize:'30px',marginTop:'10px'}}>Latest Publications</header>

                <SinglePublication
                    publication={{
                        body:postsList?.[0]?.body,
                        date:currentDate,
                        image:photosList?.[0]?.url,
                        avatar:photosList?.[0]?.thumbnailUrl,
                        author:usersList?.[0]?.name
                    }}
                />
                 <SinglePublication
                    publication={{
                        body:postsList?.[4]?.body,
                        date:currentDate,
                        image:photosList?.[1]?.url,
                        avatar:photosList?.[1]?.thumbnailUrl,
                        author:usersList?.[1]?.name
                    }}
                />
                 <SinglePublication
                    publication={{
                        body:postsList?.[2]?.body,
                        date:currentDate,
                        image:photosList?.[2]?.url,
                        avatar:photosList?.[2]?.thumbnailUrl,
                        author:usersList?.[2]?.name
                    }}
                />
                <a style={{color:'rgb(26,37,135)',display:'block',fontSize:'15px',marginTop:'10px'}} href='/publications'>See more publications</a>

        </LatestPublicationsComponent>
    );
  };

export default LatestPublications