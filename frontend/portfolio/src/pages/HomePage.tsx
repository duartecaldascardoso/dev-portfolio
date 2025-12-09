import { Container, Box } from '@chakra-ui/react';
import TimelinePage from '../components/ui/Timeline';
import { HeroSection } from '../components/ui/HeroSection';

export default function HomePage() {
    return (
        <Container maxW="6xl">
            <HeroSection />
            <Box mt={12}>
                <TimelinePage />
            </Box>
        </Container>
    );
}
