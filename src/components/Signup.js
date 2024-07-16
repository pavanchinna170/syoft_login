import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        user_firstname: '',
        user_email: '',
        user_phone: '',
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

        const payload = {
            ...formData,
            user_lastname: 'ni',
            user_city: 'Hyderabad',
            user_zipcode: '500072'
        };

        try {
            const response = await fetch('https://syoft.dev/Api/user_registeration/api/user_registeration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                alert('Registration successful!');
                // Redirect to login page or another page
            } else {
                alert('Registration failed!');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-left">
                <h2>Welcome to our community</h2>
                <p>Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today.</p>
                <p>More than 17K people joined us, it's your turn</p>
            </div>
            <div className="signup-right">
                <form onSubmit={handleSubmit}>
                    <h2>Sign up</h2>
                    <input type="text" name="user_firstname" placeholder="Full name" value={formData.user_firstname} onChange={handleChange} required />
                    <input type="email" name="user_email" placeholder="Email address" value={formData.user_email} onChange={handleChange} required />
                    <input type="password" name="user_password" placeholder="Password" value={formData.user_password} onChange={handleChange} required />
                    <input type="text" name="user_phone" placeholder="Phone number" value={formData.user_phone} onChange={handleChange} required />
                    <button type="submit">Create your free account</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
