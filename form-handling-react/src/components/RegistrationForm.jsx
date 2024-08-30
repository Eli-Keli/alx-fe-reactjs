/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username) setErrors('Username is required');
        if (!email) setErrors('Email is required');
        if (!password) setErrors('Password is required');
        else {
            console.log('Form submitted successfully!');
            setErrors('');
            setUsername('');
            setEmail('');
            setPassword('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {errors && <div>{errors}</div>}
            <button type="submit">Register</button>
        </form>
    );
}

export default RegistrationForm;