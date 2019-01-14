import React from "react";
import { MainContainer, PageHeader, ContentNav } from "../../GlobalStyles";

function Visual(props) {
  return (
    <MainContainer>
      <PageHeader>
        <section>
          <h1>User</h1>
          <h2>
            It is important to keep styling consitant throught the website, from
            colors, to fonts. It should feel like one brand, not many
          </h2>
          <p>
            Branding is what gives life to an application, it allows it to
            become more than just another website.
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

export default Visual;
