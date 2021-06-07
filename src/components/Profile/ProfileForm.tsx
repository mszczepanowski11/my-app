import React,{FC,useState} from 'react';
import {Formik,Form, Field } from 'formik';
import {SingleForm} from './SingleForm'
import {useSelector} from 'react-redux'
import { IState } from '../../reducers/index';
import {IPhotosReducer} from '../../reducers/photosReducer'
import * as Yup from 'yup';
import {Image,Icon} from 'semantic-ui-react'
import styled from 'styled-components'
import './style.scss'


const FormContent = styled.div`
    position:relative;
    left:150px;
    bottom:25px;
    height:220px;
    display:flex;
    flex-direction:column;
`

const LeftFormOptions = styled.div`
    position:relative;
    text-align:left;
`
const RightFormOptions = styled.div`
    position:relative;  
    left:160px;
    bottom:70px;
    text-align:right;
`
const formImageStyle = {
    position:'relative',
    top:'105px',
    right:'110px', 
    width:'90px', 
    height:'90px'
}


interface Values {
    name:string,
    company: string,
    city: string,
    role: string,
    email:string,
    phone: string,
}

interface Props {
    onSubmit:(values:Values) => void;
}

const validationSchema = Yup.object().shape({
    name:Yup.string().required().max(30),
    company:Yup.string().required().max(30),
    city:Yup.string().required().max(30),
})

export const ProfileForm:FC<Props> = ({onSubmit},props) => {
    
    const {photosList } = useSelector<IState, IPhotosReducer>
    (globalState => ({
    ...globalState.photos
    }));

    const [fields] = useState({
        name: 'Erwin Howell',
        company:'Deckowe-Crist',
        city:'Wisokyburgh',
        role:'Partner',
        email:'Shanna@melissa.tv',
        phone:'010-692-6593 x09125'
    })

    const editIcon = <Icon size='large' name='pencil' color='black'/>
    const saveIcon = <Icon size='large' name='save'/>

    const [disabled, setDisabled] = useState(true);
    const handleChange = () => {
      setDisabled(!disabled)
    }

    return (
        <Formik 
            initialValues={fields} 
            onSubmit={(values) => onSubmit(values)}
            validationSchema={validationSchema}
            >
            {({errors,touched}) => (
            <FormContent className='form-content'>
               
               <Form>
               <Icon style={{position:'absolute',top:'30%',left:'170%',cursor:'pointer'}} onClick={handleChange}>{disabled ? editIcon : saveIcon}</Icon>
                <div>
                <Image style={formImageStyle} src={photosList?.[1]?.url} avatar/>
                <a href="##">See profile</a>
               </div>
                  <LeftFormOptions>
                    <fieldset disabled={disabled}>
                        <Field
                            name='name'
                            placeholder='Name'
                            component={SingleForm}
                        />
                   
                        {errors.name && touched.name ? (<div className="text-danger">{errors.name}</div>):null}

                    
                        <Field 
                            name="company" 
                            placeholder='Company'
                            component={SingleForm}
                        />
                    
                        {errors.company && touched.company ? (<div className="text-danger">{errors.company}</div>):null}

                    
                        <Field 
                            name="city" 
                            placeholder='City'
                            component={SingleForm}
                        />
                    
                         {errors.city && touched.city ? (<div className="text-danger">{errors.city}</div>):null}

                
                        <Field 
                            name="role" 
                            placeholder='Role'
                            component={SingleForm}
                         />
                        </fieldset>
                   </LeftFormOptions>


                   <RightFormOptions>
                        <fieldset disabled={disabled}>
                        <Field 
                            name="email" 
                            placeholder='E-mail'
                            component={SingleForm}
                            />
                    
                        <Field 
                            name="phone" 
                            placeholder='Phone'
                            component={SingleForm}
                            />
                        </fieldset>
                   </RightFormOptions>
              </Form> 
           </FormContent>  
            )}
        </Formik>
    )
} 