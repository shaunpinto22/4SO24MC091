import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StockPage from './pages/StockPage';
import CorrelationHeatmapPage from './pages/CorrelationHeatmapPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<StockPage />} />
          <Route path="/correlation-heatmap" element={<CorrelationHeatmapPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;