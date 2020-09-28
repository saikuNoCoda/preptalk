import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col,Card } from 'react-bootstrap';

const CardAbout = ({imgName,title,data}) => {
    return (
        <Col className="mb-5 px-5">
            <Card>
                <Card.Body>
                    <Card.Title>
                    <img
                    alt=""
                    src={imgName}
                    width='100'
                    className="mx-auto"
                    />
                    </Card.Title>
                    <Card.Subtitle className="mb-2 bg-dark text-white p-2">{title}</Card.Subtitle>
                    <Card.Text className="text-muted">{data}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardAbout;