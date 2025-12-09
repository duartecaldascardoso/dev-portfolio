
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
                        description="I recently stumbled upon a thought-evoking research paper from NVIDIA that challenged how I view AI agents. The premise was simple: we are probably using models that are way too big for what most AI agents actually need to do."
                        date="Nov 9, 2025"
                        readTime="5 min"
                        href="https://medium.com/@caldasdcardoso/the-underrated-role-of-small-language-models-in-agentic-ai-66236a32c576"
                    />
                    <MediumCard
                        title="Inside the LangChain x Manus Webinar on Context Engineering"
                        description='On October 14th, LangChain hosted a webinar exploring one of the most critical emerging topics in AI systems: Context Engineering. Led by Lance Martin and featuring Yichao "Peak" from Manus, the session unpacked how context management is reshaping the design of agentic systems, especially in what many are calling the year of agents.'
                        date="Oct 14, 2025"
                        readTime="4 min"
                        href="https://medium.com/@caldasdcardoso/inside-the-langchain-x-manus-webinar-on-context-engineering-69166ee404db"
                    />
                    <MediumCard
                        title="Swarm Architecture Agents in LangGraph"
                        description="LangGraph provides several ways to handle multi agent interactions. Knowing these can be beneficial when handling different kinds of use cases which may be more prone towards user interaction or complex research tasks for example."
                        date="Sep 10, 2025"
                        readTime="3 min"
                        href="https://medium.com/@caldasdcardoso/swarm-architecture-agents-in-langgraph-b8b1b53c61b3"
                    />
                </SimpleGrid>
            </VStack>
        </Container>
    );
};
