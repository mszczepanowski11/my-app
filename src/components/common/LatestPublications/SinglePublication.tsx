import React from 'react';
import {Image} from 'semantic-ui-react'

const  SinglePublication  = (props) => {
    return (
        <div className="commentSection">
            <img style={{width:'55px',float:'left',marginRight:'10px',marginTop:'5px',borderRadius:'3px'}} src={props.publication.image} alt=""></img>
            <h5 style={{fontWeight:200,fontSize:'15px',marginBottom:'7px'}}>{props.publication.body}</h5>
            <h3 
                style={{fontSize:'15px',margin:'0'}}>{props.publication.date}
                <Image style={{marginLeft:'5px'}} avatar src={props.publication.avatar} />
                <span style={{marginLeft:'10px'}}>{props.publication.author}</span>
            </h3>
        </div>
    )
 } 
 
 export default SinglePublication