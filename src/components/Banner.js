import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Col,Row,Button } from 'react-bootstrap';

export default class Banner extends Component {
    render() {
        return (
        <Container className="my-3">
            <Row>
            <Col sm={2}></Col>
        
            <Col sm={4} className="text-center text-md-left mt-5 mx-4">
                <h1>Here Comes the PrepTalk!!!</h1>
                <h4 className="text-muted mt-4">The best and most efficent way to prepare for your upcoming technical interviews.
                Helps you prepare for every level of technical interviews</h4>
                <a href="#contact">
                <Button variant="dark" className="my-4">Try It Out</Button>
                </a>
            </Col>
        
            <Col sm={4} className="p-5 mt-5">
                <img
                alt=""
                src="/interview.png"
                width='100%'
                className="mx-auto"
                />
            </Col>

            </Row>
        </Container>
        );
    }
};
