
import {
    Box,
    Heading,
    Text,
    VStack,
    HStack,
    Link,
    Icon,
} from '@chakra-ui/react';
import { FaMedium } from 'react-icons/fa';
import { useColorModeValue } from './color-mode';

interface MediumCardProps {
    title: string;
    description: string;
    date: string;
    href?: string;
    readTime?: string;
}

export const MediumCard = ({
    title,
    description,
    date,
    href,
    readTime,
    icon = FaMedium,
}: MediumCardProps & { icon?: React.ElementType }) => {
    const bg = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('black', 'black');
    const headingColor = useColorModeValue('gray.900', 'white');
    const textColor = useColorModeValue('gray.600', 'gray.400');
    const dateColor = useColorModeValue('gray.500', 'gray.500');

    const CardContent = (
        <Box
            bg={bg}
            border="2px solid"
            borderColor={borderColor}
            borderRadius="2xl"
            p={6}
            position="relative"
            transition="all 0.1s"
            top="0px"
            left="0px"
            h="full"
            boxShadow={useColorModeValue(
                `6px 6px 0px 0px ${borderColor}`,
                `6px 6px 0px 0px var(--chakra-colors-gray-600)`
            )}
            _hover={href ? {
                top: "-2px",
                left: "-2px",
                boxShadow: useColorModeValue(
                    `8px 8px 0px 0px ${borderColor}`,
                    `8px 8px 0px 0px var(--chakra-colors-gray-600)`
                ),
            } : {}}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
        >
            <VStack align="start" gap={4}>
                <HStack justify="space-between" w="full">
                    <Icon as={icon} boxSize={6} color={headingColor} />
                    <Text fontSize="xs" fontWeight="bold" color={dateColor} textTransform="uppercase" letterSpacing="wide">
                        {date}
                    </Text>
                </HStack>

                <VStack align="start" gap={2}>
                    <Heading size="md" color={headingColor} lineHeight="short">
                        {title}
                    </Heading>
                    <Text color={textColor} fontSize="sm" lineHeight="tall" lineClamp={3}>
                        {description}
                    </Text>
                </VStack>
            </VStack>

            {readTime && (
                <Text fontSize="xs" color={dateColor} mt={4} fontWeight="medium">
                    {readTime} read
                </Text>
            )}
        </Box>
    );

    if (href) {
        return (
            <Link
                href={href}
                _hover={{ textDecoration: 'none' }}
                target="_blank"
                rel="noopener noreferrer"
                w="full"
            >
                {CardContent}
            </Link>
        );
    }

    return <Box w="full">{CardContent}</Box>;
};
