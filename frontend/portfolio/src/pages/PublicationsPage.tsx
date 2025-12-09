import { Container, VStack } from '@chakra-ui/react';
import { ArticlesSection } from '../components/ui/ArticlesSection';
import { ScientificPapersSection } from '../components/ui/ScientificPapersSection';

export default function PublicationsPage() {
    return (
        <Container maxW="6xl">
            <VStack align="stretch">
                <ArticlesSection />
                <ScientificPapersSection />
            </VStack>
        </Container>
    );
}
