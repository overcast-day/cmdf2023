import '../App.css';
import React from 'react'
import ErrorLogo from "../images/sad_dog.png";

export default function Error() {
    return (
        <div className="ErrorPage">
        <div>
            <p>Oh no! The page you're looking for doesn't exist. </p>
        <img src={ErrorLogo} alt = "sad_dog_pouting" />
        </div>
        </div>
    );
}

