import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import './global.css'
 

ReactDOM.render(
  <BrowserRouter>
    <Router>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
    </Router>
  </BrowserRouter>,
  document.getElementById('root')
);
 
