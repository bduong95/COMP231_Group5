import React from 'react';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="signin-wrapper">
      <header>
  <nav className="nav-left">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
  <nav className="nav-right">
    <ul>
      <li><a href="/signin">Signin/Signup</a></li>
    </ul>
  </nav>
</header>
      <main>
        <div className="signin-container">
          <h1>WaitOntario</h1>
          <form className="signin-form">
            <h2>Sign in</h2>
            <p>Stay update date with waiting</p>
            <input type="text" placeholder="Email or username" />
            <input type="password" placeholder="Password" />
            <a href="#" className="forgot-password">Forgot password?</a>
            <button type="submit">Sign in</button>
            <div className="signup-link">Don't have account? <a href="/signup">Sign up</a></div>
          </form>
        </div>
      </main>
      <footer>
        <a href="#">Report Issue</a>
      </footer>
    </div>
  );
};

export default SignIn;
