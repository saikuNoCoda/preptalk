import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import CardTestimonial from "./CardTestimonial";
import userData from "../data/userData";

const Testimonial = () => {
    return (
        <div className="w-10" id="testimonial">
            <div className="text-center p-5">
                <h2>Successful Engineers</h2>
            </div>
            <Carousel interval={2000} className="p-5 bg-light" style={{color: "black"}} indicators={false}>

                {
                    userData.map(user => (
                        <Carousel.Item>
                            <CardTestimonial key={user.id} {...user} />
                        </Carousel.Item>
                    ))
                }
                
            </Carousel>
        </div>
    );
}

export default Testimonial;