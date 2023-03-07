import { React, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./NavbarNew.css";

function NavbarMain({ page=null}) {
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
  useEffect(()=>{
    if(page){
      setNavBg(true)
    }
  },[page])
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
      style={{ 
        position: "fixed",
        fontFamily:"Poppins" 
        }}
    >
      <Container>
        <Navbar.Brand href="/">
        <div className="wrapper">
          <img
            src={require(`../../assets-pearl/Pearl_logo2023.png`)}
            // width="160"
            // height="130"
            className="d-inline-block align-top logoimg"
          /></div>
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
            <LinkContainer to="/events">
              <Button
                variant="custom"
                onClick={() => {
                  setExpanded(false);
                  setNavBg(false);
                }}
              >
                EVENTS
              </Button>
            </LinkContainer>
            <LinkContainer to="/passes">
              <Button
                variant="custom"
                onClick={() => {
                  setExpanded(false);
                  setNavBg(false);
                }}
              >
                PASSES
              </Button>
            </LinkContainer>
            <LinkContainer to="/proshows">
              <Button
                variant="custom"
                onClick={() => {
                  setExpanded(false);
                  setNavBg(false);
                }}
              >
                PROSHOWS
              </Button>
            </LinkContainer>
            <LinkContainer to="/Accommodations">
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
            {/* <LinkContainer to="/Competitions">
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
            <LinkContainer to="/talks">
              <Button
                variant="custom"
                onClick={() => {
                  setExpanded(false);
                  setNavBg(false);
                }}
              >
                TALKS
              </Button>
            </LinkContainer> */}
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
            {/* <LinkContainer to="/events">
              <Button
                variant="custom"
                onClick={() => {
                  setExpanded(false);
                  setNavBg(false);
                }}
              >
                REGISTRATIONS
              </Button>
            </LinkContainer> */}
            
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
