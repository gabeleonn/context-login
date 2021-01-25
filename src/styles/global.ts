import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    outline: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    background: #fefefe;
  }

  body, input, button {
    font-family: sans-serif;
  }

  button {
    cursor: pointer;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: #161616;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
