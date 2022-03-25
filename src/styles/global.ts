import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  /* * {
    margin: 0;
    padding: 0;
     box-sizing: border-box; 
    
  } */
  #root {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #f7f5ee;
    -webkit-font-smoothing: antialiased;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  body, input, textarea, button {
    font-family: "Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  

 
`;