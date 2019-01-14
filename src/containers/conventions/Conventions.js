import React from "react";
import { MainContainer, PageHeader, ContentNav } from "../../GlobalStyles";

function Conventions(props) {
  return (
    <MainContainer>
      <PageHeader>
        <section>
          <h1>Conventions</h1>
          <h2>When the team is on the same page, it makes everything easier</h2>
          <p>
            Similar to styling, consistancy is key. Especially when working with
            a team, everyone should be on the same page when it comes to things
            like the way the code is written, or the tools that are being used.
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

export default Conventions;
