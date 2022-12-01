import { BrowserRouter } from 'react-router-dom';
import { Router } from './Routers';

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}