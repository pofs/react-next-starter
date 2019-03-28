import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import './index.scss';

const Root = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById('root'));
