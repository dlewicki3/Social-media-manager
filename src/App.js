// App.js
import React from 'react';
import './components/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Podstrona from './components/Podstrona';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podstrona" element={<Podstrona />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
