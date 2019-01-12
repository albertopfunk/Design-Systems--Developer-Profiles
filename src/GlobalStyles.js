import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /*
  ------------------------------------
                  RESET
  ------------------------------------
  */
  /*
  http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /*
  HTML5 display-role reset for older browsers
  */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /*
  ------------------------------------
            General Styles
  ------------------------------------
  */
  :root {
    --white: #ece9e6;
    --white-hover: #bcbab8;
    --white-active: #8d8b8a;
    --blue: #0f0c29;
    --blue-hover: #3e3c53;
    --blue-active: #6f6d7e;
    --nav-heading: 3rem;
    --main-heading: 6rem;
    --header-sub-heading: 2.6rem;
    --main-text: 1.8rem;
  }

  html {
    box-sizing: border-box;
    font-family: sans-serif;
    font-size: 62.5%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    position: relative;
    transition: all 0.2s ease;
  }
  html, body, #root {
    width: 100%;
  }
  #root {
    background: #ece9e6;
    background: -webkit-linear-gradient(to right, #ece9e6, #ffffff);
    background: linear-gradient(to right, #ece9e6, #ffffff);
  }
`;

export const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  padding-top: 200px;
  padding-left: 500px;
`;
