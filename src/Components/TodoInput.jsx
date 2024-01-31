import { TextField } from '@mui/material'
import React from 'react'

const TodoInput = (props) => {
    const{required,onChange,placeholder,id,type}=props
  return (
    <div>
        <TextField onChange={onChange}  style={{marginBottom:25}} fullWidth required={required} placeholder={placeholder} id={id} type={type} />
    </div>
  )
}

export default TodoInput
