import React,{FC,useState,useEffect,useCallback} from 'react';
import { useBetween } from 'use-between';
import axios from "axios";
import {Card} from 'semantic-ui-react'
import {posts} from '../LatestPublications/LatestPublicationsData'


const useCounter = () => {
    const [data , setData] = useState([])

    useEffect(() => {
        const fetchData = () => {
            axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    setData(response.data)
                })
           }
           fetchData()
    },[])
    return data
}


export const SingleResume = (props) => {
    
        return(
            <Card style={{width:'1100px',margin:'15px'}}>
                <Card.Content>
                    <Card.Header style={{color:'var(--text-color)'}}>{props.resume.contractName}</Card.Header>
                    <Card.Description>{props.resume.description}</Card.Description>
                    <Card.Meta style={{paddingRight:'10px'}}>
                            <img src={props.resume.corpNameImage} alt="resume_image"/>{props.resume.corpName}   •
                            <img style={{margin:'5px'}}src={props.resume.metaImage} alt="resume_image"/>{props.resume.meta}
                    </Card.Meta>
                </Card.Content>
            </Card>
        )
    }
    

export const SingleResumeProps:FC = () => {
    
    const data = useCounter()
    
    return(
        <Card.Group>
            <SingleResume
                resume={{
                    contractName:'Contract #145',
                    description:posts[0].body,
                    corpNameImage:'./icons/world.png',
                    corpName:'Subsid corp',
                    metaImage:'./icons/contract.png',
                    meta:'Client contract'}}
                />
         </Card.Group>
  )
}


export const WorldCompanyResume:FC = () => {
    

    return(
        <Card.Group>
            <SingleResume
                resume={{
                    contractName:'World Company SAS',
                    description:posts[2].body,
                    corpNameImage:'./icons/world.png',
                    corpName:'Subsid corp.',
                    metaImage:'./icons/job_small.png',
                    meta:'Corporate'}}
                />
         </Card.Group>
    )
} 