import React from "react";
import { MainContainer } from "../../GlobalStyles";
import { PageHeader } from "./TechnologyStyles";

function Technology(props) {
  return (
    <MainContainer>
      <PageHeader>
        <h1>Technology</h1>
        <h2>Knowing what tools to use, and why</h2>
        <p>
          All tools serve a purpose, and have advantages and disadvantages.
          Choose your tools based on that, see what your app needs, and choose
          the tools that best fit those needs
        </p>
      </PageHeader>
    </MainContainer>
  );
}

export default Technology;
