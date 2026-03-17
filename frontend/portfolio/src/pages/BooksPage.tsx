import { Box, Container, Heading, HStack, Image, Link, Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';

const books = [
    {
        title: 'Designing Data-Intensive Applications',
        author: 'Martin Kleppmann',
        cover: 'https://covers.openlibrary.org/b/isbn/9781449373320-L.jpg',
    },
    {
        title: 'AI Engineering',
        author: 'Chip Huyen',
        cover: 'https://covers.openlibrary.org/b/isbn/9781098166304-L.jpg',
    },
    {
        title: 'Architecture Patterns with Python',
        author: 'Harry J.W. Percival and Bob Gregory',
        cover: 'https://covers.openlibrary.org/b/isbn/9781492052203-L.jpg',
    },
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
                        <HStack align="start" gap={4}>
                            <Image
                                src={book.cover}
                                alt={`${book.title} cover`}
                                w="70px"
                                h="100px"
                                objectFit="cover"
                                borderRadius="md"
                                border="1px solid"
                                borderColor="gray.200"
                            />
                            <VStack align="start" gap={1}>
                                <HStack gap={2}>
                                    <FaBook />
                                    <Text fontWeight="semibold">{book.title}</Text>
                                </HStack>
                                <Text fontSize="sm" color="gray.600">{book.author}</Text>
                            </VStack>
                        </HStack>
                    </Box>
                ))}
            </VStack>
        </Container>
    );
}
