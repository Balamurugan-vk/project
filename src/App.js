import logo from './logo.svg';
import './App.css';
import React from 'react'
import LandingPage from './LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Boat from './Boat';
import FireBolt from './FireBolt';
import Noise from './Noise';
import Gizmore from './Gizmore';
// import LandingPage from './LandingPage';



function App() {
  return (
    <div >
      {/* <BrowserRouter> */}
      <Routes>
        <Route path='/' element={ <LandingPage /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/boat' element={ <Boat /> } />
        <Route path='/firebolt' element={ <FireBolt /> } />
        <Route path='/noise' element={ <Noise /> } />
        <Route path='/gizmore' element={ <Gizmore /> } />
        <Route path='/landingpage' element={ <LandingPage /> } />
      </Routes>
      {/* </BrowserRouter> */}
      {/* <LandingPage/> */}
      
    </div>
  );
}

export default App;
