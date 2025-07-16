'use client'

import { Box, Flex, HStack, Link } from '@chakra-ui/react'
import { FaHome } from 'react-icons/fa'
import { ColorModeButton, useColorModeValue } from '../color-mode'

const navItems = [
  { label: 'Home', href: '/dev-portfolio/', icon: FaHome },
  { label: 'Timeline', href: '/dev-portfolio/timeline' },
]

export default function Navbar() {
  const bg = useColorModeValue('white', 'black')
  const borderColor = useColorModeValue('orange.300', 'orange.500')
  const textColor = useColorModeValue('orange.400', 'orange.300')

  return (
    <Box
      as="nav"
      bg={bg}
      borderBottom="1px solid"
      borderBottomColor={borderColor}
      px={6}
      py={4}
      position="sticky"
      top={0}
      zIndex={999}
      width="100%"
    >
      <Flex align="center" width="100%">
        <HStack gap={6}>
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              fontWeight="bold"
              color={textColor}
            >
              {label}
            </Link>
          ))}
        </HStack>

        <Flex ml="auto">
          <ColorModeButton />
        </Flex>
      </Flex>
    </Box>
  )
}
