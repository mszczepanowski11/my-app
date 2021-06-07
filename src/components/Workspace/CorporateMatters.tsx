import React,{FC} from 'react'
import {SingleCard} from './SingleCard'
import {Card} from 'semantic-ui-react'
import styled from 'styled-components'


const CorporateMattersContent = styled.div`
    height:auto;
    padding:10px;
    background-color:#EDEDED;
    border:1px solid #000;
    border-radius:5px;
    
`
export const CorporateMatters:FC = () => {
    return(
        <CorporateMattersContent>
            <div>
                <header style={{fontSize:'16px',margin:'0 0 0 20px'}}>
                    Start working on corporate matters 
                    <span style={{float:'right',marginRight:'25px'}}>Hide</span>
                </header>
            </div>
            <Card.Group style={{margin:'15px 0 15px 10px'}}> 
                <SingleCard
                    icon='building'
                    watermark='building'
                    title='Explore your'
                    header='entities'
                    description='Take a few minutes to look at the most important elements and specificities of your entities'
                />
                <SingleCard
                    icon='sitemap'
                    watermark='sitemap'
                    title='Structure your'
                    header='ownership'
                    description='Get a clear view of the ownership by looking at the relations between the individuals and entities'
                />
                <SingleCard
                    icon='calendar alternate outline'
                    watermark='calendar alternate outline'
                    title='Define the'
                    header='calendar'
                    description='Get a clear view of the ownership by looking at the relations between the individuals and entities'
                />
            </Card.Group>
        </CorporateMattersContent>
    )
}