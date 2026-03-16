import { Container, VStack } from '@chakra-ui/react';
import TimelinePage from '../components/ui/Timeline';

export default function AboutPage() {
    return (
        <Container maxW="4xl">
            <VStack align="stretch" gap={6}>
                <TimelinePage />
            </VStack>
        </Container>
    );
}
