import React,{FC} from 'react'
import styled from 'styled-components'
import {Table} from 'semantic-ui-react'
import {currentDate} from '../common/LatestPublications/LatestPublications'


const ProposalsContent = styled.div`
    padding:30px
`

export const Proposals:FC = () => {
    return(
        <ProposalsContent>
            <strong>Proposals</strong>
            <Table color='blue'>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Entity</Table.HeaderCell>
                    <Table.HeaderCell>Location</Table.HeaderCell>
                    <Table.HeaderCell>Expertise</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Firm</Table.HeaderCell>
                </Table.Row>
                <Table.Row> 
                    <Table.Cell>Operation Ti...</Table.Cell>
                    <Table.Cell>Renault HQ</Table.Cell>
                    <Table.Cell>France</Table.Cell>
                    <Table.Cell>#Tax</Table.Cell>
                    <Table.Cell>{currentDate}</Table.Cell>
                    <Table.Cell>Racine</Table.Cell>
                </Table.Row>
                <Table.Row> 
                    <Table.Cell>Op.Prometh...</Table.Cell>
                    <Table.Cell>Renault Br...</Table.Cell>
                    <Table.Cell>USA</Table.Cell>
                    <Table.Cell>M&A</Table.Cell>
                    <Table.Cell>{currentDate}</Table.Cell>
                    <Table.Cell>Clifford </Table.Cell>
                </Table.Row>
                <Table.Row> 
                    <Table.Cell>Op.Latandre</Table.Cell>
                    <Table.Cell>Renault.Co</Table.Cell>
                    <Table.Cell>Italia</Table.Cell>
                    <Table.Cell>#Social</Table.Cell>
                    <Table.Cell>{currentDate}</Table.Cell>
                    <Table.Cell>SVZ</Table.Cell>
                </Table.Row>
            </Table>
            <strong><a href="/profile">See more proposals</a></strong>
        </ProposalsContent>
    )
}