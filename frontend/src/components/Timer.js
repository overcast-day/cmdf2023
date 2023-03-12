import React from "react";
import "./Timer.css";
import '../App.css';
import { Link, useHistory } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

function Timer(props){
    const [timeLeft, setTimeLeft] = useState(props.h*60*60+props.m*60+props.s)

    const getTime = () => {
        const sec = Math.floor((timeLeft) % 60);
        const min = Math.floor((timeLeft / 60) % 60);
        const hour = Math.floor((timeLeft /(60 * 60)) % 24);
        return {
            hour, min, sec
        };
    };

    const startTimer = () => {
        let { hour, min, sec } = getTime();
        if (timeLeft >= 0) {
            return(
                (hour > 9 ? hour : '0' + hour) + ':' +
                (min > 9 ? min : '0' + min) + ':'
                + (sec > 9 ? sec : '0' + sec)
            )
        }
        //window.location.href="/breathing_activity";
        //window.open("/breathing_activity")
        //window.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        return "00:00:00"
    }

    useEffect(() => {
        const interval = setInterval(() => 
        {
            setTimeLeft((timeLeft) => timeLeft - 1);
            if (timeLeft === 0) {
              clearInterval(interval);
            }
        }
        , 1000);
    
        return () => clearInterval(interval);
    }, []);

    return (
    <div className="timer">
        <h2>{startTimer()}</h2>
    </div>
    );
}

export default Timer;