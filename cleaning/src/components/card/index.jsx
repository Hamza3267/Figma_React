import  React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from "@mui/material";
import img from '../../assets/images/cardpic.png'
const carditems=[
    {
        heading:"Lorem Ipsum",
        text:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
    },
    {
        heading:"Lorem Ipsum",
        text:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
    },
    {
        heading:"Lorem Ipsum",
        text:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
    },

];
export default function ActionAreaCard() {
  return (
    <>
    <Grid container spacing={1} align={'center'} marginTop={"5%"}>
    {carditems.map((e,index)=>(
      <Grid item xs={2} sm={6} md={4} lg={4} xl={4}>
    <Card sx={{ maxWidth: 340 }} key={index}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={img}
          alt="cleaning-products"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
         {e.heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
         {e.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    ))}
    </Grid>
    </>
  );
}
