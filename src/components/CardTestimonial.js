import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Badge } from 'react-bootstrap';

const CardTestimonial = ({name,college,link,description,offers}) => {
    return (
        <Card className="text-center mx-auto p-2" style={{border: 'rounded-circle'}}>
            <Card.Body>
                <Card.Title>
                <a href={"https://www.linkedin.com/in/" + link} target="_blank" rel="noopener noreferrer">
                <img
                    alt="po"
                    src="/linkedin.png"
                    width='50'
                    className="mx-auto mb-4"
                />
                </a>
                <br></br>
                &#8281;{name}&#8281;</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{college}</Card.Subtitle>
                <Card.Text className="p-3">  <div className="mb-2">&#8284; {description} &#8284;  </div>
                
                {
                    offers.map(company => (
                        <Badge className="mx-1" pill variant="success">{company}</Badge>
                    ))
                }     
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardTestimonial;