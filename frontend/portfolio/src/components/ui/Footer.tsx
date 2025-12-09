
import {
    Box,
    Container,
    VStack,
    Heading,
    Text,
    HStack,
    Icon,
    Grid,
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
            <Container maxW="full" px={{ base: 6, md: 8 }}>
                <Grid
                    templateColumns={{ base: '1fr', md: '1fr auto 1fr' }}
                    gap={4}
                    alignItems="center"
                >
                    <VStack
                        align="start"
                        textAlign="left"
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

                    {/* Empty Box to balance the grid on desktop */}
                    <Box display={{ base: 'none', md: 'block' }} />
                </Grid>
            </Container>
        </Box>
    );
};
