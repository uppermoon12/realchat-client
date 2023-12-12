import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatPage from './Components/ChatPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

