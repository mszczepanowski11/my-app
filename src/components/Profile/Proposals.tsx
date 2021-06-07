import React,{FC,useState} from 'react'
import styled from 'styled-components'
import {Table} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {currentDate} from '../common/LatestPublications/LatestPublications'
import './style.scss'


const ProposalsContent = styled.div`
    padding:30px
`

interface IEditable {
    isEditable?:boolean
}

export const Proposals:FC<IEditable> = (props) => {

    const [startDate, setStartDate] = useState(new Date());
    const [edit,setEdit] = useState({
        name_one:'Operation Ti...',
        name_two:'Op.Prometh',
        name_three:'Op.Latandre',

        entity_one:'Renault HQ',
        entity_two:'Renault.Br..',
        entity_three:'Renault.Co',

        location_one:'France',
        location_two:'USA',
        location_three:'Italia',

        expertise_one:'#Tax',
        expertise_two:'M&A',
        expertise_three:'#Social',

        date:JSON.stringify(currentDate),

        firm_one:'France',
        firm_two:'USA',
        firm_three:'Italia',
    })

    return(
        <ProposalsContent className='proposal-content'>
            <strong>Proposals</strong>
            <Table basic='very'>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Entity</Table.HeaderCell>
                    <Table.HeaderCell>Location</Table.HeaderCell>
                    <Table.HeaderCell>Expertise</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Firm</Table.HeaderCell>
                </Table.Row>


                {!props.isEditable ? (
                    <Table.Row> 
                        <Table.Cell>{edit.name_one} </Table.Cell>
                        <Table.Cell>{edit.entity_one} </Table.Cell>
                        <Table.Cell>{edit.location_one}</Table.Cell>
                        <Table.Cell>{edit.expertise_one}</Table.Cell>
                        <Table.Cell>{edit.date}</Table.Cell>
                        <Table.Cell>{edit.firm_one}</Table.Cell>
                    </Table.Row>
                ) : <Table.Row>
                       <Table.Cell><input value={edit.name_one} onChange={event => setEdit({...edit,name_one:event.target.value})}/></Table.Cell>
                       <Table.Cell><input value={edit.entity_one} onChange={event => setEdit({...edit,entity_one:event.target.value})}/></Table.Cell>
                       <Table.Cell><input value={edit.location_one} onChange={event => setEdit({...edit,location_one:event.target.value})}/></Table.Cell>
                       <Table.Cell><input value={edit.expertise_one} onChange={event => setEdit({...edit,expertise_one:event.target.value})}/></Table.Cell> 
                       <Table.Cell><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></Table.Cell>
                       <Table.Cell><input value={edit.firm_one} onChange={event => setEdit({...edit,firm_one:event.target.value})}/></Table.Cell>
                    </Table.Row>
                }


                {!props.isEditable ? (
                <Table.Row> 
                    <Table.Cell>{edit.name_two}</Table.Cell>
                    <Table.Cell>{edit.entity_two}</Table.Cell>
                    <Table.Cell>{edit.location_two}</Table.Cell>
                    <Table.Cell>{edit.expertise_two}</Table.Cell>
                    <Table.Cell>{edit.date}</Table.Cell>
                    <Table.Cell>{edit.firm_two}</Table.Cell>
                </Table.Row>
                ) : <Table.Row>
                       <Table.Cell><input value={edit.name_two} onChange={event => setEdit({...edit,name_two:event.target.value})}/></Table.Cell>
                       <Table.Cell><input value={edit.entity_two} onChange={event => setEdit({...edit,entity_two:event.target.value})}/></Table.Cell>
                       <Table.Cell><input value={edit.location_two} onChange={event => setEdit({...edit,location_two:event.target.value})}/></Table.Cell>
                       <Table.Cell><input value={edit.expertise_two} onChange={event => setEdit({...edit,expertise_two:event.target.value})}/></Table.Cell> 
                       <Table.Cell><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></Table.Cell>
                       <Table.Cell><input value={edit.firm_two} onChange={event => setEdit({...edit,firm_two:event.target.value})}/></Table.Cell>  
                    </Table.Row>  
                }


                {!props.isEditable ? (
                <Table.Row> 
                    <Table.Cell>{edit.name_three} </Table.Cell>
                    <Table.Cell>{edit.entity_three}</Table.Cell>
                    <Table.Cell>{edit.location_three}</Table.Cell>
                    <Table.Cell>{edit.expertise_three}</Table.Cell>
                    <Table.Cell>{edit.date}</Table.Cell>
                    <Table.Cell>{edit.firm_three}</Table.Cell>
                </Table.Row>
                ) : <Table.Row>
                      <Table.Cell><input value={edit.name_three} onChange={event => setEdit({...edit,name_three:event.target.value})}/></Table.Cell>
                       <Table.Cell><input value={edit.entity_three} onChange={event => setEdit({...edit,entity_three:event.target.value})}/></Table.Cell>
                       <Table.Cell><input value={edit.location_three} onChange={event => setEdit({...edit,location_three:event.target.value})}/></Table.Cell>
                       <Table.Cell><input value={edit.expertise_three} onChange={event => setEdit({...edit,expertise_three:event.target.value})}/></Table.Cell> 
                       <Table.Cell><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></Table.Cell>
                       <Table.Cell><input value={edit.firm_three} onChange={event => setEdit({...edit,firm_three:event.target.value})}/></Table.Cell>  
                   </Table.Row>  
                }
            </Table>
           <Link to ='/proposals'><strong style={{float:'right'}}>See more proposals</strong></Link>
        </ProposalsContent>
    )
}