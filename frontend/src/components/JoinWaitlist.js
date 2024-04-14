import Header from './Header';
import Footer from './Footer';
import '../styles/JoinWaitlist.css';

const JoinWaitList =() => {
    return (
        <div className="JoinWaitList">
        <Header />
        
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
                <input type="submit" value="Join Waitlist" className="circular-button-join" />
              </form>
            </div>
          </div>
        
       <Footer />
      </div>
    );
};

export default JoinWaitList;