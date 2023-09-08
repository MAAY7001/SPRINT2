import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './componentes/card/Card.jsx';
import Footer from './componentes/footer/Footer.jsx';
import Transferencias from './transferencias/index.js';
import Header from './componentes/header/Header.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
