import { React, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import "./NavbarNew.css";
import { Box, Button } from "@mui/material";

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
	return (
		<Box
			sx={{
				position: "absolute",
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
			<Button sx={styles} variant={"text"} href="/">
				Home
			</Button>
			<Button sx={styles} variant={"text"} href="/events">
				Events
			</Button>
			<Button sx={styles} variant={"text"} href="/gallery">
				Gallery
			</Button>
			<Button sx={styles} variant={"text"} href="/passes">
				Passes
			</Button>
			<Button sx={styles} variant={"text"} href="/proshows">
				ProShows
			</Button>
			<Button sx={styles} variant={"text"} href="/sponsors">
				Sponsors
			</Button>
		</Box>
	);
}

export default NavbarMain;
