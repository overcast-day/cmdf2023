import './App.css';
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Components} from './components'

import StartPage from './pages/StartPage'
import Dashboard from './pages/Dashboard'
import SchedulePage from './pages/SchedulePage'
import BreathingActivityPage from './pages/BreathingActivity'


function App() {
  return (
    <Routes>
      <Route path="/components" element={<Components/>}/>
      <Route path="/start" element={<StartPage/>}/>
      <Route path="/schedule" element={<SchedulePage/>}/>
      <Route path="/breathing_activity" element={<BreathingActivity/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  );
}

export default App;
