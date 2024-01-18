import React from "react";
import Typography from "@mui/material/Typography";

const TextMap = ({
  title,
  desc,
  paragraph,
  variant,
  description,
  width,
  desccolor,
  color,
  style
 
}) => {
  return (
    <Typography  style={{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
      marginTop:"40px",
      width:"55%", 
    }}
    >
      <Typography variant={variant} color={color}>{title}</Typography>
      <Typography variant={variant} color={color} style={style}>{paragraph}</Typography>
      <Typography  variant={description} width={width} color={desccolor}>{desc}</Typography>
    </Typography>
  );
};

export default TextMap;
