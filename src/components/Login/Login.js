import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle,signInUsingGithub} = useAuth();
    return (
        <div>
            <h2>Please Login in</h2>
            <button className="btn-1" onClick={signInUsingGoogle}>Google Sign In</button>
            &nbsp;
            <button className="btn-2" onClick={signInUsingGithub}>Github Sign in</button>
            <br />
            <Link className="user" to="/register">New User</Link>
        </div>
    );
};

export default Login;