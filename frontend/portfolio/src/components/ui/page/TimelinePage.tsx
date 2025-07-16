'use client'

import { Timeline } from '@chakra-ui/react'
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  Badge,
} from '@chakra-ui/react'
import { useColorModeValue } from '../color-mode'

export default function TimelinePage() {
  const bg = useColorModeValue('white', 'black')
  const titleColor = useColorModeValue('gray.800', 'gray.100')
  const dateColor = useColorModeValue('gray.500', 'gray.400')

  const colorLife = useColorModeValue('orange.400', 'orange.300')
  const colorEdu = useColorModeValue('blue.400', 'blue.400')
  const colorWork = useColorModeValue('purple.400', 'purple.300')

  return (
    <Box bg={bg} minH="100vh" py={20}>
      <Container maxW="4xl">
        <VStack gap={12} align="center" textAlign="center">

          <Timeline.Root size="lg" variant="outline">
            <Timeline.Item>
              <Timeline.Content flex="1" />
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg={colorLife} />
              </Timeline.Connector>
              <Timeline.Content flex="1" alignItems="flex-start">
                <Text fontSize="lg" fontWeight="bold" color={titleColor}>
                  Born
                </Text>
                <Text fontSize="sm" color={dateColor}>
                  May 10, 2002
                </Text>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Content flex="1" alignItems="flex-end">
                <Text fontSize="lg" fontWeight="bold" color={titleColor}>
                  Paleontologist (at least in my mind)
                </Text>
                <Text fontSize="sm" color={dateColor}>
                  2007 - 2010
                </Text>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg={colorLife} />
              </Timeline.Connector>
              <Timeline.Content flex="1" />
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Content flex="1" alignItems="flex-end">
                <Text fontSize="lg" fontWeight="bold" color={titleColor}>
                  Volleyball Player 
                </Text>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg={colorLife} />
              </Timeline.Connector>
              <Timeline.Content flex="1" />
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Content flex="1" />
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg={colorEdu} />
              </Timeline.Connector>
              <Timeline.Content flex="1" alignItems="flex-start">
                <Text fontSize="lg" fontWeight="bold" color={titleColor}>
                  Bsc in Software Engineering - ISEP
                </Text>
                <Text fontSize="sm" color={titleColor}>
                  Player in the Volleyball team
                </Text>
                <Text fontSize="sm" color={titleColor}>
                  Communication - Informatics Student Group
                </Text>
                <Text fontSize="sm" color={titleColor}>
                    Vice-President - Informatics Student Group
                </Text>
                <Text fontSize="sm" color={dateColor}>
                  2020 - 2023
                </Text>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Content flex="1" alignItems="flex-end">
                <Text fontSize="lg" fontWeight="bold" color={titleColor}>
                  Internship at MSG
                </Text>
                <Text fontSize="sm" color={titleColor}>
                  Camunda BPMN Process Automation
                </Text>
                <Text fontSize="sm" color={titleColor}>
                  Java backend development
                </Text>
                <Text fontSize="sm" color={dateColor}>
                  February 2023 - June 2023
                </Text>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg={colorWork} />
              </Timeline.Connector>
              <Timeline.Content flex="1" />
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Content flex="1" />
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg={colorWork} />
              </Timeline.Connector>
              <Timeline.Content flex="1" alignItems="flex-start">
                <Text fontSize="lg" fontWeight="bold" color={titleColor}>
                  Software Engineer at MSG Life Iberia
                </Text>
                <Text fontSize="sm" color={titleColor}>
                  Full Stack Engineer
                </Text>
                <Text fontSize="sm" color={titleColor}>
                  Enterprise-grade software for North American clients
                </Text>
                <Text fontSize="sm" color={dateColor}>
                  June 2023 - August 2024
                </Text>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Content flex="1" alignItems="flex-end">
                <Text fontSize="lg" fontWeight="bold" color={titleColor}>
                  AI Application Engineer 
                </Text>
                <Text fontSize="sm" color={dateColor}>
                  Sept 2024 (Ongoing)
                </Text>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg={colorWork} />
              </Timeline.Connector>
              <Timeline.Content flex="1" />
            </Timeline.Item>

                        <Timeline.Item>
              <Timeline.Content flex="1" alignItems="flex-end">
                <Text fontSize="lg" fontWeight="bold" color={titleColor}>
                  Msc in Software Engineering - FEUP
                </Text>
                <Text fontSize="sm" color={dateColor}>
                  Sept 2024 (Ongoing)
                </Text>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg={colorEdu} />
              </Timeline.Connector>
              <Timeline.Content flex="1" />
            </Timeline.Item>
          </Timeline.Root>
        </VStack>
      </Container>
    </Box>
  )
}
