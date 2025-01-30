import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './style.css';
import App from './App.jsx';
import Navbar from './Components/Navbar.jsx';
import Sidebar from './Components/Sidebar.jsx';
import Footer from './Components/Footer.jsx';
import Tabe from './Components/Tabe.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div id="app-container">
      <Tabe />
      <Navbar />
      <div id="main-content">
        <Sidebar />
        <App />
      </div>
      <Footer />
    </div>
  </StrictMode>
);
