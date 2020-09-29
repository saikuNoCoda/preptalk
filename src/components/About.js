import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row } from 'react-bootstrap';
import CardAbout from './CardAbout';
import aboutData from "../data/aboutData";

const About = () => {

    const getListOfList = () => {
        var content = [];
        var tempContent = [];

        for(var i=0;i<aboutData.length;i++){
            if(i%3 === 0){
                content.push(tempContent);
                tempContent = [];
            }
            tempContent.push(aboutData[i]);
        }

        if(tempContent.length) content.push(tempContent);

        return content;
    };

    return (
        <div id="about">
            <div className="text-center bg-light p-5">
                <h2>What is PrepTalk?</h2>
            </div>

            <Container className="mt-5">
                {
                    getListOfList().map(row => (
                        <Row className="text-center">
                            {
                                row.map(col => (
                                    <CardAbout key={col.id} {...col} />
                                ))
                            }
                        </Row>
                    ))
                }
            </Container>
        </div>
    );
};

export default About;
