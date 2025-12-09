
import { Box, Link } from '@chakra-ui/react';
import { useColorModeValue } from './color-mode';

interface ThreeDButtonProps extends React.ComponentProps<typeof Box> {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    newTab?: boolean;
}

export const ThreeDButton = ({ children, href, onClick, newTab, ...props }: ThreeDButtonProps) => {
    const bg = useColorModeValue('white', 'gray.800');
    const color = useColorModeValue('black', 'white');
    const borderColor = 'black'; // Always black border as per user request ("same colors... in black mode") - actually MediumCard has useColorModeValue('black', 'black') so it's always black.

    const Component = (
        <Box
            as="button"
            bg={bg}
            color={color}
            border="2px solid"
            borderColor={borderColor}
            borderRadius="full"
            px={8}
            h={14}
            fontWeight="bold"
            fontSize="lg"
            position="relative"
            transition="all 0.1s"
            top="0px"
            left="0px"
            boxShadow={useColorModeValue(
                `4px 4px 0px 0px ${borderColor}`,
                `4px 4px 0px 0px var(--chakra-colors-gray-600)`
            )}
            _active={{
                top: "2px",
                left: "2px",
                boxShadow: useColorModeValue(
                    `2px 2px 0px 0px ${borderColor}`,
                    `2px 2px 0px 0px var(--chakra-colors-gray-600)`
                ),
            }}
            _hover={{
                top: "-1px",
                left: "-1px",
                boxShadow: useColorModeValue(
                    `6px 6px 0px 0px ${borderColor}`,
                    `6px 6px 0px 0px var(--chakra-colors-gray-600)`
                ),
            }}
            display="flex"
            alignItems="center"
            gap={2}
            onClick={onClick}
            {...props}
        >
            {children}
        </Box>
    );

    if (href) {
        return (
            <Link
                href={href}
                textDecoration="none"
                _hover={{ textDecoration: 'none' }}
                target={newTab ? "_blank" : undefined}
                rel={newTab ? "noopener noreferrer" : undefined}
            >
                {Component}
            </Link>
        );
    }
    return Component;
};
