import { Button, FormLabel, TextField } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Box} from '@mui/system'
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const history = useNavigate();
  const [inputs,setInputs] = useState({
    name:'',
    description:'',
    price:'',
    author:'',
    
    image:''
  });

  const [checked,setChecked] = useState(false);

  const handlechange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]:e.target.value
    }))

    // console.log(e.target.name,"Value",e.target.value);
  };

  const sendRequest = async() =>{
    await axios.post("http://localhost:5000/books/add", {
      name: String(inputs.name),
      author: String(inputs.author),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
      available: Boolean(checked)
    }).then(res => res.data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs,checked);
    sendRequest().then(()=>history('/books'));
  }
  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" justifyContent={'center'} maxWidth={700} alignContent={'center'} alignSelf="center" marginLeft={"auto"} marginRight="auto" marginTop={10}>
    
        <FormLabel>Name</FormLabel>
        <TextField value={inputs.name} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='name'/>
        <FormLabel>Author</FormLabel>
        <TextField value={inputs.author} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='author'/>
        <FormLabel>Description</FormLabel>
        <TextField value={inputs.description} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='description'/>
        <FormLabel>Price</FormLabel>
        <TextField value={inputs.price} onChange={handlechange} type='number' margin='normal' fullWidth variant='outlined' name='price'/>
        <FormLabel>Image</FormLabel>
        <TextField value={inputs.image} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='image'/>
        <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)}/>} label="Available" />
        <Button variant='contained' type='submit'>Add Book</Button>
      
      </Box>
    </form>
  )
}

export default AddBook