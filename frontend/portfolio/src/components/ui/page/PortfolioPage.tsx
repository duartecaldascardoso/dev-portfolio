
'use client'

import { Flex, Box } from '@chakra-ui/react'
import { ColorModeButton, useColorModeValue } from '../color-mode';
import TimelinePage from '../Timeline';
import { BackgroundFlair } from '../BackgroundFlair';
import { HeroSection } from '../HeroSection';
import { ProjectsSection } from '../ProjectsSection';
import { Footer } from '../Footer';

export default function PortfolioPage() {
  const bg = useColorModeValue('gray.50', '#0a0a0a')

  return (
    <Flex direction="column" minH="100vh" bg={bg} position="relative" overflow="hidden">

      <BackgroundFlair />

      <Box position="fixed" top={6} right={6} zIndex="1000" p={2}>
        <ColorModeButton />
      </Box>

      <HeroSection />

      <TimelinePage />

      <ProjectsSection />

      <Footer />
    </Flex>
  )
}
