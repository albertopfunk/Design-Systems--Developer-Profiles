import React from "react";
import { MainContainer, PageHeader, ContentNav } from "../../GlobalStyles";

function Intro(props) {
  return (
    <MainContainer>
      <PageHeader>
        <section>
          <h1>Intro</h1>
          <h2>The reason for existance</h2>
          <p>
            This guide will include everything you need to you about the
            application. From the technology it uses to the users it serves.
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

export default Intro;
