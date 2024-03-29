import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import NavigationBar from './NavigationBar';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route exact strict path='/' element={<App/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
