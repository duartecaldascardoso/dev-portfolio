import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../ui/Footer';
import { useColorModeValue } from '../ui/color-mode';
import ScrollToTop from '../utils/ScrollToTop';

export const Layout = () => {
    const bg = useColorModeValue('bg.main', 'bg.main');

    return (
        <Flex direction="column" minH="100vh" bg={bg} position="relative">
            <ScrollToTop />

            <Box as="main" flex="1" py={{ base: 10, md: 14 }}>
                <Outlet />
            </Box>

            <Footer />
        </Flex>
    );
};
