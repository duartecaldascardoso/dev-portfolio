
import {
    Box,
    Container,
    HStack,
    Link,
    Text,
} from '@chakra-ui/react';
import { useColorModeValue } from './color-mode';

export const Footer = () => {
    const textColor = useColorModeValue('brand.fg', 'brand.muted');
    const borderColor = useColorModeValue('brand.muted', 'brand.fg');

    return (
        <Box borderTop="1px solid" borderColor={borderColor} py={6}>
            <Container maxW="4xl">
                <HStack justify="space-between" wrap="wrap" gap={3}>
                    <Text fontSize="sm" color={textColor}>© Duarte Cardoso</Text>
                    <HStack gap={4} fontSize="sm">
                        <Link href="https://github.com/duartecaldascardoso" target="_blank" rel="noopener noreferrer" color={textColor}>GitHub</Link>
                        <Link href="https://www.linkedin.com/in/duartecardoso/" target="_blank" rel="noopener noreferrer" color={textColor}>LinkedIn</Link>
                    </HStack>
                </HStack>
            </Container>
        </Box>
    );
};
