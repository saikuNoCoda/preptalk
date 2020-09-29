import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Navbar } from 'react-bootstrap';

export default class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='p-3' sticky="top">
            <Navbar.Brand href="#home">
            <img 
              alt=""
              src="/icon.png"
              width="50"
              height="50"
              className="d-inline-block"
            />{' '}
              PrepTalk</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>

              <Nav>
                <Nav.Link href="#about">What is PrepTalk?</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#testimonial">Stories</Nav.Link>
                <Nav.Link href="#team">Meet the Team</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
};
