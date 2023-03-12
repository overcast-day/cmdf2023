import '../App.css';
import React from 'react'
import Timer from '../components/Timer.js';
import { Link, useHistory } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

export default function Dashboard() {
    const handleClick = (e) => {
       window.open("/dashboard");
       e.preventDefault();
    };

    return (
        <div className="Dashboard">
        <div>
            <h1>Come back in</h1>
            <Timer 
                h = {0}
                m = {0}
                s = {5}
            />
            <button 
                class="confirm-button" 
                onClick={handleClick}>
                    Confirm
            </button>
        </div>
        </div>
    );
}