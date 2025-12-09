
import {
    Container,
    VStack,
    Heading,
    Text,
    SimpleGrid,
    Link,
    Box,
    Wrap,
    WrapItem,
    Badge,
} from '@chakra-ui/react';
import { useColorModeValue } from './color-mode';
import { ProjectCard } from './ProjectCard';

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => {
    const bg = useColorModeValue('white', 'black'); // Match ProjectCard: white / black
    const borderColor = useColorModeValue('black', 'black');
    const headingColor = useColorModeValue('gray.900', 'white');
    const badgeBg = useColorModeValue('brand.50', 'whiteAlpha.200'); // Match ProjectCard badge
    const badgeColor = useColorModeValue('brand.700', 'brand.200'); // Match ProjectCard badge

    return (
        <Box
            p={6}
            borderRadius="2xl"
            border="2px solid"
            borderColor={borderColor}
            bg={bg}
            position="relative"
            transition="all 0.1s"
            top="0px"
            left="0px"
            h="full"
            boxShadow={useColorModeValue(
                `6px 6px 0px 0px ${borderColor}`,
                `6px 6px 0px 0px var(--chakra-colors-gray-600)` // Match ProjectCard shadow
            )}
            _hover={{
                top: "-2px",
                left: "-2px",
                boxShadow: useColorModeValue(
                    `8px 8px 0px 0px ${borderColor}`,
                    `8px 8px 0px 0px var(--chakra-colors-gray-600)`
                ),
            }}
        >
            <Heading size="md" mb={4} color={headingColor}>
                {title}
            </Heading>
            <Wrap gap={2}>
                {skills.map((skill) => (
                    <WrapItem key={skill}>
                        <Badge
                            px={3}
                            py={1.5}
                            borderRadius="md"
                            bg={badgeBg}
                            color={badgeColor}
                            fontSize="sm"
                            fontWeight="medium"
                            textTransform="none"
                        >
                            {skill}
                        </Badge>
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    );
};

export const ProjectsSection = () => {
    const headingColor = useColorModeValue('gray.900', 'white');
    const subtextColor = useColorModeValue('gray.600', 'gray.400');

    return (
        <Container maxW="7xl" py={12}>
            <VStack gap={16}>
                <VStack gap={4} textAlign="center">
                    <Heading size="2xl" color={headingColor} letterSpacing="tight">
                        Projects
                    </Heading>
                    <Text fontSize="xl" color={subtextColor} maxW="2xl">
                        Building means the world to me. Check some of my work below.
                    </Text>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={8} w="full">
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
                    <ProjectCard
                        title="truck-routing-system"
                        description="A 3D web-based logistics simulation system, built with Three.js for interactive spatial visualization and powered by a C# backend that manages real-time operational data to generate warehouses, schedule truck routes, and simulate live delivery flows across the map."
                        imageSrc={[
                            `${import.meta.env.BASE_URL}config/projects/Truck1.PNG`,
                            `${import.meta.env.BASE_URL}config/projects/Truck2.PNG`,
                            `${import.meta.env.BASE_URL}config/projects/Truck3.PNG`
                        ]}
                        techStack={['Three.js', 'C#', 'ASP.NET', 'Algorithms']}
                    />
                    <ProjectCard
                        title="Cisco Campus Network"
                        description="A Cisco-based network engineering project focused on designing, configuring, and validating a complete campus network using Packet Tracer, covering routing, services, security, and DNS/VoIP integration."
                        imageSrc={`${import.meta.env.BASE_URL}config/projects/Cisco.PNG`}
                        techStack={['Cisco', 'Packet Tracer', 'Networking', 'Security']}
                    />
                </SimpleGrid>

                <VStack gap={8} w="full" align="start" mt={8}>
                    <VStack align="start" gap={2}>
                        <Heading size="xl" color={headingColor} letterSpacing="tight">
                            Technical Skills
                        </Heading>
                        <Text color={subtextColor} fontSize="lg" maxW="3xl">
                            Building these projects, working on my ideas and working in the fields has given me these skills:
                        </Text>
                    </VStack>

                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
                        <SkillCard
                            title="Languages"
                            skills={['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS']}
                        />
                        <SkillCard
                            title="AI/ML Frameworks"
                            skills={['LangChain', 'LangGraph', 'LangFuse', 'LangSmith', 'Scikit-learn', 'PyTorch', 'Pydantic']}
                        />
                        <SkillCard
                            title="Libraries/Frameworks"
                            skills={['React', 'FastAPI', 'Django', 'Spring', 'Spring Boot', 'Backbone.js', 'Streamlit', 'PostgreSQL', 'Camunda']}
                        />
                        <SkillCard
                            title="DevOps & Tools"
                            skills={['Docker', 'Jenkins', 'GitHub Actions', 'CI/CD', 'Git', 'GitHub', 'GitLab', 'Jira', 'Trello', 'Postman']}
                        />
                    </SimpleGrid>
                </VStack>
            </VStack>
        </Container>
    );
};
