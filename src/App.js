import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="signin-wrapper">
          <div className="signin-container">
            <h1>Join Waitlist</h1>
            <form className="signin-form" action="#" method="post">
              <label htmlFor="pincode">Pincode:</label><br />
              <input type="text" id="pincode" name="pincode" required /><br />
              <label htmlFor="service">Nearest Service Ontario:</label><br />
              <select id="service" name="service" required>
                <option value="service1">Service 1</option>
                <option value="service2">Service 2</option>
                <option value="service3">Service 3</option>
                {/* Add more options as needed */}
              </select><br />
              <label htmlFor="name">Name:</label><br />
              <input type="text" id="name" name="name" required /><br />
              <label htmlFor="email">Email Address:</label><br />
              <input type="email" id="email" name="email" required /><br />
              <label htmlFor="phone">Phone Number:</label><br />
              <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required /><br />
              <input type="submit" value="Join Waitlist" />
            </form>
          </div>
        </div>
      </main>
      <footer>
        <nav>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
