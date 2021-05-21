import React,{FC} from "react"
import styled from 'styled-components'
import {Card,Input,Icon,Dropdown,Pagination} from 'semantic-ui-react'
import {SingleResumeProps,WorldCompanyResume} from './SingleResume'

const Content = styled.div`
    position:absolute;
    top:105%;
    left:20%;
    width:1100px;
`

const ResumeYourWork : FC = () => {
    return(
        <Content>
            <Input style={{left:'70%'}} icon='search' placeholder='Filter by title...'className='search'/>
            <Dropdown style={{left:'72%',color:'#007bff'}} text='Followed'>

            </Dropdown>
            <header style={{fontSize:'30px',margin:'20px',paddingBottom:'15px'}}>Resume your work</header>
            <Card.Group doubling>   
                <WorldCompanyResume/>
                <SingleResumeProps/>
                <SingleResumeProps/>
                <SingleResumeProps/>
                <SingleResumeProps/>
                <SingleResumeProps/>
                <SingleResumeProps/>
                <SingleResumeProps/>
                <SingleResumeProps/>
            </Card.Group>
            
            <Pagination style={{margin:'25px 0 25px 23%'}}
                defaultActivePage={5}
                ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                prevItem={{ content:'Previous', icon: true }}
                nextItem={{ content: 'Next', icon: true }}
                totalPages={18}
            />
        </Content>
    )
}

export default ResumeYourWork