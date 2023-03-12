import '../App.css';
import React from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

export default function StartPage() {
    return (
        <div className="Start">
        <div>
            <h1>Let's start your work day!</h1>
            <Link to="/404">404</Link>
            <p></p>
            <Button href="/schedule">schedule</Button>
            <p></p>
            <Link to="/404">404</Link>
        </div>
        </div>
    );
}