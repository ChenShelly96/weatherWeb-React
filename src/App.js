import React from "react";

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages';
import Favorites from "./pages/favorites.js";
function App() {
 
  return (
    
    <div className="App">
      
      <Router>
            <Navbar />
            <Routes>
                <Route exact path='/'  element={<Home />} index />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/home' element={<Home />} />
                </Routes>
        
        </Router>
      </div>
  );
}

export default App;
