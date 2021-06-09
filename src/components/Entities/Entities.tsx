/* eslint-disable array-callback-return */
import React,{FC,useState} from 'react';
import {useSelector} from 'react-redux'
import {IState} from '../../reducers/index'
import { IPhotosReducer } from '../../reducers/photosReducer';
import _ from 'lodash'
import {EntitiesData} from './EntitiesData'
import {Button,Card,Dropdown,Input,Icon,Image} from 'semantic-ui-react'
import styled from 'styled-components'
import './styles.scss'


const EntitiesContent = styled.div`
    position:absolute;
    top:7%;
    right:2%;
    padding:10px;
    background-color:white;
`

const EntitiesTopBar = styled.div`
    position:relative;
    bottom:25px;
`

const EntitiesRightSide = styled.div`

   text-align:right;
`

const EntitiesLeftSide = styled.div`
   position:relative;
   top:37px;
   text-align:left; 
`

const followedDropdownStyle ={
    color:'rgb(26,37,135)',
    padding:'9px',
    marginLeft:'15px',
    marginRight:'2px',
    border:'1px solid rgb(44,56,147)',
    borderRadius:'4px'
}

export const Entities:FC = () => {

    const {photosList} = useSelector<IState,IPhotosReducer>(globalState => ({
        ...globalState.photos,
    }));

    const [width] = useState('1000px')
    const [boxShadow] = useState('0px 0px 2px 0px rgba(0,0,0,0.75)')
    const [border] = useState('5px')

    const [searchTerm,setSearchTerm] = useState("")
    const [active,setActive] = useState(1)
    const [copied, setCopied] = useState(false);
    const [clicked,isClicked] = useState(true)
    
    const setView = active => {
        setActive(active)
    }

    const setClicked = () => {
        isClicked(!clicked)
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
        
        <EntitiesContent style={clicked ? {width:width,boxShadow:boxShadow,borderRadius:border} : {width:'1400px',boxShadow:'none',borderRadius:'none'}}>
            <h2><strong>Entities </strong><Icon name='setting'/></h2>
            <EntitiesTopBar>
                <EntitiesLeftSide>
                    <div className='entities-filters-content'>
                        <div className='filter-all-content'> 
                            <Icon name='dot circle outline'/>
                              <Dropdown text='All'/> 
                        </div> 
                        <Icon name='ellipsis horizontal'/> {' '}|
                        <Icon fitted name='sort alphabet down'>{' '}Sort</Icon>
                        <Dropdown icon='filter' text='Filter'>
                        <Dropdown.Menu>                       
                                 <header style={{padding:'10px',color:'gray'}}>Rows ale filtered by the followig conditons starting from the top</header> 
                                   <div className='filter-all-content-after'> 
                                      <div>
                                          <Icon name='cancel'/>Where
                                          <Dropdown text='Company'/>
                                          <Dropdown text='Contains'/>
                                          <Input size='mini' placeholder='Type..'/>
                                      </div>
                                      <div>
                                         <Icon name='cancel'/>Where
                                         <Dropdown text='Status'/>
                                         <Dropdown text='Is'/>
                                         <Input size='mini' placeholder='Type..'/>
                                         <Dropdown text='In'/>
                                         <Input size='mini' placeholder='Entity..'/>
                                      </div>
                                      <div>
                                         <Icon name='cancel'/>And
                                         <Dropdown style={{marginLeft:'35px'}} text='Status'/>
                                         <Dropdown text='Ends before'/>
                                         <Input size='mini' placeholder='Date..'/>
                                         <Dropdown text='In'/>
                                         <Input size='mini' placeholder='Entity..'/>
                                      </div>
                                      <div style={{color:'rgb(44,56,147)'}}>
                                          <Icon name='plus'/>Add filter
                                          <Dropdown text='choose property'/>
                                      </div>                 
                                   </div>
                               </Dropdown.Menu>
                        </Dropdown>
                        <Icon onClick={setClicked} name='expand arrows alternate'/> 
                        {console.log(clicked)}
                    |   <Icon fitted onClick={shareURL} name='share'>{' '}{!copied ? 'Share' : 'Copied!'}</Icon>
                    </div>
                </EntitiesLeftSide>
            <EntitiesRightSide>
                <Button.Group className='mosaic'>
                    <Button
                        color='blue'
                        onClick={() => setView(1)}>
                        <Icon name='th'/>Mosaic
                    </Button>
                    <Button 
                        icon 
                        onClick={() => setView(2)}>
                        <Icon name='align justify' />
                    </Button>
                </Button.Group>
                <Input 
                 icon='search'
                 placeholder='Search...'
                 onChange={event => {setSearchTerm(event.target.value)}}
                />
            <Dropdown style={followedDropdownStyle} clasName='dropdown' text="Followed">
             <Dropdown.Menu>
               <Dropdown.Item>All</Dropdown.Item>
               <Dropdown.Item>Main</Dropdown.Item>
             </Dropdown.Menu>
            </Dropdown>
            </EntitiesRightSide>
         </EntitiesTopBar> 

            {EntitiesData.filter((value) => {
               if(searchTerm === ""){
                   return value.header
               } else if(value.header.toLowerCase().includes(searchTerm.toLowerCase())){
                   return value.header
               }
            })
            .map((value,key) => {
                return(
                    <>
                        {active === 1  ? 
                            <Card.Group itemsPerRow={3}>
                                {_.times(6,() => (
                                    <Card>
                                        <Card.Content>
                                            <Image style={{marginBottom:'0',borderRadius:'5px'}}
                                                size='tiny'
                                                floated='left'
                                                src={photosList?.[key * 2]?.thumbnailUrl}
                                            />  
                                                <Card.Header style={{color:'rgb(44,56,137)'}}>{value.header}</Card.Header>
                                                <span style={{display:'block',marginTop:"15px",textAlign:'left'}}>{value.description}</span>
                                        </Card.Content>
                                    </Card>     
                                ))} 
                            </Card.Group>
                            
                            :  
                            
                            <Card.Group itemsPerRow={1}>
                                {_.times(6,() => (
                                  <Card>
                                    <Card.Content>
                                        <Image style={{marginBottom:'0',borderRadius:'5px'}}
                                            size='tiny'
                                            floated='left'
                                            src={photosList?.[key * 2]?.thumbnailUrl}
                                        />  
                                            <Card.Header style={{color:'rgb(44,56,137)'}}>{value.header}</Card.Header>
                                            <span style={{display:'block',marginTop:"35px",textAlign:'left'}}>{value.description}</span>
                                    </Card.Content>
                              </Card>     
                                ))}
                            </Card.Group>
                         }
                    </>
                 )
            })}
        </EntitiesContent>
    )
}

export default Entities