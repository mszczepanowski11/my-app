import React from 'react'
import '@progress/kendo-theme-default/dist/all.css';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { filterBy } from '@progress/kendo-data-query';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const options = [

     { text:'Publications',path:'/publications'},
     { text: 'Entities'},
     { image:'./icons/administration.png', key: 'administration',  text: 'Administration'},
     { key: 'client_contract', text: 'Client Contract'},
     { key: 'supplier_contract',  text: 'Supplier Contract'},
     { image:'./icons/entities.png', key: 'corporate', text: 'Corporate'},
     { key: 'group_norms', text: 'Group Norms'},
     { key: 'account', text: 'Account'},
     { image:'./icons/privacy.png',key: 'privacy', text: 'Privacy'}, 
     { image:'./icons/settings.png', key: 'settings', text: 'Settting'},
     { image:'./icons/logout.png',key: 'logout', text: 'Logout'},
 ];

export default class ExpandedMenu extends React.Component {

 state = {data:options}
 filterChange = (event) => { 
   this.setState({
     data:this.filterData(event.filter)
   })
 }
 filterData(filter) {
    const data = options
    return filterBy(data,filter)
 }

  render(){
     return(
      <Router>
        <div>
          <DropDownList

                data={this.state.data}
                textField="text"
                filterable={true}
                onFilterChange={this.filterChange}
            />
          </div>
      </Router> 
    )
  }    
}                                                                                                                                                                                                   
