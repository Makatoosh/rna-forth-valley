import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WelfarePage from './pages/WelfarePage';
import CommitteePage from './pages/CommitteePage';
import EventsPage from './pages/EventsPage';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/welfare" element={<WelfarePage />} />
          <Route path="/committee" element={<CommitteePage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
