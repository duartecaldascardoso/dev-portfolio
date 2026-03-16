import { Box, Container, Flex, Icon, Text } from '@chakra-ui/react';
import { useColorModeValue } from '../ui/color-mode';
import { LuMoon } from 'react-icons/lu';

export const Navbar = () => {
    const bg = useColorModeValue('bg.main', 'bg.main');
    const borderColor = useColorModeValue('brand.muted', 'brand.muted');
    const activeColor = useColorModeValue('brand.solid', 'brand.solid');
    const iconColor = useColorModeValue('brand.fg', 'brand.fg');

    return (
        <Box as="header" bg={bg} borderBottom="1px solid" borderColor={borderColor}>
            <Flex
                as={Container}
                maxW="4xl"
                py={4}
                align="center"
                justify="space-between"
            >
                <Text fontWeight="semibold" letterSpacing="wide" color={activeColor}>
                    duartecardoso
                </Text>
                <Icon as={LuMoon} color={iconColor} boxSize={4} />
            </Flex>
        </Box>
    );
};
