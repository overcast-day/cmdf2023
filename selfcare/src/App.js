import './App.css';
import React from 'react'
import {Routes, Route} from 'react-router-dom'

import StartPage from './pages/StartPage'
import Dashboard from './pages/Dashboard'
import SchedulePage from './pages/SchedulePage'
import BreathingActivity from './pages/BreathingActivity'
import PageNotFound from './pages/404'

import Navbar from './components/header/header';

function App() {
  return (
    <Routes>
      <Navbar />
      <Route path="/" element={<StartPage/>}/>
      <Route path="/schedule" element={<SchedulePage/>}/>
      <Route path="/breathing_activity" element={<BreathingActivity/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  );
}

export default App;
