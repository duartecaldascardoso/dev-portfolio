import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeProvider } from './components/ui/color-mode.tsx'
import { system } from "./theme.ts";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/ui/page/NavBar.tsx';
import PortfolioPage from './components/ui/page/PortfolioPage.tsx';
import TimelinePage from './components/ui/page/TimelinePage.tsx';

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
          <Navbar />
          <Routes>
            <Route path="/dev-portfolio/" element={<PortfolioPage />} />
            <Route path="/home" element={<PortfolioPage />} />
            <Route path="/" element={<PortfolioPage />} />
            <Route path="/dev-portfolio/timeline" element={<TimelinePage />} />
            <Route path="/timeline" element={<TimelinePage />} />
          </Routes>
        </BrowserRouter>
      </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>
)
