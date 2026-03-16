
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
    const headingColor = useColorModeValue('brand.solid', 'brand.light');
    const subtextColor = useColorModeValue('brand.fg', 'brand.muted');

    return (
        <Container maxW="4xl" py={4}>
            <VStack gap={10} align="stretch">
                <VStack gap={3} align="start" textAlign="left">
                    <Heading size="2xl" color={headingColor} letterSpacing="tight">
                        Scientific Papers
                    </Heading>
                    <Text fontSize="md" color={subtextColor} maxW="2xl">
                        My contributions to scientific research.
                    </Text>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
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
