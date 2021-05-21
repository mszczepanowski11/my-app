import React, {FC,Component} from 'react';
import styled from 'styled-components'
import MainPhoto from './MainPhoto'
import SinglePublication from './SinglePublication'
import {posts} from './LatestPublicationsData'
import './LatestPublicationsData'


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
const currentDate = date.getDate()+ ' ' + monthName[date.getMonth()] + ' ' + date.getFullYear();

export default class LatestPublications extends React.Component {
    
    state = {
        body:[],
        date:currentDate,
        author:[],
        image:[]
    }

    async componentDidMount() {
        const commentsUrl = 'https://jsonplaceholder.typicode.com/comments'
        const response = await fetch(commentsUrl)
        const data = await response.json()

        this.setState({
            body: data[0].body,
            author:data[0].email
        })
    }


    render(){

    return(
        <LatestPublicationsComponent>
            <MainPhoto>
            </MainPhoto>
                <header style={{fontSize:'30px',marginTop:'10px'}}>Latest Publications</header>

                <SinglePublication
                    publication={{
                        body:this.state.body, 
                        date:this.state.date,
                        image:posts[0].url,
                        avatar:'https://i.pravatar.cc/40',
                        author:this.state.author
                    }}
                />
                <SinglePublication
                    publication = 
                    {{ 
                        body:this.state.body,
                        date:this.state.date,
                        image:posts[1].url,
                        avatar:'https://i.pravatar.cc/40',
                        author:this.state.author
                    }}
                />
                <SinglePublication
                    publication = 
                    {{
                        body:this.state.body,
                        date:this.state.date,
                        image:posts[2].url,
                        avatar:'https://i.pravatar.cc/40',
                        author:this.state.author
                    }}
                />
                
                <a style={{display:'block',fontSize:'15px',marginTop:'10px'}} href='/publications'>See more publications</a>

        </LatestPublicationsComponent>
    );
  };
}

