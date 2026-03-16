
import {
    Container,
    Stack,
    SimpleGrid,
    Heading,
    Text,
    HStack,
    Link,
    Image,
    Icon,
    VStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useColorModeValue } from './color-mode';
import { LuBookOpenText, LuFolderGit2, LuGraduationCap, LuUserRound } from 'react-icons/lu';

const quickLinks = [
    { label: 'About Me', to: '/about', icon: LuUserRound },
    { label: 'Publications', to: '/publications', icon: LuBookOpenText },
    { label: 'Courses & Books', to: '/courses', icon: LuGraduationCap },
    { label: 'Projects', to: '/projects', icon: LuFolderGit2 },
];

export const HeroSection = () => {
    const headingColor = useColorModeValue('brand.solid', 'brand.solid');
    const subtextColor = useColorModeValue('brand.fg', 'brand.fg');
    const borderColor = useColorModeValue('brand.muted', 'brand.muted');

    return (
        <Container maxW="4xl" py={{ base: 6, md: 10 }}>
            <VStack align="stretch" gap={6}>
                <Stack direction={{ base: 'column-reverse', md: 'row' }} gap={6} align="start">
                    <VStack align="start" gap={3} flex={1}>
                        <Heading as="h1" fontSize={{ base: '3xl', md: '5xl' }} lineHeight="2" color={headingColor}>
                            Hello, I am Duarte
                        </Heading>

                        <Text color={subtextColor} fontSize="lg" lineHeight="1.7">
                            I am an AI Engineer based in <Text as="span" fontWeight="bold">Porto</Text>, Portugal, with a background in Software Engineering. Since joining <Text as="span" fontWeight="bold">MSG Life Iberia</Text> in 2023, I have transitioned from my internship to delivering enterprise-grade solutions in the insurance domain, spanning full stack and AI development.
                        </Text>

                        <Text color={subtextColor} fontSize="lg" lineHeight="1.7">
                            My recent work includes developing the company’s official tool for Document Intelligence based on an Agentic RAG architecture and a specialized module for our core product, <Text as="span" fontWeight="bold">Product Machine</Text>. This artificial intelligence driven module, Configure:it, accelerates insurance configuration through automated information extraction from product documents, natural language data querying, and NL-driven product modifications.
                        </Text>

                        <Text color={subtextColor} fontSize="lg" lineHeight="1.7">
                            I am currently completing my Master’s in Software Engineering at FEUP (July 2026). My thesis, <Text as="span" fontWeight="bold">Product Validation Accelerator Engine,</Text> leverages Agentic AI and the integration with testing tools such as Combinatorial Testing, Boundary Value Analysis and Equivalence Class Partitioning to automate and optimize the verification of complex insurance product configurations.
                        </Text>

                        <HStack gap={4} fontSize="sm" color={subtextColor} wrap="wrap" pt={1}>
                            <Link href="https://github.com/duartecaldascardoso" target="_blank" rel="noopener noreferrer">GitHub</Link>
                            <Link href="mailto:caldasdcardoso@gmail.com">Email</Link>
                            <Link href="https://www.linkedin.com/in/duartecardoso/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                            <Link href={`${import.meta.env.BASE_URL}config/DuarteCardoso.pdf`} target="_blank" rel="noopener noreferrer">CV</Link>
                        </HStack>
                    </VStack>

                    <Image
                        src={`${import.meta.env.BASE_URL}config/profile.jpg`}
                        alt="Duarte Cardoso"
                        borderRadius="full"
                        objectFit="cover"
                        objectPosition="center 65%"
                        h={{ base: '280px', md: '320px' }}
                        w={{ base: '280px', md: '320px' }}
                        border="1px solid"
                        borderColor={borderColor}
                        mx={{ base: 'auto', md: 0 }}
                    />
                </Stack>

                <SimpleGrid columns={{ base: 1, sm: 2 }} gap={3}>
                    {quickLinks.map((item) => (
                        <Link
                            key={item.label}
                            asChild
                            border="1px solid"
                            borderColor={borderColor}
                            borderRadius="md"
                            px={4}
                            py={3}
                            flex={1}
                            _hover={{ textDecoration: 'none', borderColor: headingColor }}
                        >
                            <RouterLink to={item.to}>
                                <HStack justify="center" gap={2} color={headingColor}>
                                    <Icon as={item.icon} />
                                    <Text fontWeight="semibold" fontSize="sm">{item.label}</Text>
                                </HStack>
                            </RouterLink>
                        </Link>
                    ))}
                </SimpleGrid>
            </VStack>
        </Container>
    );
};
