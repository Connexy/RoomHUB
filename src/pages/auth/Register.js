import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PasswordInput from '../../components/PasswordInput';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

export default function Register() {
    const navigate = useNavigate();
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'fullname') {
            setFullname(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        const formData = { fullname, email, password };
        try {
            const response = await axios.post('http://localhost:5000/api/register', formData);
            console.log(response.data.message);
            navigate('/login-page');
        } catch (error) {
            console.error("Registration error", error);
            setError("Registration failed. Please try again.");
        }
    };

    return (
        <div className="main-container">
            <div className="container">
                <div className="Form Register-form">
                    <h2>Register</h2>
                    <form onSubmit={handleRegister}>
                        <TextInput
                            logo='bx bxs-user'
                            label='Full Name'
                            name='fullname'
                            type='text'
                            placeholder='Enter Your Full Name'
                            onChange={handleInputChange}
                        />
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
                            id='register-btn'
                            name='Register'
                            onClick={handleRegister}
                        />
                    </form>
                    <p className="LoginBtn"><Link to='/login-page'>Go back to login</Link></p>
                </div>
            </div>
        </div>
    );
}