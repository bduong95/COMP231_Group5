import React from 'react';
import Header from './Header';
import Footer from "./Footer"
import '../styles/SignIn.css';
import logo from '../assets/logo.png'

const SignIn = () => {
  return (
    <div className="signin-wrapper">
      <Header />
      <main>
        <div className="signin-container">
          <img src={logo} className='logo' alt="Logo" />
          <form className="signin-form">
            <h2>Sign in</h2>
            <p>Stay up to date with waiting</p>
            <input type="text" placeholder="Email or username" />
            <input type="password" placeholder="Password" />
            <a href="#" className="forgot-password">Forgot password?</a>
            <button type="submit">Sign in</button>
            <div className="signup-link">Don't have account? <a href="/signup">Sign up</a></div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
