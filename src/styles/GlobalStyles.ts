import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600;700;800&display=swap');
  
  :root {
    --background-primary: #ffffff;
    --background-secondary: #f9f9fb;
    --title-primary: #1B1B1B;
    --title-secondary: #979797;
    --background-input: #ffffff;
    --orange-primary: #FB9400;
    --orange-secondary:#FFF9F2;
  }

    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--background-primary);
    font-size: 16px;
  }

  input, button, textarea {
    font-family: 'Inter', sans-serif;
  }

  input {
    border: 0;
    outline: 0;  
    color: var(--title-primary);
    border-radius: 0.5rem;
  }

  input::placeholder {
    color: var(--title-secondary);
}
`
