import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import TodoInput from '../Components/TodoInput'
import { MdDeleteForever } from "react-icons/md";
import { Navigate, useNavigate } from 'react-router-dom';


const Dashboards = () => {
  const navigate=useNavigate()
  const [todoValue,setTodoValue]=useState()
  const [checkStatus,setcheckStatus]=useState([])
  const [count,setCount]=useState(0)


  const changeTodoHandle=(e)=>
  {
    const{id,value}=e.target
    setTodoValue({...todoValue,[id]:value,unique:0})
  }


  const todoHandleSubmit=(e)=>
  {
    e.preventDefault();
    setCount(count+1)
    todoValue["unique"]=count;
    setcheckStatus([...checkStatus,todoValue])
    // console.log(checkStatus)
    document.querySelector("#desc").value="";
    document.querySelector("#title").value="";


  }
  const deleteHandle=(id)=>
  {
    const filteredArray=checkStatus.filter((single)=>
    {
      return single.unique!==id
    })
    setcheckStatus(filteredArray)


  }
  const logoutHanddle=()=>
  {
    localStorage.removeItem("isLoginedIn");
    // <Navigate to='' />
    navigate('/')
  }


  return (
    <div>
      <Grid container   justifyContent="center">
        <Grid item xs={4}>
          Logo
        </Grid>
        <Grid   justifyContent="end" item xs={8}>
          <Button onClick={logoutHanddle}>Logout</Button>
        </Grid>
      </Grid>
      <Container style={{marginTop:40}} maxWidth="lg">
        <Typography variant='h1' textAlign={"center"} fontWeight={600} color={"grey"} marginBottom={3}>Welcome to Dashboard</Typography>
         <Paper style={{padding:40,marginBottom:30}} elevation={10}>
          <Typography variant='h2' fontWeight={700} textAlign={'center'} marginBottom={3}>Todo List</Typography>
           <form action="" onSubmit={todoHandleSubmit}>
             <TodoInput fullWidth onChange={changeTodoHandle} required={true} placeholder='Enter Title' id='title' type='text'/>
             <TodoInput fullWidth onChange={changeTodoHandle} required={true} placeholder='Enter Description' id='desc' type='text'/>
             <Button variant='outlined' color='success'  type='submit' fullWidth>Submit</Button>
           </form>
         </Paper>
         { 
         count? <Paper style={{padding:25}} elevation={10}>
            <ul>
              {
                  checkStatus.map((single,index)=>
                  {
                    console.log(single);
                    return <li key={index} id={single.unique}>
                      <div className='listContent'>
                        <Typography variant='h5'>{single.title}</Typography>
                      <Typography variant='p'>{single.desc}</Typography>
                      </div>
                    <MdDeleteForever  onClick={()=>deleteHandle(single.unique)} />
  
                    </li>                  
                  })
              }


            </ul>
          </Paper>:null       
        }   

      </Container>
    </div>
  )
}

export default Dashboards
