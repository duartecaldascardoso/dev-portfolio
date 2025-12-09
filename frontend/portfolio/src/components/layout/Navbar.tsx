import { Box, Flex, HStack, Text, IconButton, useDisclosure, Stack } from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useColorModeValue } from '../ui/color-mode';
import { ColorModeButton } from '../ui/color-mode';

const MotionBox = motion(Box);

const navLinks = [
    { name: 'About', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Publications', path: '/publications' },
];

export const Navbar = () => {
    const { open, onToggle } = useDisclosure();
    const bg = useColorModeValue('white', 'gray.900');
    const borderColor = useColorModeValue('gray.900', 'white');
    const inactiveColor = useColorModeValue('gray.600', 'gray.400');
    const activeColor = useColorModeValue('white', 'black');
    const activeBg = useColorModeValue('black', 'white');

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={1000}
            display="flex"
            justifyContent="center"
            pointerEvents="none"
        >
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                height="20" // Reduced from 28
                bg={useColorModeValue('rgba(255, 255, 255, 0.1)', 'rgba(5, 5, 5, 0.2)')}
                backdropFilter="blur(16px)"
                borderBottom="1px solid"
                borderColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
                pointerEvents="auto" // Blocks clicks to page behind it
            />
            <Flex
                pointerEvents="auto"
                mt={3} // Adjusted for new height (20 = 5rem. Pill height ~3rem. 5-3 / 2 = 1rem but need visual balance)
                alignItems="center"
                gap={4}
                bg={bg}
                p={1.5}
                px={4}
                borderRadius="full"
                border="2px solid"
                borderColor="black" // Match ThreeDButton borderColor
                boxShadow={useColorModeValue(
                    `4px 4px 0px 0px black`,
                    `4px 4px 0px 0px var(--chakra-colors-gray-600)` // Match ThreeDButton shadowColor
                )}
                position="relative"
                zIndex={1}
            >
                {/* Desktop Navigation */}
                <HStack gap={1} display={{ base: 'none', md: 'flex' }}>
                    {navLinks.map((link) => (
                        <RouterLink key={link.name} to={link.path}>
                            {({ isActive }) => (
                                <Box
                                    position="relative"
                                    px={6}
                                    py={2}
                                    borderRadius="full"
                                    color={isActive ? activeColor : inactiveColor}
                                    fontWeight="bold"
                                    transition="color 0.2s"
                                    _hover={{
                                        color: isActive ? undefined : activeColor,
                                    }}
                                >
                                    {isActive && (
                                        <MotionBox
                                            layoutId="navbar-pill"
                                            position="absolute"
                                            inset={0}
                                            bg={activeBg}
                                            borderRadius="full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 } as any}
                                        />
                                    )}
                                    <Text position="relative" zIndex={1}>
                                        {link.name}
                                    </Text>
                                </Box>
                            )}
                        </RouterLink>
                    ))}
                </HStack>

                {/* Separator */}
                <Box w="1px" h="24px" bg="gray.300" mx={2} display={{ base: 'none', md: 'block' }} />

                {/* Mobile Navigation Toggle */}
                <HStack display={{ base: 'flex', md: 'none' }} gap={2}>
                    <IconButton
                        onClick={onToggle}
                        variant="ghost"
                        borderRadius="full"
                        aria-label="Toggle Navigation"
                        aria-expanded={open}
                    >
                        {open ? <FaTimes /> : <FaBars />}
                    </IconButton>
                </HStack>

                <ColorModeButton />
            </Flex>

            {/* Mobile Navigation Menu Overlay */}
            <AnimatePresence>
                {open && (
                    <MotionBox
                        pointerEvents="auto"
                        position="absolute"
                        top="100%"
                        mt={8} // Adjusted for the new top margin
                        bg={bg}
                        borderRadius="xl"
                        border="2px solid"
                        borderColor={borderColor}
                        boxShadow="lg"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 } as any}
                        overflow="hidden"
                        display={{ md: 'none' }}
                        zIndex={2}
                    >
                        <Stack as="nav" gap={1} p={2} minW="200px">
                            {navLinks.map((link) => (
                                <RouterLink key={link.name} to={link.path} onClick={onToggle}>
                                    {({ isActive }) => (
                                        <Box
                                            py={2}
                                            px={4}
                                            borderRadius="lg"
                                            bg={isActive ? activeBg : 'transparent'}
                                            color={isActive ? activeColor : inactiveColor}
                                            fontWeight="medium"
                                            textAlign="center"
                                            _hover={{ bg: activeBg }}
                                        >
                                            {link.name}
                                        </Box>
                                    )}
                                </RouterLink>
                            ))}
                        </Stack>
                    </MotionBox>
                )}
            </AnimatePresence>
        </Box>
    );
};
