import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { CartContextProvider } from "./store/contexts/CartContex"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/theme/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
