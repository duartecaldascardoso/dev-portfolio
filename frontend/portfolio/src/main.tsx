import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeProvider } from './components/ui/color-mode.tsx'
import { system } from "./theme.ts";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PublicationsPage from './pages/PublicationsPage';
import CoursesPage from './pages/CoursesPage';
import ProjectsPage from './pages/ProjectsPage';

const redirectPath = sessionStorage.getItem('redirect')
if (redirectPath) {
    sessionStorage.removeItem('redirect')
    const parsedUrl = new URL(redirectPath, window.location.origin)
    const restoredPath = `${parsedUrl.pathname}${parsedUrl.search}${parsedUrl.hash}`
    const normalizedPath = restoredPath !== '/dev-portfolio/' && restoredPath.endsWith('/')
        ? restoredPath.slice(0, -1)
        : restoredPath
    window.history.replaceState(null, '', normalizedPath)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <ColorModeProvider forcedTheme="light">
        <BrowserRouter basename="/dev-portfolio">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/publications" element={<PublicationsPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/books" element={<Navigate to="/courses" replace />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/resources" element={<Navigate to="/publications" replace />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>
)
