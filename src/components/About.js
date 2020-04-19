import React from 'react';
import {Link} from 'react-router-dom';

function About() {
    return (
        // Works like a ghost element, doesn't show in DOM
        <React.Fragment>
            <header>
                <h1>About</h1>
                <button>
                    <Link to="/">
                        <img src="./icons/circle-x.svg" alt="Back"/>
                    </Link>
                </button>
            </header>
            <p>
                A simple To Do app made with React.js <br/><br/>
                <a href="https://www.youtube.com/watch?v=sBws8MSXN7A"> React JS Crash Course </a>
            </p>
        </React.Fragment>
    )
}

export default About;