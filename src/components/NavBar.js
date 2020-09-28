import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Navbar } from 'react-bootstrap';

export default class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='p-3'>
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
                <Nav.Link href="#deets">What is PrepTalk?</Nav.Link>
                <Nav.Link href="#memes">Pricing</Nav.Link>
                <Nav.Link href="#memes">Stories</Nav.Link>
                <Nav.Link href="#memes">Meet the Team</Nav.Link>
                <Nav.Link href="#memes">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
};
