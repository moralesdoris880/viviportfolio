import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './pages/App';
import NavigationBar from './components/NavigationBar';
import About from './pages/About';
import Projects from './pages/Projects';
import Designs from './pages/Designs';
import Blog from './pages/Blog';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavigationBar />
    <Routes>  
      <Route exact strict path='/' element={<App/>} /> 
      <Route exact path='/projects' element={<Projects/>} />
      {/* <Route exact path='/designs' element={<Designs/>} />
      <Route exact path='/blog' element={<Blog/>} />
      <Route exact path='/about' element={<About/>} /> */}
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
