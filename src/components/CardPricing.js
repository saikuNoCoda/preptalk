import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col,Card } from 'react-bootstrap';

const CardPricing = ({price,about}) => {
    return (
        <Col sm={4} className="mb-5 px-5">
            <Card>
                <Card.Body>
                    <Card.Title>
                    <img
                    alt=""
                    src="/rupee.png"
                    width='40'
                    className="mx-auto"
                    /> <h1 className="font-weight-bold">{price}</h1>
                    </Card.Title>
                    <Card.Text className="p-3">
                        <ul class="list-group list-group-flush">
                        {
                            about.map(item => (
                                <li class="list-group-item">{item}</li>
                            ))
                        }
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardPricing;