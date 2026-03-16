
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

interface ArticleCardProps {
    title: string;
    description: string;
    date: string;
    href?: string;
    readTime?: string;
}

export const ArticleCard = ({
    title,
    description,
    date,
    href,
    readTime,
    icon = FaMedium,
}: ArticleCardProps & { icon?: React.ElementType }) => {
    const bg = useColorModeValue('bg.muted', 'bg.muted');
    const borderColor = useColorModeValue('brand.muted', 'brand.fg');
    const headingColor = useColorModeValue('brand.solid', 'brand.light');
    const textColor = useColorModeValue('brand.fg', 'brand.muted');
    const dateColor = useColorModeValue('brand.fg', 'brand.muted');

    const CardContent = (
        <Box
            bg={bg}
            border="1px solid"
            borderColor={borderColor}
            borderRadius="md"
            p={6}
            position="relative"
            transition="all 0.1s"
            h="full"
            _hover={href ? {
                borderColor: headingColor,
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
                    <Text fontSize="sm" color={headingColor} fontWeight="semibold">
                        Read more
                    </Text>
                </VStack>
            </VStack>

            {readTime && (
                <Text fontSize="xs" color={dateColor} mt={4} fontWeight="Article">
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
