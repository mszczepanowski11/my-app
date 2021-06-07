import React from 'react'
import {SingleUpdate} from './SingleUpdate'
import {Icon} from 'semantic-ui-react'
import './styles.scss'
import styled from 'styled-components'


const LatestUpdatesContent = styled.div`
    width:auto;
    height:auto;
    margin-top:35px;
`

const ButtonsGroup = styled.div`
    position:relative;
    right:2%;
    top:30px;
    padding-right:10px;
`

export const LatestUpdates = () => {

    return(
        <LatestUpdatesContent>
            <ButtonsGroup>
                <div className='buttons-group'>
                    <button>All</button>
                    <button><Icon name='building'/>SAS</button>
                    <button><Icon name='building'/>SARL</button>
                    <button><Icon name='building'/>Secondary business</button>
                    <button><Icon name='users'/>Communities</button>
                    <button><Icon name='file outline'/>POA</button>
                    <button><Icon name='list'/>Survey</button>
                    <button>...</button>
                </div>
            </ButtonsGroup>
            <SingleUpdate/>
        </LatestUpdatesContent>
    )
} 