import React,{FC,useState} from "react"
import {useSelector} from 'react-redux'
import { IState } from '../../../reducers/index';
import { IUsersReducer } from '../../../reducers/usersReducer';
import { IPostsReducer } from '../../../reducers/postsReducers';
import Pagination from './Pagination'
import styled from 'styled-components'
import {Card,Icon,Input,Dropdown} from 'semantic-ui-react'


const Content = styled.div`
    position:absolute;
    top:110%;
    right:3%;
    width:1120px;
    max-height:1024px;
`

const ResumeYourWork : FC = () => {

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

    const SingleResume = posts.filter((post,key) => {
        const displayPost = posts?.[key].title    

        if(searchTerm === "")
            return displayPost
        else if(displayPost.toLowerCase().includes(searchTerm.toLowerCase()))
            return displayPost
    }).map((post,key) => 

     <Card style={{width:'1100px',margin:'15px'}}>
        <Card.Content>
               <Card.Header style={{color:'var(--text-color)'}}>
                   {posts[key]?.title}
                </Card.Header>
               <Card.Description>{posts[key]?.body}</Card.Description>
               <Card.Meta style={{paddingRight:'10px'}}>
                  <Icon  name='world'/> Subsid.Corp • {' '}
                  <Icon style={{margin:'5px'}} name='file outline'/> Client contract • {' '}
                  <span>Updated 3 days ago by {usersList?.[posts?.[key]?.userId]?.name}</span>
               </Card.Meta>
        </Card.Content>
     </Card>
    )

    return(
             <Content>
                <Input style={{left:'70%'}}
                       placeholder='Filter by title...' 
                       className='search'
                       onChange={(event) => setSearchTerm(event.target.value)}
                       />
                <Dropdown style={{left:'72%',color:'var(--text-color)'}} text='Followed'>
                    <Dropdown.Menu>
                        <Dropdown.Item>All</Dropdown.Item>
                        <Dropdown.Item>Main</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <header style={{fontSize:'30px',margin:'20px',paddingBottom:'15px'}}>Resume your work</header>
                 <Card.Group doubling>
                     {SingleResume}
                </Card.Group>
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={postsList.length}
                        paginate={paginate}
                    />
             </Content>
       )
}

export default ResumeYourWork