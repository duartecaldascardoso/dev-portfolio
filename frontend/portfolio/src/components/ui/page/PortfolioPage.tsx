'use client'

import {
  Heading,
  Container,
  Text,
  Stack,
  Flex,
  Box,
  Icon,
  VStack,
  HStack,
  Badge,
  Link,
  Image,
  SimpleGrid,
} from '@chakra-ui/react'
import {
  FaGithub,
  FaLinkedin,
  FaLaptopCode,
  FaEnvelope,
  FaBolt,
  FaBalanceScale,
  FaBrain,
  FaFileAlt,
} from 'react-icons/fa'
import { ColorModeButton, useColorModeValue } from '../color-mode';
import TimelinePage from './TimelinePage';

interface ThreeDButtonProps extends React.ComponentProps<typeof Box> {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  newTab?: boolean;
}

const ThreeDButton = ({ children, href, onClick, newTab, ...props }: ThreeDButtonProps) => {
  const bg = useColorModeValue('white', 'gray.900');
  const color = useColorModeValue('black', 'white');
  const borderColor = useColorModeValue('black', 'white');

  const Component = (
    <Box
      as="button"
      bg={bg}
      color={color}
      border="2px solid"
      borderColor={borderColor}
      borderRadius="full"
      px={8}
      h={14}
      fontWeight="bold"
      fontSize="lg"
      position="relative"
      transition="all 0.1s"
      top="0px"
      left="0px"
      boxShadow={`4px 4px 0px 0px ${borderColor}`}
      _active={{
        top: "2px",
        left: "2px",
        boxShadow: `2px 2px 0px 0px ${borderColor}`,
      }}
      _hover={{
        top: "-1px",
        left: "-1px",
        boxShadow: `6px 6px 0px 0px ${borderColor}`,
      }}
      display="flex"
      alignItems="center"
      gap={2}
      onClick={onClick}
      {...props}
    >
      {children}
    </Box>
  );

  if (href) {
    return (
      <Link
        href={href}
        textDecoration="none"
        _hover={{ textDecoration: 'none' }}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {Component}
      </Link>
    );
  }
  return Component;
};


interface FeatureCardProps {
  icon: React.ComponentType
  title: string
  description: string | React.ReactNode
  href: string
  websiteUrl?: string
}

const FeatureCard = ({ icon, title, description, href, websiteUrl }: FeatureCardProps) => {
  const bg = useColorModeValue('white', 'whiteAlpha.50')
  const border = useColorModeValue('gray.100', 'whiteAlpha.100')
  const headingColor = useColorModeValue('gray.900', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const iconColor = useColorModeValue('brand.600', 'brand.400')

  return (
    <Box
      p={8}
      shadow="none"
      borderWidth="1px"
      borderRadius="2xl"
      position="relative"
      bg={bg}
      borderColor={border}
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-4px)',
        shadow: 'xl',
        borderColor: 'brand.200'
      }}
    >
      <Link
        href={href}
        position="absolute"
        top={6}
        right={6}
        color="gray.400"
        _hover={{ color: iconColor }}
      >
        <Icon as={FaGithub} boxSize={5} />
      </Link>

      <VStack gap={5} align="start">
        <Icon as={icon} w={10} h={10} color={iconColor} />

        {websiteUrl ? (
          <Link
            href={websiteUrl}
            _hover={{ textDecoration: 'none' }}
          >
            <Heading size="md" color={headingColor} _hover={{ color: iconColor }} transition="color 0.2s">
              {title}
            </Heading>
          </Link>
        ) : (
          <Heading size="md" color={headingColor}>
            {title}
          </Heading>
        )}

        <Text color={textColor} fontSize="sm" lineHeight="tall">
          {description}
        </Text>
      </VStack>
    </Box>
  )
}

// import { keyframes } from '@emotion/react' removed

// bounce keyframes removed

export default function PortfolioPage() {
  const bg = useColorModeValue('gray.50', '#0a0a0a')
  const headingColor = useColorModeValue('gray.900', 'white')
  const subtextColor = useColorModeValue('gray.600', 'gray.400')
  // arrowColor removed

  return (
    <Flex direction="column" minH="100vh" bg={bg} position="relative" overflow="hidden">

      {/* Global Background Flair - More Light Sources */}

      <Box
        position="absolute"
        top="-10%"
        left="-10%"
        width="600px"
        height="600px"
        bg="brand.500"
        opacity="0.12"
        filter="blur(140px)"
        zIndex="0"
        pointerEvents="none"
        borderRadius="full"
      />

      <Box
        position="absolute"
        top="-5%"
        right="-5%"
        width="400px"
        height="400px"
        bg="brand.300"
        opacity="0.10"
        filter="blur(120px)"
        zIndex="0"
        pointerEvents="none"
        borderRadius="full"
      />


      <Box
        position="absolute"
        top="40%"
        right="-10%"
        width="500px"
        height="500px"
        bg="brand.400"
        opacity="0.10"
        filter="blur(140px)"
        zIndex="0"
        pointerEvents="none"
        borderRadius="full"
      />

      <Box
        position="absolute"
        top="50%"
        left="-5%"
        width="450px"
        height="450px"
        bg="brand.600"
        opacity="0.08"
        filter="blur(130px)"
        zIndex="0"
        pointerEvents="none"
        borderRadius="full"
      />


      <Box
        position="absolute"
        bottom="-10%"
        left="10%"
        width="500px"
        height="500px"
        bg="brand.600"
        opacity="0.12"
        filter="blur(140px)"
        zIndex="0"
        pointerEvents="none"
        borderRadius="full"
      />

      <Box
        position="absolute"
        bottom="5%"
        right="10%"
        width="550px"
        height="550px"
        bg="brand.500"
        opacity="0.10"
        filter="blur(140px)"
        zIndex="0"
        pointerEvents="none"
        borderRadius="full"
      />

      <Box position="fixed" top={6} right={6} zIndex="1000" p={2}>
        <ColorModeButton />
      </Box>

      <Box position="relative" overflow="hidden" pt={{ base: 20, md: 32 }} pb={{ base: 10, md: 12 }}>
        <Container maxW="6xl">
          <Stack direction={{ base: 'column-reverse', md: 'row' }} align="center" gap={{ base: 12, md: 20 }}>
            <Stack flex={1} gap={{ base: 6, md: 8 }} textAlign={{ base: 'center', md: 'left' }}>
              <VStack align={{ base: 'center', md: 'start' }} gap={4}>
                <Badge
                  px={3}
                  py={1}
                  borderRadius="full"
                  bg={useColorModeValue('brand.50', 'whiteAlpha.100')}
                  color={useColorModeValue('brand.700', 'brand.200')}
                  fontSize="sm"
                  fontWeight="medium"
                >
                  AI Engineer & Creative
                </Badge>
                <Heading
                  as="h1"
                  fontWeight="bold"
                  fontSize={{ base: '4xl', sm: '5xl', md: '7xl' }}
                  lineHeight="1.1"
                  color={headingColor}
                  letterSpacing="tight"
                >
                  Hi, I'm <Box as="span" color={useColorModeValue('brand.600', 'brand.400')}>Duarte</Box>.
                </Heading>
                <Heading
                  as="h2"
                  fontWeight="medium"
                  fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
                  lineHeight="1.4"
                  color={subtextColor}
                >
                  AI Engineer, Musician, Chess player and Traveler
                </Heading>
                <Text fontSize="lg" color={subtextColor} maxW="xl" lineHeight="tall">
                  I view myself as a creative person, focused on building intelligent, user-centric systems.
                  I truly enjoy technology and am passionate about building and learning in the field.
                </Text>
              </VStack>

              <Stack direction={{ base: 'column', sm: 'row' }} gap={4} pt={4} justify={{ base: 'center', md: 'center' }} align="center">
                <ThreeDButton href="https://github.com/duartecaldascardoso">
                  <Icon as={FaGithub} />
                  GitHub
                </ThreeDButton>
                <ThreeDButton href="mailto:caldasdcardoso@gmail.com">
                  <Icon as={FaEnvelope} />
                  Email
                </ThreeDButton>
                <ThreeDButton href={`${import.meta.env.BASE_URL}config/DuarteCardoso.pdf`} newTab>
                  <Icon as={FaFileAlt} />
                  Curriculum
                </ThreeDButton>
              </Stack>
            </Stack>

            <Box flex={1} position="relative" display="flex" justifyContent="center" alignItems="center">
              <Box
                position="relative"
                mt={{ base: -8, md: -12 }}
                maxW="340px"
                w="full"
                aspectRatio={1}
              >
                <Image
                  src={`${import.meta.env.BASE_URL}config/profile.jpg`}
                  w="100%"
                  h="100%"
                  borderRadius="2xl"
                  objectFit="cover"
                  alt="Duarte Cardoso"
                  shadow="2xl"
                  zIndex={2}
                  position="relative"
                  objectPosition="0px -185px"
                />
                <Box
                  position="absolute"
                  top={-4}
                  right={-4}
                  bottom={4}
                  left={4}
                  border="2px solid"
                  borderColor={useColorModeValue('brand.500', 'brand.400')}
                  borderRadius="2xl"
                  zIndex={1}
                  opacity={0.5}
                />
              </Box>
            </Box>
          </Stack>

        </Container>
      </Box>

      <TimelinePage />

      <Container maxW="6xl" py={48}>
        <VStack gap={16}>
          <VStack gap={4} textAlign="center">
            <Heading size="2xl" color={headingColor} letterSpacing="tight">
              Open Source
            </Heading>
            <Text fontSize="xl" color={subtextColor} maxW="2xl">
              Building projects means the world to me. Check some of them below.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            <FeatureCard
              icon={FaLaptopCode}
              title="Mantra Rota's Website"
              description="A website for Mantra Rota, my band! It showcases our music, events, and more. Built using Mithril.js."
              href="https://github.com/duartecaldascardoso/mantra-rota"
              websiteUrl="https://mantrarota.com/"
            />
            <FeatureCard
              icon={FaBrain}
              title="Football Manager SLMs"
              description="A multi-agent collaboration framework focused on using SLMs for agentic work. Fine-tuning pipelines for Agentic focused work."
              href="https://github.com/duartecaldascardoso/football-manager-slms"
            />
            <FeatureCard
              icon={FaBolt}
              title="Article-Explainer"
              description={
                <>
                  Agentic AI team to explain articles in an easy to understand way. Mentioned twice by LangChain on{' '}
                  <Link href="https://www.linkedin.com/posts/langchain_article-explainer-an-ai-document-analysis-activity-7385706304566194176-Lykn" color="brand.500" target="_blank" rel="noopener noreferrer" textDecoration="underline">
                    LinkedIn
                  </Link>!
                </>
              }
              href="https://github.com/duartecaldascardoso/article-explainer"
              websiteUrl="https://www.linkedin.com/posts/langchain_article-explainer-an-ai-document-analysis-activity-7385706304566194176-Lykn"
            />
            <FeatureCard
              icon={FaBalanceScale}
              title="Eunomia"
              description="Your AI companion for building and tracking habits. Being built in stealth. Verging the gap in the use of ML for Agentic work."
              href="https://github.com/duartecaldascardoso/HabitLens"
            />
          </SimpleGrid>
        </VStack>
      </Container>

      <Box borderTopWidth="1px" borderTopColor={useColorModeValue('gray.200', 'whiteAlpha.100')} py={12} bg={useColorModeValue('white', 'black')}>
        <Container maxW="6xl">
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" gap={6}>
            <VStack align={{ base: 'center', md: 'start' }} textAlign={{ base: 'center', md: 'left' }}>
              <Heading size="lg" color={headingColor}>
                Let's Connect
              </Heading>
              <Text color={subtextColor}>
                Always open to discussing new ideas and opportunities.
              </Text>
            </VStack>

            <HStack gap={6} justify="center">
              <ThreeDButton href="https://github.com/duartecaldascardoso">
                <Icon as={FaGithub} boxSize={6} />
              </ThreeDButton>
              <ThreeDButton href="https://www.linkedin.com/in/duartecardoso/">
                <Icon as={FaLinkedin} boxSize={6} />
              </ThreeDButton>
            </HStack>
          </Flex>
          <Text textAlign="center" fontSize="sm" color="gray.500" mt={10}>
            © {new Date().getFullYear()} Duarte Cardoso. All rights reserved.
          </Text>
        </Container>
      </Box>
    </Flex>
  )
}
