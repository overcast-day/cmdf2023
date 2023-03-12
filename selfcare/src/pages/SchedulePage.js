import '../App.css';
import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

export default function SchedulePage() {
    const handleClick = (e) => {
        window.open("/dashboard");
        e.preventDefault();
    };

    return (
        <div className="Schedule">
        <div>
            <h1>Let's confirm your choices</h1>
            <button 
                class="confirm-button" 
                onClick={handleClick}>
                    Confirm
            </button>
        </div>
        </div>
    );
}