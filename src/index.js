import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import LoginProvider from "./Contexts/LoginContext";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <LoginProvider>
            <App/>
        </LoginProvider>
    </Router>,
    document.getElementById('root')
);
