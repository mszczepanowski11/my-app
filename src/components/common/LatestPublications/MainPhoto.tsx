import React,{FC,CSSProperties} from 'react';
import {photo} from './LatestPublicationsData'


const labelStyle = {
  position:'absolute',
  top:'70%',
  heigh:'auto',
  margin:'10px',
  inlineSize:'250px',
  textAlign:'left',
  fontSize:'15px',

} as CSSProperties


const MainPhoto : FC = (props) => {
  return(
    <div>
     <label style={labelStyle}>{photo.title}...  and one more line for the demo</label> 
     <img style={{float:'left',marginRight:'10px'}} src={photo.url} alt=""></img>
    </div>
  )
}

export default MainPhoto