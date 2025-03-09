import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ваш основной компонент

// Создаём корневой элемент
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим приложение
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);