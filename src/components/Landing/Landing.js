import React, { useEffect, useRef, useState } from "react";
import "./Landing.css";
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

const Landing = () => {
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
  }, []);

  // const passesClicked = () => {
  //   navigate("/passes");
  // };

  return (
    <div>
      <ScrollContainer>
        <ScrollPage>
          <Animator>
            <div className="landing-container" ref={elementRef}>
              <div className="bg"></div>
              {/* <h4 className="dates">25-27 November</h4> */}
              {/* {scrolling && (
                    <p className="scroll-text">
                      {isTouch.matches ? "SWIPE UP" : "SCROLL DOWN"}
                    </p>
                  )} */}
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
          </Animator>
        </ScrollPage>
        <ScrollPage>
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
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};

export default Landing;
