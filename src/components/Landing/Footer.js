import { Container, Typography, Link } from '@mui/material';
import React from 'react';
import { FacebookRounded, Instagram, Mail} from "@mui/icons-material";
import { IoLogoYoutube } from "react-icons/io5";
import bits from "./bits-img.png";

const Footer = () => {
    return (
        <Container 
          component={"div"}
          sx={{
            mx:{
              sm:"auto",
              md:0
            },
            bottom:0,
            minWidth:"100vw",
            minHeight:300,
            backgroundColor:"rgb(230,105,30)",
            display:"flex",
            flexDirection:{
              xs:"column-reverse",
              sm:"column-reverse",
              md:"row",
            }
          }}>
          <Container 
            component={"div"}>
            <Container
                sx={{
                my:"auto",
                px:0,
                ml:0,
                backgroundImage:`url(${bits})`,
                backgroundPosition:"center",
                backgroundSize:"contain",
                backgroundRepeat:"no-repeat",
                height:250,
                }}
            />
            
          </Container>
          <Typography flexGrow={1}/>
          <Container sx={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"space-around",
            color:"white",
            my:"auto",
            mt:{xs:3,
              sm:3,md:"auto"},
          }}>
            <Typography sx={{color:"white", mb:"none", textAlign:"left"}} fontSize={"xx-large"} fontFamily={"Poppins"}>Follow Us</Typography>
            <Container sx={{
            display:"flex",
            // flexDirection:{
            //   xs:"column",
            //   sm:"row",
            // },
            justifyContent:"center",
            alignItems:"center",
            gap:{xs:5,sm:10},
            color:"white",
            mb:5,
          }}>
              <Typography sx={{color:"white"}} fontSize={"xx-large"}><Link sx={{color:"white"}} target='_blank' href={"https://www.facebook.com/bitspearl/"}><FacebookRounded /></Link></Typography>
              <Typography sx={{color:"white"}} fontSize={"xx-large"}><Link sx={{color:"white"}} target='_blank' href={"https://www.instagram.com/pearl.bitsh/?hl=en"}><Instagram /></Link></Typography>
              <Typography sx={{color:"white"}} fontSize={"x-large"}><Link sx={{color:"white"}} target='_blank' href={"https://www.youtube.com/@pearlbitspilanihyderabad7969"}><IoLogoYoutube /></Link></Typography>
              <Typography sx={{color:"white"}} fontSize={"x-large"}><Link sx={{color:"white"}} target='_blank' href={"mailto:pearl@hyderabad.bits-pilani.ac.in"}><Mail /></Link></Typography>
            </Container>
          </Container>
          <Container
            sx={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-around",
            }}
            >
                <Container sx={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    fontFamily:"Poppins"

                }}>
                    <Typography sx={{color:"white"}} variant='h5'>Quick Links</Typography>
                    <Typography flexGrow={0.2}/>
                    <Link sx={{color:"white"}} href='/Gallery'> Gallery</Link>
                    <Link sx={{color:"white"}} href='/Proshows'> Proshows</Link>
                    <Link sx={{color:"white"}} href='/Sponsors'> Sponsors</Link>
                    <Link sx={{color:"white"}} href='/Events'> Events</Link>
                    <Link sx={{color:"white"}} href='/Talks'> Talks</Link>
                    <Link sx={{color:"white"}} href='/Accomodations'> Accomodations</Link>
                </Container>
          </Container>
        </Container>
    );
}

export default Footer;
