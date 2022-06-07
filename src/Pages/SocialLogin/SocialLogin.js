import React from 'react';
import { ImGoogle } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Navigate, useNavigate } from 'react-router-dom';
import Loadding from '../Loadding/Loadding';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    let errorElement;
    if (error || error1) {

        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {error1.message}</p>
        </div>

    }

    const navigate = useNavigate();
    if (user || user1) {
        navigate("/");
    }
    if (loading || loading1) {
        return <Loadding></Loadding>
    }
    const handleGoogle = () => {
        signInWithGoogle();
    }
    const handleGithub = () => {
        signInWithGithub();
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            </div>
            {errorElement}
            <div>
                <button onClick={handleGoogle} className="btn btn-primary w-100"><ImGoogle /> Google Sign in</button>
                <button onClick={handleGithub} className="btn btn-primary w-100 mt-3 mb-3"><FaGithub /> Github Sign in</button>
            </div>
        </div>

    );
};

export default SocialLogin;