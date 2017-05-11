import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import particleBackground from 'particle-background';

import 'font-awesome/css/font-awesome.css';
import { Wrapper }  from 'styles';

import Homepage from 'pages/homepage';
import Contact from 'pages/contact';
import Blog from 'pages/blog';

import Header from 'components/header';
import Footer from 'components/footer';

class ParticleBackground extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { config } = this.props;
        particleBackground(this.canvas, {
            frames: /Mobi/.test(navigator.userAgent) ? 20 : 40,
            particleCount: /Mobi/.test(navigator.userAgent) ? 30 : 100,
            maxParticleDiameter: /Mobi/.test(navigator.userAgent) ? 80 : 160,
        });
    }
    render() {
        const { width, height } = this.props;
        return (
            <canvas ref={(c)=>this.canvas = c} width={width} height={height}></canvas>
        );
    }
}

/*
 * Global Config
 */
const CONFIG = {
    SHOW_BLOG: true
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundWidth: 0,
            backgroundHeight: 0,
        };
    }
    getChildContext() {
        return {
            CONFIG
        };
    }
    componentDidMount() {
        this.setState({
            backgroundWidth: this.back.offsetWidth,
            backgroundHeight: this.back.offsetHeight,
        });
    }
    render() {
        const { backgroundWidth, backgroundHeight } = this.state;
        return (
            <Router>
                <Wrapper height='100%'>
                    <div ref={(c)=>this.back = c} style={{background: 'linear-gradient(45deg, rgb(204, 103, 255), rgb(0, 208, 255))', width: '100%', height: '100%', position: 'absolute', zIndex: '-9999'}}>
                        { backgroundWidth > 0 &&
                            <ParticleBackground width={`${backgroundWidth}px`} height={`${backgroundHeight}px`}/>
                        }
                    </div>
                    <Header/>
                    <Route exact path='/' component={Homepage}/>
                    <Route exact path='/contact' component={Contact}/>
                    <Route path='/blog' component={Blog}/>
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
