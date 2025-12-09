
import {
    Container,
    VStack,
    Heading,
    Text,
    SimpleGrid,
} from '@chakra-ui/react';
import { useColorModeValue } from './color-mode';

import { FaFileAlt } from 'react-icons/fa';
import { ArticleCard } from './ArticleCard';

export const ScientificPapersSection = () => {
    const headingColor = useColorModeValue('gray.900', 'white');
    const subtextColor = useColorModeValue('gray.600', 'gray.400');

    return (
        <Container maxW="6xl" py={12}>
            <VStack gap={16}>
                <VStack gap={4} textAlign="center">
                    <Heading size="2xl" color={headingColor} letterSpacing="tight">
                        Scientific Papers
                    </Heading>
                    <Text fontSize="xl" color={subtextColor} maxW="2xl">
                        My contributions to scientific research.
                    </Text>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} w="full">
                    <ArticleCard
                        title="Automated Extraction of Insurance Product Characteristics"
                        description="Co-authored. Published in SEI 2025."
                        date="Nov 2025"
                        readTime="Paper"
                        icon={FaFileAlt}
                    />
                    <ArticleCard
                        title="Simplifying Complex Insurance Product Management with AI"
                        description="Co-authored. Published in SEI 2025."
                        date="Nov 2025"
                        readTime="Paper"
                        icon={FaFileAlt}
                    />
                </SimpleGrid>
            </VStack>
        </Container>
    );
};
