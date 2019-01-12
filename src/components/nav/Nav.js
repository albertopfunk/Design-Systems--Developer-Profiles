import React from "react";
import { Link } from "react-router-dom";
import { MainNav } from "./NavStyles";

function Nav(props) {
  return (
    <MainNav>
      <h1>Developer Profiles</h1>
      <Link className="link" to="/">
        Intro
      </Link>
      <Link className="link" to="/foundation">
        Foundation
      </Link>
      <Link className="link" to="/user">
        User
      </Link>
      <Link className="link" to="/visual">
        Visual
      </Link>
      <Link className="link" to="/conventions">
        Conventions
      </Link>
      <Link className="link" to="/accessibility">
        Accessibility
      </Link>
      <Link className="link" to="/features">
        Features
      </Link>
      <Link className="link" to="/technology">
        Technology
      </Link>
      <Link className="link" to="/endpoint-communication">
        Endpoint Communication
      </Link>
    </MainNav>
  );
}

export default Nav;
