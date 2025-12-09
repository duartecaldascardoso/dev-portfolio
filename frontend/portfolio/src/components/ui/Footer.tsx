
import {
    Box,
    Container,
    Flex,
    VStack,
    Heading,
    Text,
    HStack,
    Icon,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useColorModeValue } from './color-mode';
import { ThreeDButton } from './ThreeDButton';

export const Footer = () => {
    const headingColor = useColorModeValue('gray.900', 'white');
    const subtextColor = useColorModeValue('gray.600', 'gray.400');

    return (
        <Box
            borderTopWidth="1px"
            borderTopColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
            py={12}
            bg={useColorModeValue('white', 'black')}
        >
            <Container maxW="6xl">
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    justify="space-between"
                    align="center"
                    gap={6}
                >
                    <VStack
                        align={{ base: 'center', md: 'start' }}
                        textAlign={{ base: 'center', md: 'left' }}
                    >
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
    );
};
