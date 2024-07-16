import React from 'react';
import './Dashboard.css';

const Dashboard = ({ user }) => {
    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <p>Welcome, {user.user_firstname}</p>
            <p>Email: {user.user_email}</p>
            <p>Phone: {user.user_phone}</p>
            {/* Add more user information as needed */}
        </div>
    );
};

export default Dashboard;
