import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import 'font-awesome/css/font-awesome.css';
import { Wrapper }  from 'styles';

import Homepage from 'pages/homepage';
import Contact from 'pages/contact';

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
            <Route exact path='/contact' component={Contact}/>
            <Footer/>
        </Wrapper>
    </Router>,
    document.getElementById('root')
);
