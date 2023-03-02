import React, { useEffect, useRef, useState } from "react";
import "./Landing.css";
import bits from "./bits-img.png";
import { useNavigate } from "react-router-dom";
import Standout from "../Standout/Standout";
import { useScroll } from "framer-motion";
import { Navbar, Button } from "react-bootstrap";
import {
  Animator,
  batch,
  Fade,
  FadeIn,
  ScrollContainer,
  ScrollPage,
  Sticky,
  ZoomIn,
} from "react-scroll-motion";
import bg3 from "../../assets-pearl/website_landing-01-01.png";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import YouTube from "react-youtube";
import { Container, Icon, Link, Typography } from "@mui/material";
import { Box, height } from "@mui/system";
import { FacebookRounded, Instagram, Mail, YoutubeSearchedForRounded } from "@mui/icons-material";
import { IoLogoYoutube } from "react-icons/io5";
import YTPlayer from "../YoutubePlayer/YoutubePlayer";

const Landing = () => {
  const [player, setPlayer] = React.useState(null);
  const [playing, setPlaying] = React.useState(false);

  const handlePlayerReady = (event) => {
    setPlayer(event.target);
  };

  const handlePlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setPlaying(true);
    }
  };
  // useEffect(() => {
  //   const handleFullscreenChange = () => {
  //     if (document.fullscreenElement) {
  //       if (!playing) {
  //         player.playVideo();
  //       }
  //     } else {
  //       if (playing) {
  //         player.pauseVideo();
  //       }
  //     }
  //   };
  
  //   document.addEventListener('fullscreenchange', handleFullscreenChange);
  
  //   return () => {
  //     document.removeEventListener('fullscreenchange', handleFullscreenChange);
  //   };
  // }, [playing, player]);

  // const navigate = useNavigate();
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  var count = 1;
  const elementRef = useRef(null);
  const [leaving, setLeaving] = useState(true);
  const [scrolling, setScrolling] = useState(true);
  const { scrollYProgress } = useScroll();
  let isMobile = window.matchMedia("(max-width: 480px)");
  let isTouch = window.matchMedia("(max-width: 1024px)");

  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMins] = useState("");
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      var deadline = new Date("Nov 25, 2022 0:00:00").getTime();
      var now = new Date().getTime();
      var distance = deadline - now;
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMins(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      console.log(seconds);
    }, 1000);
    const handleScroll = async (e) => {
      const height = elementRef.current?.scrollHeight;
      var limit = 0.65;
      isMobile ? (limit = 0.7) : (limit = 0.65);
      setScrolling(false);
      const smoothScroll = (h) => {
        let i = h || 0;
        if (i < height) {
          setTimeout(() => {
            window.scrollTo(0, i);
            smoothScroll(i + 10);
          }, 10);
        }
      };
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  // const passesClicked = () => {
  //   navigate("/passes");
  // };

  return (
    <div>
    <div className="bg"></div>
    <ParallaxProvider>
      {/* {scrolling && (
                    <p className="scroll-text">
                      {isTouch.matches ? "SWIPE UP TO EXPLORE" : "SCROLL DOWN TO EXPLORE"}
                    </p>
                  )} */}
      {/* <ScrollContainer>
        <ScrollPage>
          <Animator> */}
            <div className="landing-container" ref={elementRef}>
              {/* <h4 className="dates">25-27 November</h4> */}
              
              {/*<h4 className="countdown">{`${days}d : ${hours}h : ${minutes}m`}</h4>*/}
              {/* <Standout /> */}
              <div className="landing-desc-container">
                <p className="landing-desc">
                  Pearl is the annual national cultural fest of BITS Pilani,
                  Hyderabad Campus. Incepted in 2009 as an intra-college
                  festival, a year after the foundation of BITS Pilani,
                  Hyderabad, the fest grew into a national level college
                  cultural fest with participation from more than 50 colleges
                  across India. This year's travel theme is just one more reason
                  to look forward to the annual cultural fest that we know and
                  adore.
                  <br />
                </p>
                <div className="landing-btn">
                  <Button variant="landing" size="lg" href="/events">
                    REGISTER
                  </Button>
                </div>
              </div>
            </div>
          {/* </Animator>
        </ScrollPage> */}
        {/* <ScrollPage>
          <Animator animation={batch(Sticky(), FadeIn(), ZoomIn(1.5, 1))}>
            <div
              className="after-movies"
              style={{ backgroundImage: `url(${bg3})` }}
            >
              <h1>AFTERMOVIES</h1>
              <div className="movies">
                <div className="movie">
                  <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/Y_wt8LJdOKw`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="2022"
                  />
                  <h3>2022</h3>
                </div>
                <div className="movie">
                  <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/ai3GS6Rlano`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="2018"
                  />
                  <h3>2018</h3>
                </div>
                <div className="movie">
                  <iframe
                    width="853"
                    height="480"
                    src={"https://www.youtube.com/embed/ajXYdXiUkWc"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="2017"
                  />
                  <h3>2017</h3>
                </div>
              </div>
            </div>
          </Animator>
        </ScrollPage> */}
      {/* </ScrollContainer> */}
      
      
        <div
          className="after-movies"
          // style={{ backgroundImage: `url(${bg3})` }}
        >
          <h1>AFTERMOVIES</h1>
          <Parallax speed={0}>
          <div className="movies">
            <div className="movie">
            <Parallax speed={10}>
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/Y_wt8LJdOKw?rel=0&autoplay=0&showinfo=0&controls=0&fullscreen=1`}
                allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="2022"
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen" 
                msallowfullscreen="msallowfullscreen" 
                oallowfullscreen="oallowfullscreen" 
                webkitallowfullscreen="webkitallowfullscreen"
              />
              </Parallax>
              <Parallax speed={11}><h3>2022</h3></Parallax>
            </div>
            <div className="movie">
            <Parallax speed={10}>
              <YTPlayer id={"ai3GS6Rlano"} />
              {/* <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/ai3GS6Rlano?rel=0&autoplay=0&showinfo=0&controls=0&fullscreen=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="2018"
              /> */}
              </Parallax>
              <Parallax speed={11}><h3>2018</h3></Parallax>
            </div>
            <div className="movie">
            <Parallax speed={10}>
              <iframe
                width="853"
                height="480"
                src={"https://www.youtube.com/embed/ajXYdXiUkWc?rel=0&autoplay=0&showinfo=0&controls=0&fullscreen=1"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="2017"
              /></Parallax>
              <Parallax speed={11}><h3>2017</h3></Parallax>
            </div>
          </div>
          </Parallax>
        </div>
        <Container 
          component={"div"}
          sx={{
            mx:{
              sm:"auto",
              md:0
            },
            bottom:0,
            minWidth:"100vw",
            minHeight:250,
            backgroundColor:"rgb(230,105,30)",
            display:"flex",
            flexDirection:{
              xs:"column-reverse",
              sm:"column-reverse",
              md:"row",
            }
          }}>
          <Container
            sx={{
              px:0,
              ml:0,
              backgroundImage:`url(${bits})`,
              backgroundPosition:"center",
              backgroundSize:"contain",
              backgroundRepeat:"no-repeat",
              height:250,
            }}
          />
          <Typography flexGrow={1}/>
          {/* <Typography sx={{
            width:{
              sm:300,
              md:800,
            },
            mx:{
              sm:"auto",
              md:0
            },
            my:{
              sm:4,
              md:"auto",
            },
            color:"white",
          }}
            fontFamily={"Poppins"}
          >
            Pearl is our annual national cultural fest. Incepted in 2009 as an intra-college
            festival, a year after the foundation, the fest grew into a national level college
            cultural fest with participation from more than 50 colleges
            across India.
          </Typography> */}
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
            <Typography sx={{color:"white", mb:"none", textAlign:"left"}} fontSize={"xx-large"} fontFamily={"Poppins"}>Let's Connect</Typography>
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
        </Container>
      </ParallaxProvider>
    </div>
  );
};

export default Landing;
