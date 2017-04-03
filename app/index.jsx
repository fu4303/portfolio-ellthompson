import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Nav from 'components/nav';
import Homepage from 'pages/homepage';
import Contact from 'pages/contact';
import About from 'pages/about';

const root = document.createElement('div');
document.body.insertBefore(root, document.body.firstElementChild);

ReactDOM.render(
    <Router>
        <div>
            <Nav/>
            <Route exact path='/' component={Homepage}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/about' component={About}/>
        </div>
    </Router>,
    root
);
