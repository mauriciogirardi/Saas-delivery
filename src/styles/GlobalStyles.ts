import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

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
    background-color: ${p => p.theme.colors.backgroundPrimary};
    font-size: 16px;
  }

  input, button, textarea {
    font-family: 'Inter', sans-serif;
  }

  input {
    border: 0;
    outline: 0;
    color: ${p => p.theme.colors.titlePrimary};
    border-radius: ${p => p.theme.border.borderRadius};
  }

  input::placeholder {
    color: ${p => p.theme.colors.titleSecondary};
}
`
