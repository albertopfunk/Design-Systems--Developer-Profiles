import React from "react";
import { MainContainer, PageHeader, ContentNav } from "../../GlobalStyles";

function Accessibility(props) {
  return (
    <MainContainer>
      <PageHeader>
        <section>
          <h1>Accessibility</h1>
          <h2>All walks of life have access to the internet</h2>
          <p>
            Applications should not be exclusive to people with perfect heath.
            Understand that there are people with disabilities who will use this
            app. From people who are blind and use screen-readers, to someone
            with a broken arm that can only use the keybord.
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

export default Accessibility;
