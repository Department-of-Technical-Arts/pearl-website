import { React, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./NavbarNew.css";

function NavbarMain() {
  const [navbg, setNavBg] = useState(false);
  const changeNavBg = () => {
    window.scrollY >= 8 ? setNavBg(true) : setNavBg(false);
  };
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      //   bg="light"
      variant="light"
      // bg={navbg ? "white" : ""}
      bsPrefix={
        navbg ? " navbar navbar-expand-lg add" : "navbar navbar-expand-lg"
      }
      expanded={expanded}
      style={{ position: "fixed" }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={require(`../../assets-pearl/Pearl_logo2023.png`)}
            width="160"
            height="90"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => {
            setNavBg(true);
            setExpanded(expanded ? false : "expanded");
          }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4">
            <LinkContainer to="/Competitions">
              <Button
                variant="custom"
                onClick={() => {
                  setExpanded(false);
                  setNavBg(false);
                }}
              >
                COMPETITIONS
              </Button>
            </LinkContainer>
            <LinkContainer to="/Workshops">
              <Button
                variant="custom"
                onClick={() => {
                  setExpanded(false);
                  setNavBg(false);
                }}
              >
                WORKSHOPS
              </Button>
            </LinkContainer>
            <LinkContainer to="/Sponsors">
              <Button
                variant="custom"
                onClick={() => {
                  setExpanded(false);
                  setNavBg(false);
                }}
              >
                SPONSORS
              </Button>
            </LinkContainer>
            <LinkContainer to="/Gallery">
              <Button
                variant="custom"
                onClick={() => {
                  setExpanded(false);
                  setNavBg(false);
                }}
              >
                GALLERY
              </Button>
            </LinkContainer>
            <LinkContainer to="/Workshops">
              <Button
                variant="custom"
                onClick={() => {
                  setExpanded(false);
                  setNavBg(false);
                }}
              >
                REGISTRATIONS
              </Button>
            </LinkContainer>
            <LinkContainer to="/Workshops">
              <Button
                variant="custom"
                onClick={() => {
                  setExpanded(false);
                  setNavBg(false);
                }}
              >
                ACCOMODATIONS
              </Button>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
