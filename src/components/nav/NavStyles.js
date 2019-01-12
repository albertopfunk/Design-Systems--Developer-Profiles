import styled from "styled-components";
import { link } from "../../Mixins";

export const MainNav = styled.nav`
  width: 280px;
  height: 100vh;
  background: #ece9e6;
  background: -webkit-linear-gradient(to right, #ece9e6, #ffffff);
  background: linear-gradient(to right, #ece9e6, #ffffff);
  padding: 130px 25px 0;
  border-right-style: solid;
  border-right-width: 10px;
  border-right-color: var(--blue-hover);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  z-index: 5;
  h1 {
    font-size: var(--nav-heading);
    color: var(--blue-hover);
    margin-bottom: 45px;
  }
  .link {
    ${link("2.2rem", "var(--blue)")};
    margin-bottom: 30px;
    &:hover {
      color: var(--blue-hover);
    }
    &:active {
      color: var(--blue-active);
    }
  }
`;
