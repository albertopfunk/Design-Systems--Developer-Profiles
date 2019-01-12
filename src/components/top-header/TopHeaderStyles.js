import styled from "styled-components";
import { link } from "../../Mixins";

export const MainHeader = styled.header`
  width: 100%;
  height: 80px;
  padding: 10px 5%;
  background: #0f0c29;
  background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);
  background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  p {
    color: var(--white);
    font-size: 2.8rem;
  }
  .link {
    ${link("2.3rem", "var(--white)")};
    &:hover {
      color: var(--white-hover);
    }
    &:active {
      color: var(--white-active);
    }
  }
`;
