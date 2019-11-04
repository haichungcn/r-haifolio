import React, {useState} from 'react';
import {Form, Button, Col, InputGroup} from 'react-bootstrap';

const ContactForm = () => {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [content, setContent] = useState('');

    function FormExample() {
        

        const handleSubmit = event => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            setValidated(true);
            window.open(`mailto:haichungcn@gmail.com?&body=${content}`);
        };
        return (
            <Form noValidate validated={validated} className="text-left">
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            className="form"
                            required
                            type="text"
                            placeholder="First name"
                            defaultValue="Mark"
                            onChange={(e)=>setFirstName(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            defaultValue="Otto"
                            onChange={(e)=>setLastName(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" required onChange={(e)=>setEmail(e.target.value)} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                    </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Label>Write me something:</Form.Label>
                    <Form.Control as="textarea" rows="6" onChange={(e)=>setContent(e.target.value)} required maxLength={400}  />
                </Form.Row>
                <Form.Group>
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                    />
                </Form.Group>
                <Button type="submit" onClick={(e) => handleSubmit(e)}>Submit form</Button>
            </Form>
        )
    }

    return FormExample();

}

export default ContactForm;
