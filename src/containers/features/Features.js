import React from "react";
import { MainContainer, PageHeader, ContentNav } from "../../GlobalStyles";

function Features(props) {
  return (
    <MainContainer>
      <PageHeader>
        <section>
          <h1>Features</h1>
          <h2>
            Features are what makes this an app, and not just another website
          </h2>
          <p>
            Features are important, but it is also important not to overdue
            them. You do not want a user waiting 10min to use the hundreds of
            features you have stuffed in the app.
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

export default Features;
