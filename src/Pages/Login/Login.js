
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    return (
        <div className="design-login mt-5">
            <h1 className='text-primary text-center mt-5 '>Login</h1>
            <Form className="w-50 mx-auto mb-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p className='text-center mt-3'>  New to Genius car? <Link className='text-primary text-decoration-none' to="/signup">Sign up</Link></p>
            </Form>

        </div>
    );
};

export default Login;