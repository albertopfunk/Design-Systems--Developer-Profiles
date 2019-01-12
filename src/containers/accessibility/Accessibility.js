import React from "react";
import { MainContainer } from "../../GlobalStyles";
import { PageHeader } from "./AccessibilityStyles";

function Accessibility(props) {
  return (
    <MainContainer>
      <PageHeader>
        <h1>Accessibility</h1>
        <h2>All walks of life have access to the internet</h2>
        <p>
          Applications should not be exclusive to people with perfect heath.
          Understand that there are people with disabilities who will use this
          app. From people who are blind and use screen-readers, to someone with
          a broken arm that can only use the keybord.
        </p>
      </PageHeader>
    </MainContainer>
  );
}

export default Accessibility;
