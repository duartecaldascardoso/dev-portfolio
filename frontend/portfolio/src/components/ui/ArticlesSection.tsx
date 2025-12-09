
import {
    Container,
    VStack,
    Heading,
    Text,
    SimpleGrid,
} from '@chakra-ui/react';
import { useColorModeValue } from './color-mode';
import { MediumCard } from './MediumCard';

export const ArticlesSection = () => {
    const headingColor = useColorModeValue('gray.900', 'white');
    const subtextColor = useColorModeValue('gray.600', 'gray.400');

    return (
        <Container maxW="6xl" py={6}>
            <VStack gap={16}>
                <VStack gap={4} textAlign="center">
                    <Heading size="2xl" color={headingColor} letterSpacing="tight">
                        Articles
                    </Heading>
                    <Text fontSize="xl" color={subtextColor} maxW="2xl">
                        Some of my thoughts and experiments written on Medium.
                    </Text>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} w="full">
                    <MediumCard
                        title="The Underrated Role of Small Language Models in Agentic AI"
                        description="Exploring how SLMs can be more efficient and effective than LLMs for specific agentic tasks, validated by a multi-agent football manager experiment."
                        date="Nov 9, 2025"
                        readTime="5 min"
                        href="https://medium.com/@caldasdcardoso/the-underrated-role-of-small-language-models-in-agentic-ai-11f87a3290b2"
                    />
                    <MediumCard
                        title="Context Engineering: Lessons from the LangChain x Manus Webinar"
                        description="A deep dive into context management strategies for AI agents, covering context reduction, isolation, and the future of agentic architectures."
                        date="Oct 2025"
                        readTime="6 min"
                        href="https://medium.com/@caldasdcardoso"
                    />
                    <MediumCard
                        title="Swarms with Subgraphs"
                        description="How to compile complex workflows into single agent units using LangGraph subgraphs, enabling more scalable and manageable multi-agent swarms."
                        date="Nov 2025"
                        readTime="4 min"
                        href="https://medium.com/@caldasdcardoso"
                    />
                </SimpleGrid>
            </VStack>
        </Container>
    );
};
