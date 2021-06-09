import React,{useState} from 'react'
import Pagination from '../common/ResumeYourWork/Pagination'
import {Card,Icon,Input,Dropdown} from 'semantic-ui-react'
import {useSelector} from 'react-redux'
import { IState } from '../../reducers/index';
import { IUsersReducer } from '../../reducers/usersReducer';
import { IPostsReducer } from '../../reducers/postsReducers';
import styled from 'styled-components'


const SingleUpdateContent = styled.div`
    postion:relative;
    margin-top:30px;
    height:auto;
`

export const SingleUpdate = () => {

    const [searchTerm,setSearchTerm] = useState('')
    const [currentPage,setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)

    const { usersList, postsList } = useSelector<IState, IUsersReducer & IPostsReducer>
        (globalState => ({
        ...globalState.users,
        ...globalState.posts,
    }));

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const posts = postsList.slice(indexOfFirstPost,indexOfLastPost)
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // eslint-disable-next-line array-callback-return
    const SingleUpdate = posts.filter((post,key) => {
        const displayPost = posts?.[key].title    

        if(searchTerm === "")
            return displayPost
        else if(displayPost.toLowerCase().includes(searchTerm.toLowerCase()))
            return displayPost
    }).map((post,key) => 
        <Card fluid style={{padding:'10px'}}>
            <Card.Header style={{color:'var(--text-color)',fontSize:'18px',marginBottom:'10px'}}>{posts[key]?.title}</Card.Header>
            <Card.Description>{posts[key]?.body}</Card.Description>
            <Card.Meta>
                <Icon style={{color:'rgb(57,138,39)'}} name='building'/> SAS • {' '}
                 <span>Updated 3 days ago by {usersList?.[posts?.[key]?.userId]?.name}</span>
            </Card.Meta>
        </Card>
         )
        return(
            <SingleUpdateContent>
              <div style={{display:'flex',flexDirection:'row',position:'relative',bottom:'60px'}}>
                 <header style={{fontSize:'25px'}}>Latest updates</header>
                 <div style={{position:'relative',left:'58%'}}>
                    <Input  
                        onChange={(event) => setSearchTerm(event.target.value)} 
                        size='mini' 
                        placeholder='Filter by title...'/>
                    <Dropdown text='Followed' style={{color:'var(--text-color)',marginLeft:'15px'}}/>
                </div>
              </div>
                    <Card.Group doubling>
                     {SingleUpdate}
                </Card.Group>
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={postsList.length}
                        paginate={paginate}
                    />
            </SingleUpdateContent>
        )
}
