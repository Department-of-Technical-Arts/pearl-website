import { React, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import "./NavbarNew.css";
import { Box, Button, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

function NavbarMain({ page = null }) {
	const styles = {
		fontFamily: "TAN-Pearl",
		color: "rgb(180, 50,50)",
		fontStretch: "expanded",
		letterSpacing: "2px",
		fontSize: "30px",
		fontWeight: "bold",
		"&:hover": {
			color: "initial",
		},
	};
	const isMobile = useMediaQuery("(max-width: 480px)", "(max-width: 480px)");
	return (
		<Box
			sx={{
				position: "fixed",
				width: "100vw",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				zIndex: 1,
				top: 0,
				left: 0,
				height: "100px",
			}}
		>
			<Button sx={styles} variant={"text"}>
				<Link to="/" style={styles} variant={"text"}>
					Home
				</Link>
			</Button>
			<Button sx={styles} variant={"text"}>
				<Link to="/events" style={styles} variant={"text"}>
					Events
				</Link>
			</Button>
			<Button sx={styles} variant={"text"}>
				<Link to="/gallery" style={styles} variant={"text"}>
					Gallery
				</Link>
			</Button>
			<Button sx={styles} variant={"text"}>
				<Link to="/passes" style={styles} variant={"text"}>
					Passes
				</Link>
			</Button>
			{!isMobile ? (
				<>
					<Button sx={styles} variant={"text"}>
						<Link to="/proshows" style={styles} variant={"text"}>
							ProShows
						</Link>
					</Button>
					<Button sx={styles} variant={"text"}>
						<Link to="/sponsors" style={styles} variant={"text"}>
							Sponsors
						</Link>
					</Button>
				</>
			) : (
				<></>
			)}
		</Box>
	);
}

export default NavbarMain;
