import '../App.css';
import React from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

export default function StartPage() {
    return (
        <div className="Start">
        <div>
            <h1>Let's start your work day!</h1>
            <h4>Select the activities you want to include:</h4>
            <Button href="/breathing_activity">Breathing Activity</Button>
            <br />
            <h4>How many hours are you working for?</h4>
            <input name="numHours" />
            <h4>How often do you want a break?</h4>
            <input name="numBreaks" /> <br></br>
            <br></br>
            <input type="submit" value="Submit" name="configSubmit"></input>
            <Button href="/schedule">schedule</Button>
            <br />
            <Link to="/404">404</Link>
        </div>
        </div>
    );
}