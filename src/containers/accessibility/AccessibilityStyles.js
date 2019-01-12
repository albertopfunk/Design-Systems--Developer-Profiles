import styled from "styled-components";

export const PageHeader = styled.header`
  width: 100%;
  max-width: 750px;
  padding: 20px;
  h1 {
    font-size: var(--main-heading);
    margin-bottom: 15px;
  }
  h2 {
    font-size: var(--header-sub-heading);
    line-height: 35px;
    margin-bottom: 30px;
  }
  p {
    font-size: var(--main-text);
    line-height: 28px;
  }
`;
