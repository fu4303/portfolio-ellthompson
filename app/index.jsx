import { render, h, Component } from "preact";
import React from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { HashRouter as Router, Route, useRouteMatch } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import styled from "styled-components";

import store from "store";
import { Wrapper } from "styles";
import Background from "components/background";
import NavBar from "components/navBar";
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
  constructor(props) {
    super(props);
    this.state = {
      pageState: 0
    };
  }
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
          <Route path={["/projects/:projectid", "/projects", "/contact", "/"]}>
            <Homepage />
          </Route>
          <Route path={["/projects/:projectid", "/projects", "/contact", "/"]}>
            <Contact />
          </Route>
          <Route path={["/projects/:projectid", "/projects", "/contact", "/"]}>
            <NavBar />
          </Route>
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

// function noScroll() {
//   window.scrollTo(0, 0);
// }
//
// var keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
//
// function preventDefault(e) {
//   e = e || window.event;
//   if (e.preventDefault) e.preventDefault();
//   e.returnValue = false;
// }
//
// function keydown(e) {
//   for (var i = keys.length; i--; ) {
//     if (e.keyCode === keys[i]) {
//       preventDefault(e);
//       return;
//     }
//   }
// }
//
// function wheel(e) {
//   preventDefault(e);
// }
//
// document.addEventListener("touchmove", preventDefault, false);
// if (window.addEventListener) {
//   window.addEventListener("DOMMouseScroll", wheel, false);
// }
// window.onmousewheel = document.onmousewheel = wheel;
// document.onkeydown = keydown;
window.addEventListener(
  "keydown",
  function(e) {
    // space, page up, page down and arrow keys:
    if ([32, 33, 34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  },
  false
);
// // add listener to disable scroll
// window.addEventListener("scroll", noScroll);
