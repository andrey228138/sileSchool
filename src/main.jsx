import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Импортируйте BrowserRouter
import App from './App'; // Ваш основной компонент

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Оберните App в BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);