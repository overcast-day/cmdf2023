import '../App.css';
import React from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

export default function StartPage() {
    const handleClickScroll = () => {
        const element = document.getElementById('bottom-section');
        if (element) {
          element.scrollIntoView({behavior: 'smooth' });
        }
    };

    const handleClick = (e) => {
        window.location.href="/schedule";
        e.preventDefault();
    };

    return (
        <div className="Start">
        <div id="top-section">
            <h3>Helping you prioritize self-care throughout your day!</h3>
            <button 
                className="scroll-button"
                class="confirm-button" 
                onClick={handleClickScroll}>
                    Let's get stated
            </button>
        </div>
        <div id="bottom-section">
            <h1>Let's start your work day!</h1>
            <h4>Select the activities you want to include:</h4>
            <Form.Group>
                <Form.Check type={"checkbox"}>
                <Form.Check.Input
                    type={"checkbox"}
                    defaultChecked={true}
                />
                <Form.Check.Label>Breathing Exercise</Form.Check.Label>
                <Form.Check.Input
                    type={"checkbox"}
                    defaultChecked={true}
                />
                <Form.Check.Label>Water Break</Form.Check.Label>
                <Form.Check.Input
                    type={"checkbox"}
                    defaultChecked={true}
                />
                <Form.Check.Label>Surprise Me!</Form.Check.Label>
            </Form.Check>
            </Form.Group>
            <br />
            <h4>How many hours are you working for?</h4>
            <h4>How often do you want a break?</h4>
            <button 
                class="confirm-button" 
                onClick={handleClick}>
                Next
            </button>
            <br />
            <p></p>
            <Link to="/404">404</Link>
        </div>
        </div>
    );
}