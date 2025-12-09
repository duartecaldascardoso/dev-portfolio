
import {
    Box,
    Heading,
    Text,
    VStack,
    HStack,
    Badge,
    Link,
    Icon,
    Image,
    Wrap,
    WrapItem,
} from '@chakra-ui/react'
import { FaGithub, FaArrowRight } from 'react-icons/fa'
import { useColorModeValue } from './color-mode'

interface ProjectCardProps {
    title: string
    description: string | React.ReactNode
    imageSrc: string | string[]
    techStack: string[]
    githubUrl?: string
    websiteUrl?: string
    blurImage?: boolean
}

export const ProjectCard = ({
    title,
    description,
    imageSrc,
    techStack,
    githubUrl,
    websiteUrl,
    blurImage = false,
}: ProjectCardProps) => {
    const bg = useColorModeValue('white', 'black')
    const borderColor = useColorModeValue('black', 'black')
    const headingColor = useColorModeValue('gray.900', 'white')
    const textColor = useColorModeValue('gray.600', 'gray.400')
    const badgeBg = useColorModeValue('brand.50', 'whiteAlpha.200')
    const badgeColor = useColorModeValue('brand.700', 'brand.200')

    return (
        <Box
            bg={bg}
            border="2px solid"
            borderColor={borderColor}
            borderRadius="2xl"
            overflow="hidden"
            position="relative"
            transition="all 0.1s"
            top="0px"
            left="0px"
            boxShadow={useColorModeValue(
                `6px 6px 0px 0px ${borderColor}`,
                `6px 6px 0px 0px var(--chakra-colors-white)`
            )}
            _hover={{
                top: "-2px",
                left: "-2px",
                boxShadow: useColorModeValue(
                    `8px 8px 0px 0px ${borderColor}`,
                    `8px 8px 0px 0px var(--chakra-colors-white)`
                ),
            }}
            display="flex"
            flexDirection="column"
        >
            <Box position="relative" h="200px" overflow="hidden" borderBottom="2px solid" borderColor={borderColor}>
                {Array.isArray(imageSrc) ? (
                    <HStack gap={0} h="100%" w="100%">
                        <Box flex={1} h="100%" overflow="hidden" borderRight="1px solid" borderColor={borderColor}>
                            <Image
                                src={imageSrc[0]}
                                alt={`${title} 1`}
                                objectFit="cover"
                                w="100%"
                                h="100%"
                                transition="transform 0.3s"
                                _groupHover={{ transform: 'scale(1.05)' }}
                                filter={blurImage ? "blur(12px)" : "none"}
                            />
                        </Box>
                        <VStack flex={1} h="100%" gap={0}>
                            <Box flex={1} w="100%" overflow="hidden" borderBottom="1px solid" borderColor={borderColor}>
                                <Image
                                    src={imageSrc[1]}
                                    alt={`${title} 2`}
                                    objectFit="cover"
                                    w="100%"
                                    h="100%"
                                    transition="transform 0.3s"
                                    _groupHover={{ transform: 'scale(1.05)' }}
                                    filter={blurImage ? "blur(12px)" : "none"}
                                />
                            </Box>
                            <Box flex={1} w="100%" overflow="hidden">
                                <Image
                                    src={imageSrc[2]}
                                    alt={`${title} 3`}
                                    objectFit="cover"
                                    w="100%"
                                    h="100%"
                                    transition="transform 0.3s"
                                    _groupHover={{ transform: 'scale(1.05)' }}
                                    filter={blurImage ? "blur(12px)" : "none"}
                                />
                            </Box>
                        </VStack>
                    </HStack>
                ) : (
                    <Image
                        src={imageSrc}
                        alt={title}
                        objectFit="cover"
                        w="100%"
                        h="100%"
                        transition="transform 0.3s"
                        _groupHover={{ transform: 'scale(1.05)' }}
                        filter={blurImage ? "blur(12px)" : "none"}
                    />
                )}
            </Box>

            <VStack p={6} align="start" gap={4} flex={1}>
                <VStack align="start" gap={2} w="full">
                    <HStack justify="space-between" w="full">
                        <Heading size="md" color={headingColor}>
                            {title}
                        </Heading>
                        <HStack gap={3}>
                            {githubUrl && (
                                <Link
                                    href={githubUrl}
                                    color={textColor}
                                    _hover={{ color: 'brand.500' }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon as={FaGithub} boxSize={5} />
                                </Link>
                            )}
                            {websiteUrl && (
                                <Link
                                    href={websiteUrl}
                                    color={textColor}
                                    _hover={{ color: 'brand.500' }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon as={FaArrowRight} boxSize={4} />
                                </Link>
                            )}
                        </HStack>
                    </HStack>

                    <Text color={textColor} fontSize="sm" lineHeight="tall">
                        {description}
                    </Text>
                </VStack>

                <Box mt="auto" w="full">
                    <Wrap gap={2}>
                        {techStack.map((tech) => (
                            <WrapItem key={tech}>
                                <Badge
                                    px={2}
                                    py={1}
                                    borderRadius="md"
                                    bg={badgeBg}
                                    color={badgeColor}
                                    fontSize="xs"
                                    fontWeight="medium"
                                    textTransform="none"
                                    border="1px solid"
                                    borderColor={borderColor}
                                >
                                    {tech}
                                </Badge>
                            </WrapItem>
                        ))}
                    </Wrap>
                </Box>
            </VStack>
        </Box >
    )
}
