import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row } from 'react-bootstrap';
import CardTeam from "./CardTeam";
import teamData from "../data/teamData";

const Team = () => {

    const getListOfList = () => {
        var content = [];
        var tempContent = [];

        for(var i=0;i<teamData.length;i++){
            if(i%4 === 0){
                content.push(tempContent);
                tempContent = [];
            }
            tempContent.push(teamData[i]);
        }

        if(tempContent.length) content.push(tempContent);

        return content;
    };

    return (
        <div className="w-10" id="team">
            <div className="text-center bg-light p-5">
                <h2>Our Team</h2>
            </div>

            <Container className="mt-4">
                {
                    getListOfList().map(row => (
                        <Row>
                            {
                                row.map(col => (
                                    <CardTeam key={col.id} {...col} />
                                ))
                            }
                        </Row>
                    ))
                }
            </Container>
        </div>
    );
}

export default Team;