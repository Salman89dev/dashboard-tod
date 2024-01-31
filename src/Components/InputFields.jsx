import { TextField } from '@mui/material'
import React from 'react'

const InputFields = (props) => {

    const {placeholder,type,id,onChange,required}=props
  return (
    <div>
      <TextField style={{marginBottom:30}} required={required} onChange={onChange}  placeholder={placeholder} type={type} id={id} fullWidth  />
    </div>
  )
}

export default InputFields
