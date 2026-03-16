import { Box, Container, Heading, HStack, Link, Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';

const books = [
    { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann' },
    { title: 'AI Engineering', author: 'Chip Huyen' },
    { title: 'Architecture Patterns with Python', author: 'Harry J.W. Percival and Bob Gregory' },
];

export default function BooksPage() {
    return (
        <Container maxW="4xl">
            <VStack align="stretch" gap={8}>
                <VStack align="start" gap={3}>
                    <HStack gap={2} fontSize="sm" color="gray.600">
                        <Link asChild _hover={{ textDecoration: 'underline' }}>
                            <RouterLink to="/">Home</RouterLink>
                        </Link>
                        <Text>»</Text>
                        <Text>Books</Text>
                    </HStack>
                    <Heading size="2xl">Books</Heading>
                </VStack>

                {books.map((book) => (
                    <Box key={book.title} pb={4} borderBottom="1px solid" borderColor="gray.200">
                        <HStack gap={2} mb={1}>
                            <FaBook />
                            <Text fontWeight="semibold">{book.title}</Text>
                        </HStack>
                        <Text fontSize="sm" color="gray.600">{book.author}</Text>
                    </Box>
                ))}
            </VStack>
        </Container>
    );
}
