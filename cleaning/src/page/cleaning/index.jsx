import React from "react";

import Typography from "@mui/material/Typography";
import Palete from "../../theme/color";
import typographyStyles from "../../theme/typography";
import Shapes from "../../theme/shape";
import Breakpoint from "../../theme/breakpoints";
import { Grid } from "@mui/material";
import { ThemeProvider, createTheme} from "@mui/material/styles";

import Buttons from "../../components/button";
import TextPic from "../../components/textpic";
import ContactUs from "../../components/contactus";
import ActionAreaCard from "../../components/card";
import CommentBox from "../../components/commentbox";
import TextMap from "../../components/textmapping";

import pic from "../../assets/images/Cleaning.png";
import backpic from "../../assets/images/pic1bckground.png";
import backpic1 from "../../assets/images/pic2background.png";
import rain from "../../assets/images/raindrop.png";
import Girlpic from "../../assets/images/profilepicgirl.png";


const Div = {
  backgroundImage: `url(${backpic1})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "700px",
};

const myDiv = {
  backgroundImage: `url(${backpic})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "70%",
  height: "85%",
};

const Cleaning = () => {
  const palette = Palete();
  const breakpoint = Breakpoint();

  const theme = createTheme({
    typography: typographyStyles(),
    palette: palette,
    breakpoints: breakpoint,
    shape: Shapes(),
  });

  const textitems = [
    {
      heading: "Service 1",
    },
    {
      heading: "Service 1",
    },
    {
      heading: "Service 1",
    },
  ];
  const boxtextitems = [
    {
      paragraph: "1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
      paragraph: "2",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
      paragraph: "3",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
      paragraph: "4",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
      paragraph: "5",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
      paragraph: "6",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
  ];
  const commentitems = [
    {
      pic: Girlpic,
      name: "Courtney Henry",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      pic: Girlpic,
      name: "Courtney Henry",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      pic: Girlpic,
      name: "Courtney Henry",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      pic: Girlpic,
      name: "Courtney Henry",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ",
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <div style={Div}>
        <div style={myDiv}>
          <Typography style={{ display: "flex" }}>
            <Typography
              width="100%"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                paddingTop: "30px",
                alignItems: "center",
              }}
            >
              <TextPic
                pic={pic}
                variant="h1"
                varient="h2"
                heading={"Round Rock"}
                text={"Cleaning Services"}
                color={palette.primary.main}
              />
              <TextMap
                variant="h3"
                description="subtitle1"
                title={"Lorem ipsum"}
                paragraph={"Lorem"}
                desc={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
                }
                color={palette.primary.main}
                desccolor={palette.primary.dark}
              />
              {textitems.map((e, index) => (
                <TextPic
                  key={index}
                  pic={rain}
                  sx={{ height: "20px", width: "20px" }}
                  variant="subtitle1"
                  heading={e.heading}
                  color={palette.primary.main}
                />
              ))}
              <Buttons
                variant="contained"
                text={"I need help"}
                style={{
                  ...theme.shape,
                  background: palette.secondary.main,
                }}
                color={"secondary"}
              />
            </Typography>
            <Typography
              style={{
                ...theme.shape,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems:"center",
                background: palette.primary.light,
                height: "50%",
                width: "45%",
                marginTop: "8%",
              }}
            >
              <TextMap
               
                variant="h5"
                description="subtitle1"
                paragraph={"Contact Us"}
                color={palette.primary.main}
              />
              <ContactUs
                color={{
                  background: palette.primary.contrastText,
                  ...theme.shape,
                }}
              />
              <Buttons
                variant="contained"
                text={"Send"}
                style={{
                  ...theme.shape,
                  background: palette.primary.light,
                  
                }}
              />
            </Typography>
          </Typography>
        </div>
      </div>
      <div  style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection:"column"
            
          }}>
        <TextMap
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
           
          }}
          variant="h1"
          description="subtitle1"
          paragraph={"Contact Us"}
          color={palette.primary.main}
        />

        <Grid container display={"flex"} align={"center"}>
          {boxtextitems.map((e, index) => (
            <Grid item xs={2} sm={6} md={4} lg={10} xl={10}>
              <TextMap
                variant="subtitle1"
                description="subtitle1"
                key={index}
                paragraph={e.paragraph}
                desc={e.desc}
                color={palette.primary.main}
                desccolor={palette.primary.dark}
              />
            </Grid>
          ))}
        </Grid>
        <Buttons
          variant="contained"
          text={"I need a help"}
          style={{
            ...theme.shape,
            background: palette.secondary.main,
            marginTop: "20px",
           
          }}
          color={"secondary"}
        />
      </div>
      <Typography
        style={{
          backgroundColor: palette.secondary.contrastText,
          height: "100%",
          display:"flex",
          flexDirection:"column",
         
           alignItems:"center"
        }}
      >
        <TextMap
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
           
          }}
          variant="h1"
          description="subtitle1"
          paragraph={"Services"}
          color={palette.primary.main}
        />
        <ActionAreaCard />

        <Buttons
          variant="contained"
          text={"I need a help"}
          style={{
            ...theme.shape,
            background: palette.secondary.main,
             marginTop: "20px",
           
          }}
          color={"secondary"}
        />
      </Typography>

      <div
        style={{
          backgroundColor: palette.secondary.light,
          height:"100%",
          display:"flex",
          flexDirection:"column",
          alignItems:"center"
        
        }}
      >
        
        <TextMap
          style={{        
            alignSelf:"center"          
          }}
          variant="h1"
          description="subtitle1"
          paragraph={"Testymonials"}
          color={palette.primary.light}
        />
       
      
          <Grid container gap={1} sx={{display:"flex",justifyContent:"center", marginTop:"5%"}}>
            {commentitems.map((e, index) => (
              <Grid
                item
                xs={2}
                sm={5}
                md={4}
                lg={4}
                xl={4}
                sx={{ ...theme.shape, background: palette.primary.light }}
                key={index}
              >
                <CommentBox
                  pic={e.pic}
                  name={e.name}
                  description={e.description}
                  variant={"h6"}
                  varnt={"subtitle2"}
                  color={palette.error.main}
                />
              </Grid>
            ))}
          </Grid>

          <Buttons
            variant="contained"
            text={"I need a help"}
            style={{
              ...theme.shape,
              background: palette.secondary.main,
              marginTop: "20px",
             
            }}
            color={"secondary"}
          />
          
        </div>
       
    
    </ThemeProvider>
  );
};

export default Cleaning;
