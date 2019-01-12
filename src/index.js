import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TopHeader from "./components/top-header/TopHeader";
import Nav from "./components/nav/Nav";
import Intro from "./containers/intro/Intro";
import Foundation from "./containers/foundation/Foundation";
import User from "./containers/user/User";
import Visual from "./containers/visual/Visual";
import Conventions from "./containers/conventions/Conventions";
import Accessibility from "./containers/accessibility/Accessibility";
import Features from "./containers/features/Features";
import Technology from "./containers/technology/Technology";
import EndpointCommunication from "./containers/endpoint-communication/EndpointCommunication";

import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <Router>
      <Fragment>
        <GlobalStyle />
        <TopHeader />
        <Nav />
        <Route exact path="/" component={Intro} />
        <Route path="/foundation" component={Foundation} />
        <Route path="/user" component={User} />
        <Route path="/visual" component={Visual} />
        <Route path="/conventions" component={Conventions} />
        <Route path="/accessibility" component={Accessibility} />
        <Route path="/features" component={Features} />
        <Route path="/technology" component={Technology} />
        <Route
          path="/endpoint-communication"
          component={EndpointCommunication}
        />
      </Fragment>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
