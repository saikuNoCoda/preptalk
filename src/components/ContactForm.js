import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Row,Col,Button,Alert } from 'react-bootstrap';
import * as emailjs from 'emailjs-com';

emailjs.init('user_R1cNpl9DL7glx4NqeGdyw');

const Contact = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [plan,setPlan] = useState("Other...");
    const [message,setMessage] = useState("");
    const [sumbitMessage,setSubmitMessage] = useState("");
    const [show,setShow] = useState(false);
    const [variant,setVariant] = useState("");
    const [loadings,setLoadings] = useState(false);

    useEffect(() => {
        if(sumbitMessage === "Oops, Something went wrong"){
            setShow(true);
            setVariant("danger");
        }else if(sumbitMessage === "Successfully Submitted!!"){
            setShow(true);
            setVariant("success");
        }else {
            setShow(false);
        }
    }, [sumbitMessage]);

    useEffect(() => {
        setSubmitMessage("");
    }, [email,name,mobile,plan,message]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoadings(true);
        setSubmitMessage("");

        var templateParams = {
            from_email: email,
            from_name: name,
            from_mobile: mobile,
            from_plan: plan,
            from_message: message
        };

        emailjs.send(
            'divyanshverma12',
            'template_g3rq2vl',
            templateParams,
        ).then(() => {
            setSubmitMessage("Successfully Submitted!!");
        }).catch((err) => {
            console.log(err);
            setSubmitMessage("Oops, Something went wrong");
        });

        setName("");
        setEmail("");
        setMobile("");
        setPlan("");
        setMessage("");
        setLoadings(false);
    };

    return (
        <div>
            <div className="text-center bg-light p-5">
                <h2>Want to schedule an Interview?</h2>
            </div>

            <Alert className="text-center" variant={variant} show={show}>
                {sumbitMessage}
            </Alert>

            <Form className="p-5 mx-5 text-center" onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="Email">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="hello@email.com" 
                        value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="Name">
                    <Form.Label column sm={2}>
                        Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="name" placeholder="Hello" 
                        value={name} onChange={(e) => setName(e.target.value)} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="Number">
                    <Form.Label column sm={2}>
                        WhatsApp/Mobile
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="XXXXXXXXXX"
                        value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="Plan">
                    <Form.Label column sm={2}>Interview Type</Form.Label>
                    <Col sm={10}>
                        <Form.Control as="select" defaultValue="Other..."
                        value={plan} onChange={(e) => setPlan(e.target.value)} >
                            <option>Other....</option>
                            <option>1 DSA</option>
                            <option>3 DSA</option>
                            <option>1 HR</option>
                            <option>1 DSA + 1 HR</option>
                            <option>2 DSA + 1 HR</option>
                            <option>3 DSA (Difficult)</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="Message">
                    <Form.Label column sm={2}>
                        Query
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Any Query regarding us."
                        value={message} onChange={(e) => setMessage(e.target.value)} />
                    </Col>
                </Form.Group>
        
                <Button type="submit" disabled={loadings}>
                    Submit
                </Button>
                
            </Form>
        </div>
    );
};

export default Contact;
