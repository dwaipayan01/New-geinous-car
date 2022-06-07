
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import "./Login.css";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { ToastContainer, toast } from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loadding from '../Loadding/Loadding';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,

    ] = useSignInWithEmailAndPassword(auth);

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error1, setError] = useState();
    const handleLoginEmail = event => {
        setEmail(event.target.value);
    }
    const handleLoginPassword = event => {
        setPassword(event.target.value);
    }
    const navigate = useNavigate();
    if (user) {
        navigate(from, { replace: true });
    }
    const handleLoginSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    const handleResetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Your reset email sent");
        }
        else {
            toast("Please enter your email");
        }
    }
    if (loading) {
        return <Loadding></Loadding>
    }
    return (
        <div className="design-login mt-5">
            <h1 className='text-primary text-center mt-5 '>Login</h1>
            <Form onSubmit={handleLoginSubmit} className="w-50 mx-auto mb-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleLoginEmail} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleLoginPassword} type="password" placeholder="Password" required />
                </Form.Group>
                <p className="text-danger">{error?.message}</p>
                <Button className="w-100" variant="primary" type="submit">
                    Login
                </Button>
                <p className=' mt-3'>  New to Genius car? <Link className='text-primary text-decoration-none' to="/signup">Sign up</Link></p>
                <p className=' mt-3'>  Forget Password? <Link onClick={handleResetPassword} className='text-primary text-decoration-none' to="/login">Reset password</Link></p>
                <SocialLogin></SocialLogin>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Login;