'use client'

import {
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Flex,
  Box,
  SimpleGrid,
  Icon,
  VStack,
  HStack,
  Badge,
  Link,
  Image,
} from '@chakra-ui/react'
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaLaptopCode,
  FaEnvelope,
  FaRobot,
  FaBolt,
} from 'react-icons/fa'
import { useColorModeValue, ColorModeButton } from './color-mode';

interface FeatureCardProps {
  icon: React.ComponentType
  title: string
  description: string
  href: string
  websiteUrl?: string
}

const FeatureCard = ({ icon, title, description, href, websiteUrl }: FeatureCardProps) => {
  const bg = useColorModeValue('white', '#0a0a0a')
  const border = useColorModeValue('orange.300', 'orange.400')
  const headingColor = useColorModeValue('orange.400', 'orange.300')
  const textColor = useColorModeValue('black', 'white')
  const githubIconHover = useColorModeValue('orange.500', 'orange.400')

  return (
    <Box
      p={6}
      shadow="lg"
      borderWidth="1px"
      borderRadius="xl"
      position="relative"
      bg={bg}
      borderColor={border}
      transition="all 0.3s"
    >
      <Link
        href={href}
        position="absolute"
        top={4}
        right={4}
        color="gray.400"
        _hover={{ color: githubIconHover }}
      >
        <Icon as={FaGithub} boxSize={5} />
      </Link>

      <VStack gap={4}>
        <Icon as={icon} w={12} h={12} color="orange.400" />

        {websiteUrl ? (
          <Link
            href={websiteUrl}
            color="orange.300"
            fontWeight="bold"
            textDecoration="underline"
          >
            <Heading size="md" textAlign="center" color={headingColor}>
              {title}
            </Heading>
          </Link>
        ) : (
          <Heading size="md" textAlign="center" color={headingColor}>
            {title}
          </Heading>
        )}

        <Text color={textColor} textAlign="center">
          {description}
        </Text>
      </VStack>
    </Box>
  )
}

export default function PortfolioPage() {
  const bg = useColorModeValue('white', 'black')
  const headingColor = useColorModeValue('orange.400', 'orange.300')
  const subtextColor = useColorModeValue('gray.600', 'gray.400')
  const badgeBg = useColorModeValue('orange.400', 'orange.500')
  const badgeTextColor = useColorModeValue('white', 'black')
  const footerBorder = useColorModeValue('orange.300', 'orange.500')

  return (
    <Flex direction="column" minH="100vh" bg={bg}>
      <Box position="fixed" top={6} right={6} zIndex="1000" p={2}>
        <ColorModeButton />
      </Box>

      <Box minH="100vh" position="relative" overflow="hidden">
        <Flex minH="100vh" align="center" justify="center" px={4} zIndex="1">
          <Container maxW="6xl" py={{ base: 20, md: 36 }}>
            <Stack textAlign="center" gap={{ base: 8, md: 14 }}>
              <VStack gap={4}>
              <Box position="relative" w="360px" h="360px">

                <Image
                  src="/config/profile.jpg"
                  boxSize="200px"
                  borderRadius="full"
                  fit="cover"
                  alt="Duarte Cardoso's profile picture"
                  border="2px solid"
                  borderColor="orange.500"
                  objectPosition="0px -100px"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  zIndex="2"
                />

                <Image
                  src="/config/bass.jpg"
                  boxSize="160px"
                  borderRadius="full"
                  fit="cover"
                  border="2px solid"
                  borderColor="orange.500"
                  transform="rotate(-10deg)"
                  position="absolute"
                  top="-40px"
                  left="20%"
                  transformOrigin="center"
                  zIndex="1"
                  boxShadow="lg"
                />

                <Image
                  src="/config/chess.jpg"
                  boxSize="160px"
                  borderRadius="full"
                  fit="cover"
                  border="2px solid"
                  borderColor="orange.500"
                  position="absolute"
                  bottom="40px"
                  left="-5"
                  zIndex="1"
                  boxShadow="lg"
                />

                <Image
                  src="/config/travel.jpg"
                  boxSize="160px"
                  borderRadius="full"
                  fit="cover"
                  border="2px solid"
                  borderColor="orange.500"
                  position="absolute"
                  bottom="20px"
                  right="0"
                  zIndex="1"
                  boxShadow="lg"
                />
              </Box>
                <Heading
                  as="h1"
                  fontWeight="bold"
                  fontSize={{ base: '3xl', sm: '5xl', md: '6xl' }}
                  lineHeight="110%"
                  color={headingColor}
                >
                  Hi, I'm Duarte.
                </Heading>
                <Heading
                  as="h3"
                  fontWeight="bold"
                  fontSize={{ base: '3l', sm: '5l', md: '6l' }}
                  lineHeight="110%"
                  color={subtextColor}
                >
                  Musician, Chess player, Traveler and Software Engineer.
                </Heading>
                <Text fontSize="l" maxW="2xl" mx="auto" color={subtextColor}>
                  I view myself as a creative person, focused on building intelligent, user-centric systems.
                  I truly enjoy technology and am passionate about building and learning in the field.
                </Text>
              </VStack>


              <Stack direction={{ base: 'column', sm: 'row' }} gap={4} justify="center" align="center">
                <Link href="https://github.com/duartecaldascardoso">
                  <Button variant="outline" borderColor="orange.400" color="orange.300" _hover={{ bg: 'orange.500', color: 'black' }}>
                    <Icon as={FaGithub} mr={2} />
                    GitHub
                  </Button>
                </Link>
                <Link href="mailto:caldasdcardoso@gmail.com">
                  <Button variant="outline" borderColor="orange.400" color="orange.300" _hover={{ bg: 'orange.500', color: 'black' }}>
                    <Icon as={FaEnvelope} mr={2} />
                    Get in Touch
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Container>
        </Flex>
      </Box>
    
      <Container maxW="6xl" py={16}>
        <VStack gap={16}>
          <VStack gap={4} textAlign="center">
            <Heading size="xl" color={headingColor}>
              My open source projects
            </Heading>
            <Text fontSize="l" color={subtextColor} maxW="2xl">
              As any rusty developer, I work on projects for my own fun. Here are some of the ones I did:
            </Text>
                <Badge
                  px={4}
                  py={2}
                  borderRadius="full"
                  bg={badgeBg}
                  color={badgeTextColor}
                  border="1px solid"
                  borderColor="orange.400"
                >
                  CLI tools • AI agents • React • Rust • Java • Python
                </Badge>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={8}>
            <FeatureCard
              icon={FaLaptopCode}
              title="Mantra Rota's Website"
              description="A website for Mantra Rota, my band! It showcases our music, events, and more."
              href="https://github.com/duartecaldascardoso/mantra-rota"
              websiteUrl="https://mantrarota.com/"
            />
            <FeatureCard
              icon={FaCode}
              title="Sudoku Solver"
              description="A Sudoku puzzle solver built with backtracking and visualization logic built in Java."
              href="https://github.com/duartecaldascardoso/sudoku-solver"
            />
            <FeatureCard
              icon={FaBolt}
              title="Damn"
              description="A blazing-fast CLI tool for correcting command mistakes based on previous entries. Built with Rust."
              href="https://github.com/duartecaldascardoso/damn"
            />
            <FeatureCard
              icon={FaRobot}
              title="FolderSort"
              description="A CLI tool to organize folders and desktop environments using AI agents."
              href="https://github.com/duartecaldascardoso/folderSort"
              websiteUrl="https://duartecaldascardoso.github.io/folderSort/"
            />
          </SimpleGrid>
        </VStack>
      </Container>

      <Box borderTopWidth="1px" borderTopColor={footerBorder} py={20}>
        <Container maxW="6xl">
          <VStack gap={6}>
            <Heading size="xl" color={headingColor}>
              Get in Touch
            </Heading>
            <Text fontSize="l" color={subtextColor}>
              I am open contributing to open source projects, collaborating on exciting ideas and speaking about what I do.
            </Text>

            <HStack gap={6} justify="center">
              <Link href="https://github.com/duartecaldascardoso">
                <Button size="lg" variant="ghost" color="orange.300" _hover={{ color: 'orange.500' }}>
                  <Icon as={FaGithub} />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/duartecardoso/">
                <Button size="lg" variant="ghost" color="orange.300" _hover={{ color: 'orange.500' }}>
                  <Icon as={FaLinkedin} />
                </Button>
              </Link>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Flex>
  )
}
