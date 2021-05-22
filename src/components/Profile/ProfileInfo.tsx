import React, {FC} from 'react'
import {useState} from 'react'
import { withFormik, Form, Field } from "formik";
import {Image,List} from 'semantic-ui-react'


interface IUserInfo {
    avatar:string,
    link:string
    name:string,
    company:string,
    city:string,
    role:string,
    email:string,
    phone:string
}

export const ProfileInfo:FC<IUserInfo> = (props) => {
    const [data] = useState({
        avatar:props.avatar,
        link:props.link,
        name:props.name,
        company:props.company,
        city:props.city,
        role:props.role,
        email:props.email,
        phone:props.phone
    })

    return(
        <>
        
            <Image style={{padding:'30px',float:'left',position:'relative'}}  src={props.avatar} avatar circular size='small'/>
            <List.Item style={{position:'relative',top:'150px',marginLeft:'40px'}}>
                <a href="/profile">{data.link}</a>
            </List.Item>
            <List style={{paddingTop:'20px',float:'left'}}>
                <List.Item style={{fontWeight:'600'}}>{data.name}</List.Item>
                <List.Item style={{fontWeight:'600'}}>{data.company}</List.Item>
                <List.Item>{data.city}</List.Item>
                <List.Item>{data.role}</List.Item>
            </List>
            <List style={{marginLeft:'35px',paddingTop:'65px', float:'left'}}>
                <List.Item>{data.email}</List.Item>
                <List.Item>{data.phone}</List.Item>
             </List>
            
        </>
    )
}