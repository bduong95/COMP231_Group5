import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook
import Header from './Header';
import Footer from "./Footer"
import '../styles/SignIn.css';
import logo from '../assets/logo.png'

const SignIn = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3300/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emailOrUsername,
          password,
        }),
      });
      const data = await response.json();
      
      if (response.ok) {
        console.log('Login successful');
        // Redirect to JoinWaitList component upon successful login
        navigate('/');  
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="signin-wrapper">
      <Header />
      <main>
        <div className="signin-container">
          <img src={logo} className='logo' alt="Logo" />
          <form className="signin-form" onSubmit={handleSubmit}>
            <h2>Sign in</h2>
            <p>Stay up to date with waiting</p>
            <input 
              type="text" 
              placeholder="Email or username" 
              value={emailOrUsername} 
              onChange={(e) => setEmailOrUsername(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <a href="#" className="forgot-password">Forgot password?</a>
            <button type="submit">Sign in</button>
            <div className="signup-link">Don't have an account? <a href="/signup">Sign up</a></div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
