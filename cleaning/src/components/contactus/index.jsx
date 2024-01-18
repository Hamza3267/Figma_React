import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const ContactUs = ({color}) => {
  return (
    <Box component="form" display="flex"
    flexDirection={"column"}  sx={{
        '& .MuiTextField-root': { m: 1, width: '80%' },justifyContent:"center",alignItems:"center"}}>
      <TextField 
        label="Name"
        id="outlined-size-small"    
        size="small"
        style={color}
      />
       <TextField 
        label="Email"
        id="outlined-size-small"
        size="small"
        style={color}
      />
       <TextField 
        label="Messege"
        id="outlined-size-small"
      
        size="small"
        style={color}
      />
    </Box>
  )
}

export default ContactUs
