import React from 'react';
import SignIn from './components/SignIn';
import './App.css'; // This should contain global styles

function App() {
  return (
    <div className="container">
      <header>
        {/* Header content goes here */}
      </header>
      <div className="main-content">
        <SignIn />
      </div>
      <footer>
        {/* Footer content goes here */}
      </footer>
    </div>
  );
}

export default App;
