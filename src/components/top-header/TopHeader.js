import React from "react";
import { Link } from "react-router-dom";
import { MainHeader } from "./TopHeaderStyles";

function TopHeader(props) {
  return (
    <MainHeader>
      <div>
        <p>LOGO</p>
      </div>
      <nav>
        <Link className="link" to="/about">
          About
        </Link>
      </nav>
    </MainHeader>
  );
}

export default TopHeader;
