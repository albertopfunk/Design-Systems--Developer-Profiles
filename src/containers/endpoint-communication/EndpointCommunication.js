import React from "react";
import { MainContainer, PageHeader, ContentNav } from "../../GlobalStyles";

function EndpointCommunication(props) {
  return (
    <MainContainer>
      <PageHeader>
        <section>
          <h1>Endpoint Communication</h1>
          <h2>
            Client and server communication is the heart of any application
          </h2>
          <p>
            It should be clear what the server and client expect, and what they
            send. Apps quickly become more error prone when this communication
            is not clear.
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

export default EndpointCommunication;
