'use client'

import { Timeline } from '@chakra-ui/react'
import {
  Box,
  Text,
  VStack,
  Container,
} from '@chakra-ui/react'
import { useColorModeValue } from '../color-mode'

export default function TimelinePage() {
  const bg = useColorModeValue('white', 'black')
  const standardColor = useColorModeValue('black', 'white')
  const titleColor = useColorModeValue('gray.800', 'gray.100')
  const dateColor = useColorModeValue('gray.500', 'gray.400')

  const colorLife = useColorModeValue('orange.400', 'orange.400')
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
                <Timeline.Indicator bg={standardColor} />
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
                <Text fontSize="lg" fontWeight="bold" color={titleColor}>Volleyball Player</Text>
                <Text fontSize="sm" color={titleColor}>Regional Volleyball Team - Porto</Text>
                <Text fontSize="sm" color={titleColor}>Beach Volleyball National Team</Text>
                <Text fontSize="sm" color={dateColor}>2008 - 2019</Text>
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
                <Timeline.Indicator bg={colorLife} />
              </Timeline.Connector>
              <Timeline.Content flex="1" alignItems="flex-start">
                <Text fontSize="lg" fontWeight="bold" color={titleColor}>
                  Classical music studies - guitar 
                </Text>
                <Text fontSize="sm" color={titleColor}>5th grade level at Academia de Música Vilar do Paraíso</Text>
                <Text fontSize="sm" color={titleColor}>First place in national guitar contest - Guitarrismos</Text>
                <Text fontSize="sm" color={dateColor}>
                  2009 - 2016
                </Text>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Content flex="1" alignItems="flex-end">
                <Text fontSize="lg" fontWeight="bold" color={titleColor}>
                  Bachelor's in Software Engineering - ISEP
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
                  September 2020 - September 2023
                </Text>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg={colorEdu} />
              </Timeline.Connector>
                <Timeline.Content flex="1" />
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Content flex="1" />
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg={colorLife} />
              </Timeline.Connector>
              <Timeline.Content flex="1" alignItems="flex-start">
                <Text fontSize="lg" fontWeight="bold" color={titleColor}>Chess Coach</Text>
                <Text fontSize="sm" color={titleColor}>Player for Academia de Xadrez de Gaia (Ongoing)</Text>
                <Text fontSize="sm" color={titleColor}>Chess coach for beginner and intermediate students </Text>
                <Text fontSize="sm" color={dateColor}>July 2022 - February 2023</Text>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Content flex="1" alignItems="flex-end">
                <Text fontSize="lg" fontWeight="bold" color={titleColor}>
                  Internship at MSG Life Iberia
                </Text>
                <Text fontSize="sm" color={titleColor}>
                  Camunda BPMN Process Automation - Insurance POC 
                </Text>
                <Text fontSize="sm" color={titleColor}>
                  Java backend development and open-source contributions
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
                  Software Engineer at MSG
                </Text>
                <Text fontSize="sm" color={titleColor}>
                  Full Stack Engineer - Java, Backbone, PostgreSQL 
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
                <Text fontSize="sm" color={titleColor}>Built a fully automated RAG pipeline for an AI assistant</Text>
                <Text fontSize="sm" color={titleColor}>Building Agentic AI applications within the company</Text>
                <Text fontSize="sm" color={dateColor}>
                  August 2024 (Ongoing)
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
                  Master's in Software Engineering - FEUP
                </Text>
                <Text fontSize="sm" color={titleColor}>
                  CTO in the creation of an e-commerce platform 
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
