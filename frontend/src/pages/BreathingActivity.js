import '../App.css';
import React from 'react'
import Timer from '../components/Timer.js';
import { Link, useHistory } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

export default function Breathe() {
    const handleClick = (e) => {
       window.location("/dashboard");
       e.preventDefault();
    };

    return (
        <div className="Breathing">
        <div>
            <h1>Breathe</h1>
            <Timer 
                h = {0}
                m = {0}
                s = {3}
                link = "/dashboard"
            />
            <button 
                class="confirm-button" 
                onClick={handleClick}>
                    Back to dashboard
            </button>
        </div>
        </div>
    );
}