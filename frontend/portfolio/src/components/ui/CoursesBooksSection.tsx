import { Box, Container, Heading, HStack, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { useColorModeValue } from './color-mode';

const learningItems = [
    {
        type: 'Course',
        title: 'Add your completed course title here',
        source: 'LinkedIn Learning / Provider',
    },
    {
        type: 'Course',
        title: 'Add your completed course title here',
        source: 'LinkedIn Learning / Provider',
    },
    {
        type: 'Book',
        title: 'Add your relevant book title here',
        source: 'Author name',
    },
    {
        type: 'Book',
        title: 'Add your relevant book title here',
        source: 'Author name',
    },
];

export const CoursesBooksSection = () => {
    const headingColor = useColorModeValue('brand.solid', 'brand.light');
    const textColor = useColorModeValue('brand.fg', 'brand.muted');
    const borderColor = useColorModeValue('brand.muted', 'brand.fg');

    return (
        <Container id="courses-books" maxW="4xl" py={4}>
            <VStack align="stretch" gap={8}>
                <VStack align="start" gap={3}>
                    <Heading size="2xl" color={headingColor}>
                        Courses & Books
                    </Heading>
                    <Text color={textColor} fontSize="md">
                        Continuous learning references. Update this section directly from your LinkedIn profile entries.
                    </Text>
                    <HStack>
                        <Link
                            href="https://www.linkedin.com/in/duartecardoso/details/certifications/"
                            target="_blank"
                            rel="noopener noreferrer"
                            color={headingColor}
                            fontWeight="semibold"
                        >
                            View certifications on LinkedIn
                        </Link>
                    </HStack>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                    {learningItems.map((item) => (
                        <Box key={`${item.type}-${item.title}`} border="1px solid" borderColor={borderColor} borderRadius="md" p={5}>
                            <Text fontSize="xs" textTransform="uppercase" letterSpacing="wide" color={textColor}>
                                {item.type}
                            </Text>
                            <Text mt={2} fontSize="lg" fontWeight="semibold" color={headingColor}>
                                {item.title}
                            </Text>
                            <Text mt={1} color={textColor}>
                                {item.source}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </VStack>
        </Container>
    );
};
