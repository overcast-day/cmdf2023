import '../App.css';
import React from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

export default function Home() {
    return (
        <div className="Start">
        <div>
            <p>Hi</p>
            <Link to="/404">404</Link>
        </div>
        </div>
    );
}