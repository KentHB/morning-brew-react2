import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Button, Col, Row, Container, Nav, Navbar } from 'react-bootstrap';
import { Instagram } from 'react-bootstrap-icons';

function topImage() {
  return (
    <Container fluid style={{padding: '30px'}} className="text-center">
      <img src="https://courses.ics.hawaii.edu/ics314s24/morea/ui-frameworks/morning-brew-hawaii-logo-black.png" alt={"morning-brew-logo"}></img>
    </Container>
  )
}

function topNavbar() {
  return (
    <Navbar>
      <Container style={{marginTop: '-10px'}} className="justify-content-center">
        <Nav className="navbar navbar-expand-lg custom-nav-link">
          <Nav.Link className="active border-3 border-top border-dark nav-item">
            <div style={{marginLeft: '10px', marginRight: '10px'}}>Home</div></Nav.Link>
          <Nav.Link className="border-1 border-top border-dark nav-item">
            <div style={{marginLeft: '10px', marginRight: '10px'}}>Order Online</div></Nav.Link>
          <Nav.Link className="border-1 border-top border-dark nav-item">
            <div style={{marginLeft: '10px', marginRight: '10px'}}>Menus</div></Nav.Link>
          <Nav.Link className="border-1 border-top border-dark nav-item">
            <div style={{marginLeft: '10px', marginRight: '10px'}}>Locations</div></Nav.Link>
          <Nav.Link className="border-1 border-top border-dark nav-item">
            <div style={{marginLeft: '10px', marginRight: '10px'}}>About</div></Nav.Link>
          <Nav.Link className="border-1 border-top border-dark nav-item">
            <div style={{marginLeft: '10px', marginRight: '10px'}}>Shop</div></Nav.Link>
          <Nav.Link className="border-1 border-top border-dark nav-item">
            <div style={{marginLeft: '10px', marginRight: '10px'}}>Contact</div></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

function midPhoto() {
  return (
    <div className="brew-bg">
      <div className="container colorblocktop">
        <div className="aloha-text">Aloha</div>
        <div className="aloha-text" style={{fontSize: '19.3px', bottom: '385px'}}>Morning Brew Hawai'i</div>
        <div className="aloha-text" style={{fontSize: '19.3px', color: 'red', bottom: '350px'}}>Kailua and Kaka'ako, O'ahu</div>
        <Button style={{position: 'absolute', left: '414px', bottom: '308px'}} variant="danger">
          <div className="aloha-buttons">ORDER ONLINE</div></Button>
        <Button style={{position: 'absolute', left: '580px', bottom: '308px'}} variant="danger">
          <div className="aloha-buttons">OUR MENUS</div></Button>
      </div>
    </div>
  );
}

function footerText() {
  return (
    <footer className="mt-auto py-3 bg-light">
      <Container>
        <Row>
          <Col className="text-center">
            <div style={{fontSize: '23px', marginTop: '-10px'}}>MORNING BREW KAILUA</div>
            <div style={{fontSize: '16px', marginTop: '8px'}}>600 Kailua Rd, Kailua, HI 96734<br />
              (808) 262-7770<br />mb.crew22@gmail.com</div>
            <div style={{marginTop: '18px'}}><Instagram size="25px" /></div>
          </Col>
          <Col className="text-center">
            <div style={{fontSize: '23px', marginTop: '-10px'}}>MORNING BREW KAKA'AKO</div>
            <div style={{fontSize: '16px', marginTop: '8px'}}>685 Auahi St #113 Honolulu, HI 96813<br />
              (808) 369-3444<br />mbkakaako@gmail.com</div>
            <div style={{marginTop: '18px'}}><Instagram size="25px" /></div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

const Logo = () => (
  topImage()
);

const TopMenu = () => (
  topNavbar()
);

const MiddleImage = () => (
  midPhoto()
);

const BottomFooter = () => (
  footerText()
);

const MorningBrew = () => (
  <div>
    <Logo />
    <TopMenu />
    <MiddleImage />
    <BottomFooter />
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(<StrictMode><MorningBrew /></StrictMode>);