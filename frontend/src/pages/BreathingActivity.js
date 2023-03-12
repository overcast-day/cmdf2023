import '../App.css';
import React from 'react'
import Timer from '../components/Timer.js';
import { Link, useHistory } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

export default function Breathe() {
    const handleClickScroll = () => {
        const element = document.getElementById('bottom-section');
        if (element) {
          element.scrollIntoView({behavior: 'smooth' });
        }
    };
    const handleClick = (e) => {
        window.close();
    };

    return (
        <div className="Breathe">
        <div id = "top-section">
            <div class="whole-page">
            <h2>It's time for a break! Let's do a </h2>
            <h1>Breathing Exercise </h1>
            <h3>5 minutes</h3>
            <p>Take some time to take deep breaths</p>
            <button 
                className="scroll-button"
                class="confirm-button" 
                onClick={handleClickScroll}>
                    Start
            </button></div>
        </div>
        <div id = "bottom-section">
            <div class="whole-page">
            <h2> 1,2,3...in...1,2,3....out. Take this time to be in the moment</h2>
            <Timer className="small-timer"
                h = {0}
                m = {0}
                s = {30}
                link = "/dashboard"
                type = "activity"
            />
            <h2>remaining </h2>
            <button 
                class="confirm-button" 
                onClick={handleClick}>
                Return to dashboard
            </button>
        </div></div>
        </div>
    );
}