import React,{FC} from 'react';
import {FieldProps} from 'formik'
import {TextField} from '@material-ui/core'

interface Props extends FieldProps {
    placeholder: string
}

export const SingleForm:FC<Props> = ({placeholder,field}) => {
    return(
        <TextField
            placeholder={placeholder}
            {...field}
        />
    )
}