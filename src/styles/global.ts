import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  font-family: "Poppins", sans-serif;
}

body {
    background: #ff7979;
  -webkit-font-smoothing: antialiased;
}

html {
  scroll-behavior: smooth;
}

`;
