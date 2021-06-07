import React,{FC,useState} from 'react'
import styled from 'styled-components'
import {Table,Dropdown} from 'semantic-ui-react'

const FeesContent = styled.div`
    padding:30px;
`

const years = [
    {text: '2010', value: 2010},
    {text: '2011', value: 2011},
    {text: '2012', value: 2012},
    {text: '2013', value: 2013},
    {text: '2014', value: 2014},
    {text: '2015', value: 2015},
    {text: '2016', value: 2016},
    {text: '2017', value: 2017},
    {text: '2018', value: 2018},
    {text: '2019', value: 2019},
    {text: '2020', value: 2020},
    {text: '2021', value: 2021},
  ]
interface IEditable {
    isEditable?:boolean
}
  
export const Fees:FC<IEditable> = (props) => {

    const [edit,setEdit] = useState({
        cost1:'CS 153',
        cost2:'CS 153',
        cost3:'CS 47',
        cost4:'CS 153',
        cost5:'CS 32',

        amount1:'3 500$',
        amount2:'9 500$',
        amount3:'10 500€',
        amount4:'18 500€',
        amount5:'10 500£',

        

        firm1:'Clifford Chance',
        firm2:'Linklaters',
        firm3:'Linklaters',
        firm4:'Linklaters',
        firm5:'Linklaters',
    })

    return(
        <FeesContent className='fees-content'>
            <strong>Amount of fees</strong>
            <Table basic='very'> 
                <Table.Row>
                    <Table.HeaderCell>Year</Table.HeaderCell>
                    <Table.HeaderCell>Cost center</Table.HeaderCell>
                    <Table.HeaderCell>Total amount</Table.HeaderCell>
                    <Table.HeaderCell>Law firm</Table.HeaderCell>
                </Table.Row>



                {!props.isEditable ? (
                <Table.Body>
                    <Table.Cell><Dropdown placeholder={years[9].text} options={years}/></Table.Cell>
                    <Table.Cell>{edit?.cost1}</Table.Cell>
                    <Table.Cell>{edit?.amount1}</Table.Cell>  
                    <Table.Cell>{edit?.firm1}</Table.Cell>                     
                 </Table.Body>
                ): <Table.Body>
                    <Table.Cell><Dropdown placeholder={years[9].text} options={years}/></Table.Cell>
                    <Table.Cell><input value={edit?.cost1} onChange={(event) => setEdit({...edit,cost1:event.target.value})}/></Table.Cell>
                    <Table.Cell>
                        <input value={edit?.amount1} onChange={(event) => setEdit({...edit,amount1:event.target.value})}/></Table.Cell>
                    <Table.Cell><input value={edit?.firm1} onChange={(event) => setEdit({...edit,firm1:event.target.value})}/></Table.Cell>
                   </Table.Body>
                }
               

               {!props.isEditable ? (
                   <Table.Body>
                     <Table.Cell><Dropdown placeholder={years[8].text} options={years}/></Table.Cell>
                     <Table.Cell>{edit?.cost2}</Table.Cell>
                     <Table.Cell>{edit?.amount2}</Table.Cell>
                     <Table.Cell>{edit?.firm2}</Table.Cell>
                  </Table.Body>
 
               ) :<Table.Body>
                    <Table.Cell><Dropdown placeholder={years[9].text} options={years}/></Table.Cell>
                    <Table.Cell><input value={edit?.cost2} onChange={(event) => setEdit({...edit,cost2:event.target.value})}/></Table.Cell>
                    <Table.Cell><input value={edit?.amount2} onChange={(event) => setEdit({...edit,amount2:event.target.value})}/></Table.Cell>
                    <Table.Cell><input value={edit?.firm2} onChange={(event) => setEdit({...edit,firm2:event.target.value})}/></Table.Cell>
                 </Table.Body>
            
               }
               

             
               {!props.isEditable ? (
                   <Table.Body>
                     <Table.Cell><Dropdown placeholder={years[8].text} options={years}/></Table.Cell>
                     <Table.Cell>{edit?.cost3}</Table.Cell>
                     <Table.Cell>{edit?.amount3}</Table.Cell>
                     <Table.Cell>{edit?.firm3}</Table.Cell>
                  </Table.Body>
 
               ) :<Table.Body>
                    <Table.Cell><Dropdown placeholder={years[9].text} options={years}/></Table.Cell>
                    <Table.Cell><input value={edit?.cost3} onChange={(event) => setEdit({...edit,cost3:event.target.value})}/></Table.Cell>
                    <Table.Cell><input value={edit?.amount3} onChange={(event) => setEdit({...edit,amount3:event.target.value})}/></Table.Cell>
                    <Table.Cell><input value={edit?.firm3} onChange={(event) => setEdit({...edit,firm3:event.target.value})}/></Table.Cell>
                 </Table.Body>
            
               }

                
                {!props.isEditable ? (
                   <Table.Body>
                     <Table.Cell></Table.Cell>
                     <Table.Cell>{edit?.cost4}</Table.Cell>
                     <Table.Cell>{edit?.amount4}</Table.Cell>
                     <Table.Cell>{edit?.firm4}</Table.Cell>
                  </Table.Body>
 
               ) :<Table.Body>
                    <Table.Cell></Table.Cell>
                    <Table.Cell><input value={edit?.cost4} onChange={(event) => setEdit({...edit,cost4:event.target.value})}/></Table.Cell>
                    <Table.Cell><input value={edit?.amount4} onChange={(event) => setEdit({...edit,amount4:event.target.value})}/></Table.Cell>
                    <Table.Cell><input value={edit?.firm4} onChange={(event) => setEdit({...edit,firm4:event.target.value})}/></Table.Cell>
                 </Table.Body>
            
               }
            
                     
               {!props.isEditable ? (
                   <Table.Body>
                     <Table.Cell></Table.Cell>
                     <Table.Cell>{edit?.cost5}</Table.Cell>
                     <Table.Cell>{edit?.amount5}</Table.Cell>
                     <Table.Cell>{edit?.firm5}</Table.Cell>
                  </Table.Body>
 
               ) :<Table.Body>
                    <Table.Cell></Table.Cell>
                    <Table.Cell><input value={edit?.cost5} onChange={(event) => setEdit({...edit,cost5:event.target.value})}/></Table.Cell>
                    <Table.Cell><input value={edit?.amount5} onChange={(event) => setEdit({...edit,amount5:event.target.value})}/></Table.Cell>
                    <Table.Cell><input value={edit?.firm5} onChange={(event) => setEdit({...edit,firm5:event.target.value})}/></Table.Cell>
                 </Table.Body>
               }
            </Table>
        </FeesContent>
  )
}