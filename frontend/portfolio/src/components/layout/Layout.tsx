import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from '../ui/Footer';
import { useColorModeValue } from '../ui/color-mode';
import { BackgroundFlair } from '../ui/BackgroundFlair';
import ScrollToTop from '../utils/ScrollToTop';

export const Layout = () => {
    const bg = useColorModeValue('gray.50', '#0a0a0a');

    return (
        <Flex direction="column" minH="100vh" bg={bg} position="relative">
            <ScrollToTop />
            <BackgroundFlair />

            <Navbar />

            <Box as="main" flex="1" pt={28} pb={32}>
                <Outlet />
            </Box>

            <Footer />
        </Flex>
    );
};
