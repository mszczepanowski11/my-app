import React,{FC,CSSProperties} from 'react';
import {useSelector} from 'react-redux'
import { IState } from '../../../reducers/index';
import { IPostsReducer } from '../../../reducers/postsReducers';
import { IUsersReducer } from '../../../reducers/usersReducer';
import {currentDate} from './LatestPublications'


const labelStyle = {
  
  display:'inline',
  position:'absolute',
  top:'60%',
  heigh:'auto',
  color:'white',
  margin:'10px',
  inlineSize:'350px',
  textAlign:'left',
  fontSize:'15px',

} as CSSProperties


  
const MainPhoto : FC = (props) => {

  const {postsList,usersList } = useSelector<IState,IPostsReducer & IUsersReducer>
    (globalState => ({
        ...globalState.posts,
        ...globalState.users,
        ...globalState.photos
    }));

  return(
    <div>
      <label 
        style={labelStyle}>{postsList?.[4]?.body}...and one more line for the demo
        <span style={{display:'inline-block',marginTop:'15px'}}>
          {currentDate}
          {' '}
          {' '}
          {usersList?.[5]?.name}
        </span>
      </label> 
       <img style={{height:'370px',width:'450px',float:'left',marginRight:'10px'}} src='./icons/skyscraper.jpeg' alt=""></img>
    </div>
  )
}

export default MainPhoto