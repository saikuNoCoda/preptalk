import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row } from 'react-bootstrap';
import pricingData from "../data/pricingData";
import CardPricing from "./CardPricing";

const Pricing = () => {

    const getListOfList = () => {
        var content = [];
        var tempContent = [];

        for(var i=0;i<pricingData.length;i++){
            if(i%3 === 0){
                content.push(tempContent);
                tempContent = [];
            }
            tempContent.push(pricingData[i]);
        }

        if(tempContent.length) content.push(tempContent);

        return content;
    };

    return (
        <div className="bg-light" id="pricing">
            <div className="text-center bg-white p-5">
                <h2>Features and Pricing</h2>
            </div>

            <Container className="mt-5">
                {
                    getListOfList().map(row => (
                        <Row className="text-center">
                            {
                                row.map(col => (
                                    <CardPricing key={col.id} {...col} />
                                ))
                            }
                        </Row>
                    ))
                }
            </Container>
        </div>
    );
}

export default Pricing;
