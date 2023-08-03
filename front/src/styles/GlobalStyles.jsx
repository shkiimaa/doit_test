import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  html, body, #root {
    min-height: 100vh;
  }

  *{
    box-sizing: border-box;
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyles;
