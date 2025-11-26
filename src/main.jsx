// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage.jsx';
import AuthPage from './pages/AuthPage.jsx'; // make sure this path is correct
import MorePage from './pages/MorePage.jsx';
import CookingPage from './pages/CookingPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/more" element={<MorePage/>} />
        <Route path="/cooking" element={<CookingPage/>} />
      </Routes>
    </Router>
  </StrictMode>
);
