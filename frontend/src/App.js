import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext'; // Assuming AuthProvider is used to manage authentication state
import Header from './components/Header';
import SignIn from './components/SignIn';
import HomePage from './components/HomePage';
import './App.css';
import JoinWaitList from './components/JoinWaitlist';

function App() {
  return (
    <AuthProvider> {/* Assuming AuthProvider manages authentication state */}
      <Router>
        <div className="container">
          <Header />
          <div className="main-content">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/join" element={<JoinWaitList />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
