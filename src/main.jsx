import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import App from './App.jsx'; 
import { BrowserRouter } from 'react-router-dom'; 
import '../css/main.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* Detecte errors during website developpement */}
    <BrowserRouter> {/* Allow navigation without reloading */}
      <App /> {/* Component that contain the website */}
    </BrowserRouter>
  </React.StrictMode>
);

