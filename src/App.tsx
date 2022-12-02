import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Routers'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}
