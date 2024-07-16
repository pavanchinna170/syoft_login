import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';  // Add this import statement
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    return (
        <Router>
            <Switch>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/login">
                    <Login setUser={setUser} />  // Ensure Login is defined
                </Route>
                <Route path="/dashboard">
                    {user ? <Dashboard user={user} /> : <Redirect to="/login" />}
                </Route>
                <Route path="/">
                    <Redirect to="/signup" />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
