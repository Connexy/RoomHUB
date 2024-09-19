import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TextInput from '../../components/TextInput';
import PasswordInput from '../../components/PasswordInput';
import Button from '../../components/Button';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        const formData = { email, password };
        try {
            const response = await axios.post('http://localhost:5000/api/login', formData);
            console.log(response.data.message);
            navigate('/landing-page');
        } catch (error) {
            console.error("Login error", error);
            setError("Login failed. Please check your credentials and try again.");
        }
    };

    return (
        <div className="main-container">
            <div className="container">
                <div className="Form login-form">
                    <h2>Login</h2>
                    <form >
                        <TextInput
                            logo='bx bxs-envelope'
                            label='Email'
                            name='email'
                            type='email'
                            placeholder='Enter Your Email'
                            onChange={handleInputChange}
                        />
                        <PasswordInput
                            logo='bx bxs-lock-alt'
                            label='Password'
                            name='password'
                            placeholder='Enter Your Password'
                            onChange={handleInputChange}
                        />
                        <div className="forgot-section">
                            <span><input type="checkbox" name="remember" id="checked" />Remember Me</span>
                            <span><a href="/">Forgot Password ?</a></span>
                        </div>
                        {error && <p className="error">{error}</p>}
                        <Button
                            id='login-btn'
                            name='Login'
                            onClick={handleLogin}
                        />
                    </form>
                    <p className="RegisterBtn"><Link to='/register-page'>Don't have an account? Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
}