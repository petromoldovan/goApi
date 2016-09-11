import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from "./pages/Layout.js"
import About from "./pages/About.js"
import Contact from "./pages/Contact.js"
import Header from './components/Header.js';
import Portfolio from "./pages/Portfolio.js";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Portfolio} />
            <Route path="about" component={About} />
            <Route path="contact" component={Contact} />
        </Route>
    </Router>,
document.getElementById('app'));



