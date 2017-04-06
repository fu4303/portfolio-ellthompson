import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import { Wrapper }  from 'styles';

import Homepage from 'pages/homepage';
import Contact from 'pages/contact';
import About from 'pages/about';
import Test from 'pages/test';

import Header from 'components/header';
import Footer from 'components/footer';

window.onload = () => {
    const webhostImage = document.querySelector('img[alt="www.000webhost.com"]');
    if (webhostImage) {
        webhostImage.style = 'display: none;';
    }
};

ReactDOM.render(
    <Router>
        <Wrapper height='100%'>
            <Header/>
            <Route exact path='/' component={Homepage}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/about' component={About}/>
            <Route path='/test' component={Test}/>
            <Footer/>
        </Wrapper>
    </Router>,
    document.body
);
