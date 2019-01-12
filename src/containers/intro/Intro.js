import React from "react";
import { MainContainer } from "../../GlobalStyles";
import { PageHeader } from "./IntroStyles";

function Intro(props) {
  return (
    <MainContainer>
      <PageHeader>
        <h1>Intro</h1>
        <h2>
          The purpose of this system is for it to be a guide to Developer
          Profiles
        </h2>
        <p>
          This guide will include everything you need to you about the
          application. From the technology it uses to the users it serves.
        </p>
      </PageHeader>
    </MainContainer>
  );
}

export default Intro;
