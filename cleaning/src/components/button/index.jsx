import React from 'react'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
const Buttons = ({text, variant, color, style }) => {
  return (
    <Typography>
      <Button variant={variant}
         color={color}
        style={style}
      >{text}</Button>
    </Typography>
  )
}

export default Buttons
