
import {
    Container,
    VStack,
    Heading,
    Text,
    SimpleGrid,
    Link,
} from '@chakra-ui/react';
import { useColorModeValue } from './color-mode';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection = () => {
    const headingColor = useColorModeValue('gray.900', 'white');
    const subtextColor = useColorModeValue('gray.600', 'gray.400');

    return (
        <Container maxW="6xl" py={48}>
            <VStack gap={16}>
                <VStack gap={4} textAlign="center">
                    <Heading size="2xl" color={headingColor} letterSpacing="tight">
                        Projects
                    </Heading>
                    <Text fontSize="xl" color={subtextColor} maxW="2xl">
                        Building means the world to me. Check some of my work below.
                    </Text>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} w="full">
                    <ProjectCard
                        title="Mantra Rota's Website"
                        description="A website for Mantra Rota, my band! It showcases our music, events, and more. Built using Mithril.js."
                        imageSrc={[
                            `${import.meta.env.BASE_URL}config/projects/MantraRota1.png`,
                            `${import.meta.env.BASE_URL}config/projects/MantraRota2.png`,
                            `${import.meta.env.BASE_URL}config/projects/MantraRota3.png`
                        ]}
                        techStack={['Mithril.js', 'CSS']}
                        githubUrl="https://github.com/duartecaldascardoso/mantra-rota"
                        websiteUrl="https://mantrarota.com/"
                    />
                    <ProjectCard
                        title="Football Manager SLMs"
                        description="A multi-agent collaboration framework focused on using SLMs for agentic work. Fine-tuning pipelines for Agentic focused work."
                        imageSrc={`${import.meta.env.BASE_URL}config/projects/SLMS.png`}
                        techStack={['CLI', 'Python', 'LangChain', 'LangGraph', 'PyTorch', 'Transformers', 'LoRA']}
                        githubUrl="https://github.com/duartecaldascardoso/football-manager-slms"
                    />
                    <ProjectCard
                        title="Article-Explainer"
                        description={
                            <>
                                Agentic AI team to explain articles in an easy to understand way. Mentioned twice by LangChain on{' '}
                                <Link href="https://www.linkedin.com/posts/langchain_article-explainer-an-ai-document-analysis-activity-7385706304566194176-Lykn" color="brand.500" target="_blank" rel="noopener noreferrer" textDecoration="underline">
                                    LinkedIn
                                </Link>!
                            </>
                        }
                        imageSrc={`${import.meta.env.BASE_URL}config/projects/ArticleExplainer.png`}
                        techStack={['Streamlit', 'Python', 'LangChain', 'LangGraph']}
                        githubUrl="https://github.com/duartecaldascardoso/article-explainer"
                        websiteUrl="https://www.linkedin.com/posts/langchain_article-explainer-an-ai-document-analysis-activity-7385706304566194176-Lykn"
                    />
                    <ProjectCard
                        title="Eunomia"
                        description="Your AI companion for building and tracking habits. Being built in stealth. Verging the gap in the use of ML for Agentic work."
                        imageSrc={`${import.meta.env.BASE_URL}config/projects/Eunomia.png`}
                        techStack={['React', 'Django', 'Python', 'Scikit Learn', 'LangChain', 'LangGraph', 'NumPy']}
                        githubUrl="https://github.com/duartecaldascardoso/HabitLens"
                        blurImage={true}
                    />
                </SimpleGrid>
            </VStack>
        </Container>
    );
};
