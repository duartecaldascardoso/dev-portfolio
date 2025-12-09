
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
            position="relative"
            bottom={0}
            left={0}
            right={0}
            zIndex={100}
            borderTopWidth="1px"
            borderTopColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
            py={3}
        >
            <Container maxW="6xl">
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    justify="space-between"
                    align="center"
                    gap={4}
                >
                    <VStack
                        align={{ base: 'center', md: 'start' }}
                        textAlign={{ base: 'center', md: 'left' }}
                        gap={0}
                    >
                        <Heading size="md" color={headingColor}>
                            Let's Connect
                        </Heading>
                        <Text fontSize="sm" color={subtextColor}>
                            Always open to discussing new ideas and opportunities.
                        </Text>
                    </VStack>

                    <HStack gap={4} justify="center">
                        <ThreeDButton href="https://github.com/duartecaldascardoso">
                            <Icon as={FaGithub} boxSize={5} />
                        </ThreeDButton>
                        <ThreeDButton href="https://www.linkedin.com/in/duartecardoso/">
                            <Icon as={FaLinkedin} boxSize={5} />
                        </ThreeDButton>
                    </HStack>
                </Flex>
                <Text textAlign="center" fontSize="xs" color="gray.500" mt={2}>
                    © {new Date().getFullYear()} Duarte Cardoso. All rights reserved.
                </Text>
            </Container>
        </Box>
    );
};
