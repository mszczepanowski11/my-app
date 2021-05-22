import React,{FC} from 'react'
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
 
const currency = [
    {key:'EURO',text:'€'},
    {key:'DOLLAR',text:'$'}
]

export const Fees:FC = () => {
    return(
        <FeesContent>
            <strong>Amount of fees</strong>
            <Table basic='very'> 
                <Table.Row>
                    <Table.HeaderCell>Year</Table.HeaderCell>
                    <Table.HeaderCell>Cost center</Table.HeaderCell>
                    <Table.HeaderCell>Total amount</Table.HeaderCell>
                    <Table.HeaderCell>Law firm</Table.HeaderCell>
                </Table.Row>
                <Table.Body>
                    <Table.Cell><Dropdown placeholder={years[9].text} options={years}/></Table.Cell>
                    <Table.Cell>CS 153</Table.Cell>
                    <Table.Cell>3 500€</Table.Cell>
                    <Table.Cell>Clifford Chance</Table.Cell>
                </Table.Body>
                <Table.Body>
                    <Table.Cell><Dropdown placeholder={years[8].text} options={years}/></Table.Cell>
                    <Table.Cell>CS 153</Table.Cell>
                    <Table.Cell>9 500€</Table.Cell>
                    <Table.Cell>Linklaters</Table.Cell>
                </Table.Body>
                <Table.Body>
                    <Table.Cell><Dropdown placeholder={years[7].text} options={years}/></Table.Cell>
                    <Table.Cell>CS 47</Table.Cell>
                    <Table.Cell>10 500€</Table.Cell>
                    <Table.Cell>Linklaters</Table.Cell>
                </Table.Body>
                <Table.Body>
                    <Table.Cell></Table.Cell>
                    <Table.Cell>CS 153</Table.Cell>
                    <Table.Cell>18 500€</Table.Cell>
                    <Table.Cell>Linklaters</Table.Cell>
                </Table.Body>
                <Table.Body>
                    <Table.Cell></Table.Cell>
                    <Table.Cell>CS 32</Table.Cell>
                    <Table.Cell>15 500€</Table.Cell>
                    <Table.Cell>Linklaters</Table.Cell>
                </Table.Body>
            </Table>
        </FeesContent>
  )
}