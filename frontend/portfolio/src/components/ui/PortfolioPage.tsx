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
} from '@chakra-ui/react'
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaLaptopCode,
  FaLightbulb,
  FaEnvelope,
  FaUserAstronaut,
} from 'react-icons/fa'
import { useColorModeValue, ColorModeButton } from './color-mode';
import TerminalBox from './terminalBox';

interface FeatureCardProps {
  icon: React.ComponentType;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Box
    p={6}
    shadow="lg"
    borderWidth="1px"
    borderRadius="xl"
    bg={useColorModeValue('black', '#0a0a0a')}
    borderColor={useColorModeValue('orange.500', 'orange.400')}
    _hover={{ transform: 'translateY(-2px)', shadow: 'xl' }}
    transition="all 0.3s"
  >
    <VStack gap={4}>
      <Icon as={icon} w={12} h={12} color="orange.400" />
      <Heading size="md" textAlign="center" color="orange.300">
        {title}
      </Heading>
      <Text color="gray.400" textAlign="center">
        {description}
      </Text>
    </VStack>
  </Box>
)

export default function PortfolioPage() {
  return (
    <>
      <Flex direction="column" minH="100vh" bg="black">
        <Box position="fixed" top={6} right={6} zIndex="1000" p={2}>
          <ColorModeButton />
        </Box>

        <Box minH="100vh" position="relative" overflow="hidden">
          <Flex minH="100vh" align="center" justify="center" px={4} zIndex="1">
            <Container maxW="6xl" py={{ base: 20, md: 36 }}>
              <Stack textAlign="center" gap={{ base: 8, md: 14 }}>
                <VStack gap={4}>
                  <Heading
                    as="h1"
                    fontWeight="bold"
                    fontSize={{ base: '3xl', sm: '5xl', md: '6xl' }}
                    lineHeight="110%"
                    color="orange.300"
                  >
                    Hi, I'm Duarte<br />
                    <Text as="span" color="orange.500" textDecorationLine="underline">
                      I build digital tools with purpose.
                    </Text>
                  </Heading>
                  <Badge
                    px={4}
                    py={2}
                    borderRadius="full"
                    bg="orange.500"
                    color="black"
                    border="1px solid"
                    borderColor="orange.400"
                  >
                    Software Engineer • AI Enthusiast • Open Source
                  </Badge>
                </VStack>

                <Text fontSize="l" maxW="2xl" mx="auto" color="gray.400">
                  I'm a developer focused on building intelligent, user-centric systems.
                  I enjoy working across the stack and turning ideas into reality.
                </Text>

                <Stack direction={{ base: 'column', sm: 'row' }} gap={4} justify="center" align="center">
                  <Link href="/resume.pdf">
                    <Button colorScheme="orange" rounded="full" px={8} size="lg">
                      Resume
                    </Button>
                  </Link>
                  <Link href="mailto:duarte@example.com">
                    <Button variant="outline" borderColor="orange.400" color="orange.300" _hover={{ bg: 'orange.500', color: 'black' }}>
                      <Icon as={FaEnvelope} mr={2} />
                      Contact
                    </Button>
                  </Link>
                </Stack>

                <TerminalBox />
              </Stack>
            </Container>
          </Flex>
        </Box>

        <Container maxW="6xl" py={16}>
          <VStack gap={16}>
            <VStack gap={4} textAlign="center">
              <Heading size="xl" color="orange.300">
                What I Do
              </Heading>
              <Text fontSize="l" color="gray.400" maxW="2xl">
                From backend systems to frontend interfaces, I design and develop scalable and intelligent applications.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
              <FeatureCard icon={FaCode} title="Full Stack Dev" description="Proficient in building web & mobile apps using modern frameworks and scalable architectures." />
              <FeatureCard icon={FaLightbulb} title="AI & Automation" description="Implement AI-powered features and automate workflows for smarter user experiences." />
              <FeatureCard icon={FaLaptopCode} title="Open Source" description="Active contributor and maintainer of open projects, including CLI tools and libraries." />
              <FeatureCard icon={FaUserAstronaut} title="Problem Solver" description="Love tackling complex technical challenges with creativity and resilience." />
              <FeatureCard icon={FaGithub} title="Git & DevOps" description="Version control, CI/CD pipelines, and a DevOps mindset to keep things running smooth." />
              <FeatureCard icon={FaLinkedin} title="Teamwork & Leadership" description="Experience in team collaboration, mentoring and leading cross-functional teams." />
            </SimpleGrid>
          </VStack>
        </Container>

        <Box bg="gray.900" color="white" py={20}>
          <Container maxW="6xl">
            <VStack gap={6}>
              <Heading size="xl">Let's Build Something Together</Heading>
              <Text fontSize="l" color="gray.400">
                I'm open to exciting projects, collaborations, or just grabbing a coffee to talk tech.
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

        <Box
          position="absolute"
          bottom={4}
          right={4}
          bg="blackAlpha.600"
          px={3}
          py={2}
          borderRadius="md"
          border="1px solid"
          borderColor="orange.400"
        >
          <Text fontSize="sm" color="gray.400">
            Designed & developed by{' '}
            <Link href="https://www.linkedin.com/in/duartecardoso/" color="orange.300" _hover={{ textDecoration: 'underline' }}>
              Duarte
            </Link>
          </Text>
        </Box>
      </Flex>
    </>
  )
}
