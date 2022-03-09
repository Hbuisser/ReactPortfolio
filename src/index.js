import React from 'react';
import ReactDom, { render } from 'react-dom';
import App from './App'

ReactDom.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
);