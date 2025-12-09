
import {
    Box,
    Container,
    Stack,
    VStack,
    Badge,
    Heading,
    Text,
    Image,
    Icon,
} from '@chakra-ui/react';
import { FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { useColorModeValue } from './color-mode';
import { ThreeDButton } from './ThreeDButton';

export const HeroSection = () => {
    const headingColor = useColorModeValue('gray.900', 'white');
    const subtextColor = useColorModeValue('gray.600', 'gray.400');

    return (
        <Box position="relative" overflow="hidden" pb={{ base: 10, md: 12 }}>
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
    );
};
