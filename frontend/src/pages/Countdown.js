import '../App.css';
import React from 'react'
import Timer from '../components/Timer.js';
import { Link, useHistory } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

export default function Countdown() {
    const handleClick = (e) => {
        window.URL("/dashboard");
        e.preventDefault();
    };

    return (
        <div className="Countdown">
        <div>
            <h1>Come back in</h1>
            <Timer 
                h = {0}
                m = {0}
                s = {15}
            />
            <h1>to complete your next activity!</h1>
            <button 
                class="confirm-button" 
                onClick={handleClick}>
                Return to dashboard
            </button>
        </div>
        </div>
    );
}