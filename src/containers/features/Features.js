import React from "react";
import { MainContainer } from "../../GlobalStyles";
import { PageHeader } from "./FeatureStyles";

function Features(props) {
  return (
    <MainContainer>
      <PageHeader>
        <h1>Features</h1>
        <h2>
          Features are what makes this an app, and not just another website
        </h2>
        <p>
          Features are important, but it is also important not to overdue them.
          You do not want a user waiting 10min to use the hundreds of features
          you have stuffed in the app.
        </p>
      </PageHeader>
    </MainContainer>
  );
}

export default Features;
