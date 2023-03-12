import './App.css';
import React from 'react'
import {Route, Switch} from 'react-router-dom'

import StartPage from './pages/StartPage'
import Dashboard from './pages/Dashboard'
import SchedulePage from './pages/SchedulePage'
import BreathingActivity from './pages/BreathingActivity'
import PageNotFound from './pages/404'


function App() {
  return (
    <Routes>
      <Route path="/components" element={<Components/>}/>
      <Route path="/start" element={<StartPage/>}/>
      <Route path="/schedule" element={<SchedulePage/>}/>
      <Route path="/breathing_activity" element={<BreathingActivity/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/404" element={<PageNotFound/>}/>
    </Routes>
  );
}

export default App;
