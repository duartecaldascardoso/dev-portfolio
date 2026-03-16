import { Container, VStack } from '@chakra-ui/react';
import { PublicationsSection } from '../components/ui/PublicationsSection';

export default function PublicationsPage() {
    return (
        <Container maxW="4xl">
            <VStack align="stretch" gap={8}>
                <PublicationsSection />
            </VStack>
        </Container>
    );
}
