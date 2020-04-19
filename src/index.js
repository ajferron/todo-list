import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM renders the app componenet into div#root
// The <App /> component is App.js
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
