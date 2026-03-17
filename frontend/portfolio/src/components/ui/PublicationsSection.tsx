import { Box, Heading, HStack, Link, Text, VStack } from '@chakra-ui/react';
import { useColorModeValue } from './color-mode';
import { FaCalendarAlt, FaExternalLinkAlt, FaFileAlt, FaMedium } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { Link as RouterLink } from 'react-router-dom';

type PublicationItem = {
    title: string;
    source: string;
    date: string;
    description: string;
    href?: string;
    icon: IconType;
};

const publications: PublicationItem[] = [
    {
        title: 'The Underrated Role of Small Language Models in Agentic AI',
        source: 'Medium',
        date: 'Nov 9, 2025',
        description:
            'I recently stumbled upon a thought-evoking research paper from NVIDIA that challenged how I view AI agents. The premise was simple: we are probably using models that are way too big for what most AI agents actually need to do.',
        href: 'https://medium.com/@caldasdcardoso/the-underrated-role-of-small-language-models-in-agentic-ai-66236a32c576',
        icon: FaMedium,
    },
    {
        title: 'Inside the LangChain x Manus Webinar on Context Engineering',
        source: 'Medium',
        date: 'Oct 14, 2025',
        description:
            'On October 14th, LangChain hosted a webinar exploring one of the most critical emerging topics in AI systems: Context Engineering. Led by Lance Martin and featuring Yichao "Peak" from Manus, the session unpacked how context management is reshaping the design of agentic systems.',
        href: 'https://medium.com/@caldasdcardoso/inside-the-langchain-x-manus-webinar-on-context-engineering-69166ee404db',
        icon: FaMedium,
    },
    {
        title: 'Swarm Architecture Agents in LangGraph',
        source: 'Medium',
        date: 'Sep 10, 2025',
        description:
            'LangGraph provides several ways to handle multi agent interactions. Knowing these can be beneficial when handling different kinds of use cases which may be more prone towards user interaction or complex research tasks for example.',
        href: 'https://medium.com/@caldasdcardoso/swarm-architecture-agents-in-langgraph-b8b1b53c61b3',
        icon: FaMedium,
    },
    {
        title: 'Automated Extraction of Insurance Product Characteristics',
        source: 'SEI 2025',
        date: 'Nov 2025',
        description:
            'Co-authored scientific paper that presents an AI agent workflow supported by NLP, LLMs, and validation schemes to extract insurance product characteristics from regulatory documents with structured, consistent, and quality-assured outputs.',
        href: 'https://sei.dei.isep.ipp.pt/wp-content/uploads/2026/01/SEI25-LdA.pdf',
        icon: FaFileAlt,
    },
    {
        title: 'Simplifying Complex Insurance Product Management with AI',
        source: 'SEI 2025',
        date: 'Nov 2025',
        description:
            'Co-authored scientific paper awarded Best Paper at SEI 2025, introducing Product Machine Explorer, an LLM- and agent-powered tool integrated with Product Machine to explore complex insurance product models through natural language, improving usability and significantly reducing time spent on repetitive analysis tasks.',
        href: 'https://sei.dei.isep.ipp.pt/wp-content/uploads/2026/01/SEI25-LdA.pdf',
        icon: FaFileAlt,
    },
];

export const PublicationsSection = () => {
    const headingColor = useColorModeValue('brand.solid', 'brand.solid');
    const textColor = useColorModeValue('brand.fg', 'brand.fg');
    const borderColor = useColorModeValue('brand.muted', 'brand.muted');
    const linkColor = useColorModeValue('#268bd2', '#268bd2');

    return (
        <VStack align="stretch" gap={8}>
            <VStack align="start" gap={3}>
                <HStack gap={2} fontSize="sm" color={textColor}>
                    <Link asChild _hover={{ textDecoration: 'underline' }}>
                        <RouterLink to="/">Home</RouterLink>
                    </Link>
                    <Text>»</Text>
                    <Text>Publications</Text>
                </HStack>
                <Heading size="2xl" color={headingColor}>
                    Publications
                </Heading>
                <Text color={textColor} maxW="2xl">
                    Articles and scientific papers I have authored or co-authored, sharing insights and research findings in the field of AI and software engineering.
                </Text>
            </VStack>

            <VStack align="stretch" gap={8}>
                {publications.map((item) => (
                    <Box key={item.title} pb={6} borderBottom="1px solid" borderColor={borderColor}>
                        <HStack align="center" gap={2} mb={2} color={textColor} fontSize="sm">
                            <item.icon />
                            <Text>{item.source}</Text>
                            <FaCalendarAlt />
                            <Text>{item.date}</Text>
                        </HStack>

                        {item.href ? (
                            <Link
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                color={linkColor}
                                fontSize="2xl"
                                fontWeight="semibold"
                                lineHeight="1.2"
                                _hover={{ textDecoration: 'underline' }}
                            >
                                {item.title} <FaExternalLinkAlt style={{ display: 'inline', marginLeft: 6, fontSize: 12 }} />
                            </Link>
                        ) : (
                            <Text color={headingColor} fontSize="2xl" fontWeight="semibold" lineHeight="1.2">
                                {item.title}
                            </Text>
                        )}

                        <Text mt={3} color={textColor} lineHeight="1.7">
                            {item.description}
                        </Text>
                    </Box>
                ))}
            </VStack>
        </VStack>
    );
};
