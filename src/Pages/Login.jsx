import { Button, Container, Paper, TableContainer, Typography } from '@mui/material'
import React, { useState } from 'react'
import InputFields from '../Components/InputFields'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const[userState,setUserState]=useState({})
    const handleChnage=(e)=>
    {
        let {value,id}=e.target;
        setUserState({...userState,[id]:value})
        console.log(userState)
    }
    const handleSubmit=(e)=>
    {
        e.preventDefault()
        if(userState.username && userState.password )
        {
            localStorage.setItem("isLoginedIn",true)
            navigate(`dashboard`)
        }
    }


  return (
    <div>
      <Container maxWidth="md" style={{marginTop:40}}>
        <Paper style={{padding:40}} elevation={10}>
          <Typography variant='h2' textAlign={"center"} fontWeight={600} marginBottom={3}>Login</Typography>
            <form onSubmit={handleSubmit} action="">
                <InputFields onChange={handleChnage} required={true} placeholder="Enter Username" type="text" id="username"/>
                <InputFields onChange={handleChnage} required={true} placeholder="Enter Password" type="password" id="password"/>
                <Button type='submit' variant='outlined' color='success' fullWidth>Submit</Button>
            </form>
        </Paper>
      </Container>
    </div>
  )
}

export default Login
