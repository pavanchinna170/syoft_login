import React, { useState } from 'react';
import './Login.css';

const Login = ({ setUser }) => {
    const [formData, setFormData] = useState({
        user_email: '',
        user_password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://syoft.dev/Api/userlogin/api/userlogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('user', JSON.stringify(data));
                setUser(data);
                // Redirect to dashboard page
            } else {
                alert('Login failed!');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h2>Log In</h2>
                <input type="email" name="user_email" placeholder="Email address" value={formData.user_email} onChange={handleChange} required />
                <input type="password" name="user_password" placeholder="Password" value={formData.user_password} onChange={handleChange} required />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;
