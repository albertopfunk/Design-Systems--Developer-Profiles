import React from "react";
import { Link } from "react-router-dom";
import { MainContainer, PageHeader, ContentNav } from "../../GlobalStyles";

function User(props) {
  return (
    <MainContainer>
      <PageHeader>
        <section>
          <h1>User</h1>
          <h2>Knowing what tools to use, and why</h2>
          <p>
            It is imperitive to understand the needs of the user that will be
            navigating this app, and to understand that not all users are the
            same(see <Link to="/accessibility">Accessibility</Link>).
          </p>
        </section>
        <section>
          <h2>Contents</h2>
          <ContentNav>
            <a href="#">Front-End</a>
            <a href="#">Back-End</a>
            <a href="#">Database</a>
            <a href="#">Deployment</a>
            <a href="#">APIs</a>
          </ContentNav>
        </section>
      </PageHeader>
      <hr />
    </MainContainer>
  );
}

export default User;
