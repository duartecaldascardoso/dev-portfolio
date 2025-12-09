import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeProvider } from './components/ui/color-mode.tsx'
import { system } from "./theme.ts";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PortfolioPage from './components/ui/page/PortfolioPage.tsx';

const redirectPath = sessionStorage.redirect
if (redirectPath) {
  sessionStorage.removeItem('redirect')
  window.history.replaceState(null, '', redirectPath)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <ColorModeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/dev-portfolio/" element={<PortfolioPage />} />
            <Route path="/home" element={<PortfolioPage />} />
            <Route path="/" element={<PortfolioPage />} />
          </Routes>
        </BrowserRouter>
      </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>
)
