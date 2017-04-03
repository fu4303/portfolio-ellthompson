import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import { Wrapper }  from 'styles';

import Nav from 'components/nav';
import Homepage from 'pages/homepage';
import Contact from 'pages/contact';
import About from 'pages/about';
import Footer from 'components/footer';

ReactDOM.render(
    <Router>
        <Wrapper height='100%'>
            <Nav/>
            <Route exact path='/' component={Homepage}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/about' component={About}/>
            <Footer/>
        </Wrapper>
    </Router>,
    document.body
);
