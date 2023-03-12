import '../App.css';
import React from 'react'
import ErrorLogo from "../images/sad_dog.png";
import Button from "react-bootstrap/Button"


export default function Error() {
    return (
        <div className="ErrorPage">
        <div>
            <p>Oh no! The page you're looking for doesn't exist. </p>
            <p>404 Not Found</p>
            <img src={ErrorLogo} alt = "sad_dog_pouting" />
            <a href ="/">
                <Button>Back to Home Page</Button>
            </a>
        </div>
        </div>
    );
}