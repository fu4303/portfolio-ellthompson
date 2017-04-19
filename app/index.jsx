import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import 'font-awesome/css/font-awesome.css';
import { Wrapper }  from 'styles';

import Homepage from 'pages/homepage';
import Contact from 'pages/contact';
import Blog from 'pages/blog';

import Header from 'components/header';
import Footer from 'components/footer';

/*
 * Global Config
 */
const CONFIG = {
    SHOW_BLOG: false
};

class App extends Component {
    getChildContext() {
        return {
            CONFIG
        };
    }
    render() {
        return (
            <Router>
                <Wrapper height='100%'>
                    <Header/>
                    <Route exact path='/' component={Homepage}/>
                    <Route exact path='/contact' component={Contact}/>
                    <Route exact path='/blog' component={Blog}/>
                    <Footer/>
                </Wrapper>
            </Router>
        );
    }
}

App.childContextTypes = {
      CONFIG: PropTypes.object
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
