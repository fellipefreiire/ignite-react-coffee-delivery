import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.3;
  }

  input:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme: { colors } }) => colors['yellow-dark']};
  }

  body {
    background: ${({ theme: { colors } }) => colors.background};
    color: ${({ theme: { colors } }) => colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
