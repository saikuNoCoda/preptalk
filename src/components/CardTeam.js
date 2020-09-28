import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col,Card,Badge } from 'react-bootstrap';

const CardTeam = ({name,profile,linkLink,linkFace,offers}) => {
    return (
        <Col className="mb-5 px-5 text-center">
            <Card border="light">
                <Card.Body>
                    <Card.Title>
                    <div className="mb-3">
                    <a href={"https://www.linkedin.com/in/" + linkLink} target="_blank" rel="noopener noreferrer">
                    <img
                    alt=""
                    src="linkedin.png"
                    width='30'
                    className="mx-2"
                    />
                    </a>
                    <a href={"https://www.facebook.com/" + linkFace} target="_blank" rel="noopener noreferrer">
                    <img
                    alt=""
                    src="facebook.png"
                    width='30'
                    className="mx-2"
                    />
                    </a>
                    </div>
                    &#8281;{name}&#8281;
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted p-2">{profile}</Card.Subtitle>
                    <Card.Text>
                        <div className="my-2">
                            - Offers from - 
                        </div>
                    {
                        offers.map(company => (
                            <Badge className="mx-1" pill variant="success">{company}</Badge>
                        ))
                    }     
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardTeam;