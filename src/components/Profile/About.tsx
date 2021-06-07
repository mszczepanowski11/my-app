import React,{FC,useState} from 'react'
import {Icon,Dropdown,Form} from 'semantic-ui-react'
import styled from 'styled-components'
import './style.scss'

const expertiseOptions = [
    { text: 'Mergers and acquisition',value: 1,},
    { text: 'Horizontal Merger', value: 2},
    { text: 'Conglomerate Merger ',value: 3,},
    { text: 'Concentric Merger', value: 4, }
  ]
  
const specialitiesOptions = [
    { text: 'Cross border operation',value: 1},
    { text: 'Transaction over 500M€/$', value: 2},
    { text: 'Assist management in developing new consultants.',value: 3,},
    { text: 'Developing client relationships', value: 4, },
    { text: 'Liaising with Sales, Marketing, and Management ', value: 5, }
]
const addmisionsOptions = [
    {text:'Paris bar association',value:1},
    {text:'Brussels bar association',value:2},
    {text:'Zagreb bar association',value:3},
    {text:'Berlin bar association',value:4},
    {text:'Sydney bar association',value:5},
    {text:'Warsaw bar association',value:6},
]

const countriesOptions = [
    { flag:'au', text: 'Australia',value:1},
    { flag:'be', text: 'Belgium' ,value:2},
    { flag:'hr', text: 'Croatia',value:3},
    { flag:'fr', text: 'France',value:4},
    { flag:'de', text: 'Germany',value:5},
    { flag:'pl', text: 'Poland',value:6}
]

const spanStyle = {
    opacity:'0.6',
    display:'block',
    marginBottom:'5px'
}

const AboutContent = styled.div`
    padding:0 30px 15px;
  `
  
export const About:FC = () => {

    const [disabled, setDisabled] = useState(true);

    const handleChange = () => {
      setDisabled(!disabled)
    } 

    const editIcon = <Icon size='large' name='pencil' color='black'/>
    const saveIcon = <Icon size='large' name='save'/>

    return(
      <AboutContent>
         <Icon style={{position:'relative',left:'97%',display:'block',marginBottom:'10px',cursor:'pointer'}}  basic onClick={handleChange}>{disabled ? editIcon : saveIcon}</Icon>  
          <Form className='about-form'>
            <span style={spanStyle}>Expertise</span>
            <Form.Field disabled={disabled}><Dropdown icon='' placeholder='Select expertises'   multiple selection options={expertiseOptions} /></Form.Field>
            <span style={spanStyle}>Specialities</span>
            <Form.Field disabled={disabled}><Dropdown icon='' placeholder='Select specialities' multiple selection options={specialitiesOptions} /></Form.Field>
            <span style={spanStyle}>Admission to practise law</span>
            <Form.Field disabled={disabled}><Dropdown icon='' placeholder='Select Admissions'   multiple selection options={addmisionsOptions} /></Form.Field>
            <span style={spanStyle}>Countries</span>
            <Form.Field disabled={disabled}><Dropdown icon='' placeholder='Countries'           multiple selection options={countriesOptions} /></Form.Field>
          </Form>
      </AboutContent>
    )
}

 