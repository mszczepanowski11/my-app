import React,{FC,useState} from 'react'
import {Link } from 'react-router-dom';
import {Dropdown,Input,Image,Icon} from 'semantic-ui-react'
import data from './menu_data.json'


const ExpandedMenu:FC = () => {

  const [searchTerm,setSearchTerm] = useState('');

  const renderMenuItems = data => {      
      return data.options.filter((item) => {
        if(searchTerm === "") {
            return item
        } else if(item.text.toLowerCase().includes(searchTerm.toLowerCase())){
          return item
        }
        }).map((item) => {
          return(
            <Dropdown.Item
               as={Link} to={item.path}
               {...item} />   
        )})
      }
        return(
          <Dropdown style={{marginLeft:'35px'}}>
             <Dropdown.Menu>
               <Dropdown.Header icon='building' content='Corporate' />
               <Input onClick={e => e.stopPropagation()} onChange={(event) => setSearchTerm(event.target.value)} placeholder='Filter...' icon='search' iconPosition='left' className='search' />
             <Dropdown.Menu scrolling>
             <Dropdown.Header>Platform</Dropdown.Header>
              {renderMenuItems(data)}
            </Dropdown.Menu> 
            
            <Dropdown.Divider/>
              <Dropdown.Header>Account</Dropdown.Header>
              <Dropdown.Item>
                    <Image style={{float:'left',marginTop:'1px'}} avatar src="https://i.pravatar.cc/40"/>
                    <header>Leanne Graham</header>   
                    <Link to='/profile'><span>See profile</span></Link>
                </Dropdown.Item>
              <Dropdown.Item><Icon name='lock'/><Link to='/privacy'>Privacy</Link></Dropdown.Item>
              <Dropdown.Item><Icon name='settings'/><Link to='/settings'>Settings</Link></Dropdown.Item>
              <Dropdown.Divider/>
              <Dropdown.Item style={{textAlign: 'center',marginRight:'10px'}}><Icon name='log out'/>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    )
}

export default ExpandedMenu
