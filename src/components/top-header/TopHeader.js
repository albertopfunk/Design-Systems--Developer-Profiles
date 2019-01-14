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
        {/* Links and sensitive stuff */}
        <Link className="link" to="/login">
          Team Login
        </Link>
      </nav>
    </MainHeader>
  );
}

export default TopHeader;
