import React, { useEffect, useRef, useState } from "react";
import "./Landing.css";
import bits from "./bits-img.png";
import { useNavigate } from "react-router-dom";
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
import YTPlayer from "../YoutubePlayer/YoutubePlayer";
import { LinkContainer } from "react-router-bootstrap";
import Footer from "./Footer";
import myVideo from "../../assets-pearl/trimed reveal.mov";
import buildings from "./Building_website.png";

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
	const videoRef = useRef(null);
	const [leaving, setLeaving] = useState(true);
	const [scrolling, setScrolling] = useState(true);
	const { scrollYProgress } = useScroll();
	let isMobile = window.matchMedia("(max-width: 480px)");
	let isTouch = window.matchMedia("(max-width: 1024px)");

	const [days, setDays] = useState("");
	const [hours, setHours] = useState("");
	const [minutes, setMins] = useState("");
	const [seconds, setSeconds] = useState("");

	const [playedOnce, setPlayedOnce] = useState(false);

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
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			clearInterval(interval);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		if (playedOnce) {
			const height = window.innerHeight;
			window.scrollBy({
				top: height,
				left: 0,
				behavior: "smooth",
			});
		}
	}, [playedOnce]);

	// const passesClicked = () => {
	//   navigate("/passes");
	// };

	return (
		<div>
			<div className="bg"></div>
			<ParallaxProvider>
				<div className="landing-container">
					{
						<video
							src={"https://atoms-video.vercel.app/My%20Movie.mp4"}
							autoPlay={true}
							ref={videoRef}
							muted
							playsInline
							controls={false}
							loop={false}
							style={{
								position: "absolute",
								width: "100vw",
								height: "100vh",
								left: "0%",
								top: "0%",
								objectFit: "contain",
							}}
							typeof="video/mov"
							onEnded={() => {
								setPlayedOnce(true);
								//videoRef.current.play();
							}}
						/>
					}
					{/* <img
						src={buildings}
						className={`buildings ${playedOnce && "bring-up"}`}
					/> */}
				</div>

				<div>
					<p className="m-4 p-2 text-2xl">
						Pearl is the annual national cultural fest of BITS Pilani, Hyderabad
						Campus. Incepted in 2009 as an intra-college festival, a year after
						the foundation of BITS Pilani, Hyderabad, the fest grew into a
						national level college cultural fest with participation from more
						than 50 colleges across India. This year's travel theme is just one
						more reason to look forward to the annual cultural fest that we know
						and adore.
						<br />
					</p>
				</div>

				{/* <Box
                    sx={{
                        width: "100vw",
                        height: "100vh",
                    }}
                ></Box>
                <div className="landing-desc-container">
                    <p className="landing-desc">
                        Pearl is the annual national cultural fest of BITS
                        Pilani, Hyderabad Campus. Incepted in 2009 as an
                        intra-college festival, a year after the foundation of
                        BITS Pilani, Hyderabad, the fest grew into a national
                        level college cultural fest with participation from more
                        than 50 colleges across India. This year's travel theme
                        is just one more reason to look forward to the annual
                        cultural fest that we know and adore.
                        <br />
                    </p>
                    <div className="landing-btn">
                        <Button variant="landing" size="lg" href="/events">
                            REGISTER
                        </Button>
                    </div>
                </div> */}

				<div className="after-movies">
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
								<Parallax speed={11}>
									<h3>2022</h3>
								</Parallax>
							</div>
							<div className="movie">
								<Parallax speed={10}>
									<YTPlayer id={"ai3GS6Rlano"} />
								</Parallax>
								<Parallax speed={11}>
									<h3>2018</h3>
								</Parallax>
							</div>
							<div className="movie">
								<Parallax speed={10}>
									<iframe
										width="853"
										height="480"
										src={
											"https://www.youtube.com/embed/ajXYdXiUkWc?rel=0&autoplay=0&showinfo=0&controls=0&fullscreen=1"
										}
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
										title="2017"
									/>
								</Parallax>
								<Parallax speed={11}>
									<h3>2017</h3>
								</Parallax>
							</div>
						</div>
					</Parallax>
				</div>
				<Footer />
			</ParallaxProvider>
		</div>
	);
};

export default Landing;
