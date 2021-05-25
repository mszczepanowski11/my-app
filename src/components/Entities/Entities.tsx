import React,{FC,useState} from 'react';
import _ from 'lodash'
import EntitiesData from './EntitiesData'
import {Button,Message,Card,Dropdown,Input,Icon} from 'semantic-ui-react'
import styled from 'styled-components'
import './styles.scss'


const EntitiesContent = styled.div`
    position:absolute;
    top:10%;
    right:3%;
    width:1000px;
`

const EntitiesTopBar = styled.div`
    
`

const EntitiesRightSide = styled.div`
   
`

const EntitiesLeftSide = styled.div`
  
`

export const Entities:FC = () => {

    const [searchTerm,setSearchTerm] = useState("")
    const [active,setActive] = useState(1)
    const [copied, setCopied] = useState(false);
    
    const setView = active => {
        setActive(active)
    }

    const shareURL = () => {
        const el = document.createElement('input')
        el.value = window.location.href
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
        setCopied(true)
    }

    return(
        <EntitiesContent>
            <EntitiesTopBar>
                <EntitiesLeftSide>
                    <Button icon><Icon name='sort alphabet down'/> Sort</Button>
                    <Button icon><Icon name='filter'/> Filters</Button>
                    <Button icon='sort'/>
                    <Button 
                        icon 
                        onClick={shareURL}>
                        <Icon name='share'/>{' '}
                        {!copied ? 'Share' : 'Copied!'}
                    </Button>
                </EntitiesLeftSide>
            <EntitiesRightSide>
                <Button.Group style={{marginRight:'10px'}} className='mosaic'>
                    <Button 
                        color='blue' 
                        onClick={()=> setView(1)}>
                        <Icon name='th'/>Mosaic
                    </Button>
                    <Button 
                        icon 
                        onClick={()=> setView(2)}>
                        <Icon name='align justify' />
                    </Button>
                </Button.Group>
                <Input 
                 icon='search'
                 placeholder='Search...'
                 onChange={event => {setSearchTerm(event.target.value)}}
                />
            <Dropdown clasName='dropdown' text="Followed"/>
            </EntitiesRightSide>
         </EntitiesTopBar>

            {EntitiesData.filter((value) => {
               if(searchTerm === ""){
                   return value.header
               } else if(value.header.toLowerCase().includes(searchTerm.toLowerCase())){
                   return value.header
               }
            })
            .map((value) => {
                return(
                    <>
                        {active === 1  ? <Card.Group itemsPerRow={3}>
                            {_.times(3,() => (
                                <Card><Message {...value}/></Card>   
                            ))} 
                        </Card.Group>
                        :
                        <Card.Group itemsPerRow={1}>
                            {_.times(3,() => (
                                <Card><Message {...value}/></Card>   
                            ))}
                        </Card.Group>}
                    </>
                 )
            })}
        </EntitiesContent>
    )
}

