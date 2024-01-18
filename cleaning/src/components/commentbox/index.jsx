import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import star from "../../assets/images/star.png";
const CommentBox = ({
  name,
  description,
  pic,
  sx,
  varnt,
  clr,
  variant,
  color,
}) => {
  const starmap = [
    {
      star: star,
    },
    {
      star: star,
    },
    {
      star: star,
    },
    {
      star: star,
    },
    {
      star: star,
    },
  ];
  return (
    <>
      <Typography display={"flex"} marginLeft={"2%"} marginTop={"5%"} width={"80%"}>
        <Typography>
          <Avatar src={pic} alt="user-pic" sx={sx} />
        </Typography>
        <Typography>
          <Typography variant={variant} color={color}>
            {name}
          </Typography>
          <Typography variant={varnt} color={clr}>
            {description}
          </Typography>
          <Typography style={{ display: "flex"}}>
            {starmap.map((e, index) => (
              <div key={index}>
                <Avatar src={e.star}  sx={{ width: 24, height: 24 }} />
              </div>
            ))}
          </Typography>
        </Typography>
      </Typography>
    </>
  );
};

export default CommentBox;
