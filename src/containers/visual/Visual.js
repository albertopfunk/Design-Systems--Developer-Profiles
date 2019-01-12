import React from "react";
import { MainContainer } from "../../GlobalStyles";
import { PageHeader } from "./VisualStyles";

function Visual(props) {
  return (
    <MainContainer>
      <PageHeader>
        <h1>Visual</h1>
        <h2>
          It is important to keep styling consitant throught the website, from
          colors, to fonts. It should feel like one brand, not many
        </h2>
        <p>
          Branding is what gives life to an application, it allows it to become
          more than just another website.
        </p>
      </PageHeader>
    </MainContainer>
  );
}

export default Visual;
