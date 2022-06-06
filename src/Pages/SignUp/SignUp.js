import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init"

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const handleName = event => {
        setName(event.target.value);
    }
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }
    if (user) {
        navigate('/');
    }
    const handleSubmit = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Your password did not match");
            return;
        }
        if (password.length < 6) {
            setError("Password must be six chareacter");
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className="design-signup mt-3">
            <h1 className="text-primary text-center mt-5">Sign up</h1>
            <Form onSubmit={handleSubmit} className="w-50 mx-auto mt-3">
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleName} type="name" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p className="text-danger">{error}</p>
                <Button className="w-100" variant="primary" type="submit">
                    Sign up
                </Button>
                <p className="mt-3">Already have an account ? <Link className="text-decoration-none" to="/login">Login</Link></p>
            </Form>
        </div>
    );
};

export default SignUp;