import { render, h, Component } from "preact";
import React from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { HashRouter as Router, Route } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import styled from "styled-components";

import store from "store";
import { Wrapper } from "styles";
import Background from "components/background";
import AnimatedBox from "components/animatedBox";
import Homepage from "components/homepage";
import Contact from "components/contact";

import scrollEvent from "scrollEvent";
// import "preact/devtools";

/*
 * Global Config
 */
const CONFIG = {
  SHOW_BLOG: false
};

function mapStateToProps(state) {
  return {
    nearBottomOfPage: state.scroll.nearBottomOfPage
  };
}

class App extends Component {
  getChildContext() {
    return {
      CONFIG
    };
  }
  render() {
    return (
      <Router>
        <Wrapper height="100%">
          <Background />
          <AnimatedBox />
          <Wrapper height="100%">
            <Homepage />
          </Wrapper>
          <Wrapper id="contact" height="100%">
            <Contact />
          </Wrapper>
        </Wrapper>
      </Router>
    );
  }
}

App.childContextTypes = {
  CONFIG: PropTypes.object
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// register global events
scrollEvent(store);
