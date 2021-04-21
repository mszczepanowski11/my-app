import React, {FC} from 'react'
import {Input,Dropdown } from 'semantic-ui-react'
import styled from 'styled-components'
import 'semantic-ui-css/semantic.min.css'

// const options = [

//     { key: 'home', icon: 'edit', text: 'Home'},
//     { key: 'publications', icon: 'delete', text: 'Publications'},
//     { key: 'people', icon: 'hide', text: 'People'},
//     { key: 'entities', icon: 'edit', text: 'Entities'},
//     { key: 'administration', icon: 'delete', text: 'Administration'},

//     { key: 'client_contract', image:'./icons/house.png', text: 'Client Contract'},
//     { key: 'supplier_contract', icon: 'edit', text: 'Supplier Contract'},
//     { key: 'corporate', icon: 'delete', text: 'Corporate'},
//     { key: 'group_norms', icon: 'hide', text: 'Group Norms'},
//     { key: 'real_estate', icon: 'hide', text: 'Real Estate Contract'},
//  ]

const StyledDropdown = styled(Dropdown)({
    fontSize:'15px;'
});

// const user = {

//         key:  'Jeanne-Marie',
//         text: 'Jeanne-Marie',
//         value:'Jeanne-Marie',
//         image: "./icons/image.png" 
// };

const ExpandedMenu : FC =  () => (

     <StyledDropdown>
            <Dropdown.Menu selection>
             <Dropdown.Header>Corporate</Dropdown.Header>
                <Input icon='search' iconPosition='left' className='search' />
                    <Dropdown.Header>Platform</Dropdown.Header>
                    <Dropdown.Item image='./icons/house.png' text='Home' />
                    <Dropdown.Item image='./icons/publications.png'text='Publications'/>
                    <Dropdown.Item image='./icons/people.png' text='People'/>
                    <Dropdown.Item image='./icons/entities2.png' text='Entities'/>
                    <Dropdown.Item image='./icons/administration.png' text='Administration'/>
                    
                    <Dropdown.Header>Workspaces</Dropdown.Header>
                    <Dropdown.Item icon='folder' text='Client Contract' />
                    <Dropdown.Item icon='folder' text='Supplier Contract' />
                    <Dropdown.Item image='./icons/entities.png' text='Corporate' />
                    <Dropdown.Item text='Group Norms' />
                    <Dropdown.Item text='Real Estate Contract' />
                    <Dropdown.Divider></Dropdown.Divider>
                    <Dropdown.Header>Account</Dropdown.Header>

                    <Dropdown.Item>
                    {/* {user} */}
                    {/* <a href="/profile">See profile</a>  <Link to> */}
                    </Dropdown.Item>
                    
                    <Dropdown.Item image='./icons/privacy.png' text='Privacy' />
                    <Dropdown.Item image='./icons/settings.png' text='Settings' />

            </Dropdown.Menu>
   </StyledDropdown>
)

export default ExpandedMenu

