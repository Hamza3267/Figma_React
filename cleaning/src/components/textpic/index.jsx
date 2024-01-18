import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";


const TextPic = ({ pic,heading, text, color ,varient,variant,sx}) => {

  return (
   
        <Typography   style={{
          display: "flex",
            alignItems: "center",
          width:"57%"
        }}>
        <Avatar src={pic} alt="cleaning" sx={sx}/>
        <Typography style={{ display: "grid"  }}>
          <Typography variant={variant} color={color}>
            {heading}
          </Typography>
          <Typography variant={varient} color={color}>
            {text}
          </Typography>
        </Typography>
      </Typography>
     
  );
};

export default TextPic;
