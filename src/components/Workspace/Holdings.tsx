import React,{FC} from 'react'
import {SingleHolding} from './SingleHolding'
import {WorkspacesData} from '../common/Workspaces/WorkspacesData'


export const ClientContractHoldings:FC = () => {
    return(
       <SingleHolding
            image={WorkspacesData[0].image}
            header={WorkspacesData[0].header}
            headerImage={WorkspacesData[0].headerImage}
       />
    )
}

export const SupplierContractHoldings:FC = () => {
    return(
       <SingleHolding
            image={WorkspacesData[1].image}
            header={WorkspacesData[1].header}
            headerImage={WorkspacesData[1].headerImage}
       />
    )
}

export const CorporateHoldings:FC = () => {
    return(
       <SingleHolding
            image={WorkspacesData[2].image}
            header={WorkspacesData[2].header}
            headerImage={WorkspacesData[2].headerImage}
       />
    )
}

export const GroupNormsHoldings:FC = () => {
    return(
       <SingleHolding
            image={WorkspacesData[3].image}
            header={WorkspacesData[3].header}
            headerImage={WorkspacesData[3].headerImage}
       />
    )
}

export const RealEstateHoldings:FC = () => {
    return(
       <SingleHolding
            image={WorkspacesData[4].image}
            header={WorkspacesData[4].header}
            headerImage={WorkspacesData[4].headerImage}
       />
    )
}