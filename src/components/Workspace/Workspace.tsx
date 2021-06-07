import React,{FC,useState} from 'react'
import {CorporateMatters} from './CorporateMatters'
import {ClientContractHoldings} from './Holdings'
import {SupplierContractHoldings} from './Holdings'
import {RealEstateHoldings} from './Holdings'
import {GroupNormsHoldings} from './Holdings'
import {CorporateHoldings} from './Holdings'
import {LatestUpdates} from './LatestUpdates'
import styled from 'styled-components'

const WorkspaceContent = styled.div`
    width:970px;
    position:absolute;
    top:8%;
    right:7%;
`


const Workspace:FC = () => {
    
    const [active,setActive] = useState(3)
    const setView = active => {
        setActive(active)
    }

    return(
        <WorkspaceContent>
                {active === 1 ?
                    <ClientContractHoldings/>
                : active === 2 ?    
                    <SupplierContractHoldings/>
                : active === 3 ?
                    <CorporateHoldings/>
                : active === 4 ?
                    <GroupNormsHoldings/>
                : 
                    <RealEstateHoldings/>
                }
            <CorporateMatters/>
            <LatestUpdates/>
        </WorkspaceContent>
    )
}

export default Workspace