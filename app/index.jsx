import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Homepage from 'pages/homepage';
import About from 'pages/about';

const root = document.createElement('div');
document.body.insertBefore(root, document.body.firstElementChild);

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={Homepage}/>
            <Route path='/about' component={About}/>
        </div>
    </Router>,
    root
);
