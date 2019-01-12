import React from "react";
import { MainContainer } from "../../GlobalStyles";
import { PageHeader } from "./EndpointCommunicationStyles";

function EndpointCommunication(props) {
  return (
    <MainContainer>
      <PageHeader>
        <h1>Endpoint Communication</h1>
        <h2>Client and server communication is the heart of any application</h2>
        <p>
          It should be clear what the server and client expect, and what they
          send. Apps quickly become more error prone when this communication is
          not clear.
        </p>
      </PageHeader>
    </MainContainer>
  );
}

export default EndpointCommunication;
