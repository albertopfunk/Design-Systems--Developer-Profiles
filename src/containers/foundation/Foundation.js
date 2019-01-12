import React from "react";
import { MainContainer } from "../../GlobalStyles";
import { PageHeader } from "./FoundationStyles";

function Foundation(props) {
  return (
    <MainContainer>
      <PageHeader>
        <h1>Foundation</h1>
        <h2>The reason for existance</h2>
        <p>
          Developer Profiles is a streamlined recruiting tool for locating
          available developers based on their skills/locations.
        </p>
      </PageHeader>
    </MainContainer>
  );
}

export default Foundation;
