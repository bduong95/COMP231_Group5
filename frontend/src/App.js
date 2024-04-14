import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import './App.css';
import JoinWaitList from './components/JoinWaitlist';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="main-content">
          {/* Use Routes instead of Switch */}
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/join" element={<JoinWaitList />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
