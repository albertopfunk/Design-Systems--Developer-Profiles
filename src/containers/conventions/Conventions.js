import React from "react";
import { MainContainer } from "../../GlobalStyles";
import { PageHeader } from "./ConventionStyles";

function Conventions(props) {
  return (
    <MainContainer>
      <PageHeader>
        <h1>Conventions</h1>
        <h2>When the team is on the same page, it makes everything easier</h2>
        <p>
          Similar to styling, consistancy is key. Especially when working with a
          team, everyone should be on the same page when it comes to things like
          the way the code is written, or the tools that are being used
        </p>
      </PageHeader>
    </MainContainer>
  );
}

export default Conventions;
