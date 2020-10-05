import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Row,Col,Button,Alert } from 'react-bootstrap';
import * as emailjs from 'emailjs-com';
import validator from 'validator';
emailjs.init('user_JgeJ08agvsaeL2W1uyGYC');

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
        if(sumbitMessage === "Successfully Submitted!!"){
            setShow(true);
            setVariant("success");
        }else if(sumbitMessage.length > 0){
            setShow(true);
            setVariant("danger");
        }else {
            setShow(false);
        }
    }, [sumbitMessage]);

    useEffect(() => {
        setSubmitMessage("");
    }, [email,name,mobile,plan,message]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!validator.isEmail(email)){

            setSubmitMessage("Please enter correct Email Address");
            
        }else if(name.length <= 0){

            setSubmitMessage("Please enter your name");

        }else if(!validator.isMobilePhone(mobile)){

            setSubmitMessage("Please enter valid mobile number");

        }else if(message.length <= 0){

            setSubmitMessage("Enter link to your resume");
        
        }
        else {
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
                'preptalks1',
                'template_3h0hyz9',
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
        }

    };

    return (
        <div id="contact">
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
                            <option>Other.... </option>
                            <option>Free Mock</option>
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
                        Resume
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Link to your resume"
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
