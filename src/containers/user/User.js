import React from "react";
import { Link } from "react-router-dom";
import { MainContainer } from "../../GlobalStyles";
import { PageHeader } from "./UserStyles";

function User(props) {
  return (
    <MainContainer>
      <PageHeader>
        <h1>User</h1>
        <h2>
          The goal for the user is for them to have a great experience from
          start to finish, with seemless interactions, feedback, and transitions
        </h2>
        <p>
          It is imperitive to understand the needs of the user that will be
          navigating this app, and to understand that not all users are the
          same(see <Link to="/accessibility">Accessibility</Link>).
        </p>
      </PageHeader>
    </MainContainer>
  );
}

export default User;
