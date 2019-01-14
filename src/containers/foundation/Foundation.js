import React from "react";
import { MainContainer, PageHeader, ContentNav } from "../../GlobalStyles";

function Foundation(props) {
  return (
    <MainContainer>
      <PageHeader>
        <section>
          <h1>Foundation</h1>
          <h2>The reason for existance</h2>
          <p>
            Developer Profiles is a streamlined recruiting tool for locating
            available developers based on their skills/locations.
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

export default Foundation;
