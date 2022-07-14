import React, { useState } from 'react'
import {
    Flex,
    Link,
    Heading,
    Text,
    Stack,
    useColorMode,
    Image,
    Spacer
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const ProjectCard = ({ title, href, children }) => {
    const { colorMode } = useColorMode()
    const borderColor = {
        light: 'gray.200',
        dark: 'gray.600'
    }
    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }
    const boxShadowColor = {
        light: '0px 8px 26px rgba(0, 0, 0, 0.1)',
        dark: '0px 8px 26px rgba(0, 0, 0, 0.9)'
    }
    const [opacity, setOpacity] = useState(0)
    return (
        <Link
            href={href}
            title={title}
            isExternal
            _hover={{
                boxShadow: boxShadowColor[colorMode],
                textDecoration: 'none',
                transform: `translateY(-4px)`
            }}
            mt={4}
            onMouseOver={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            width="100%"
            borderRadius='2xl'
        >
            <Flex
                align="center"
                border="1.5px solid"
                borderColor={borderColor[colorMode]}
                borderRadius='2xl'
                p={4}
            >
                <Stack>
                    <Flex justify="space-between">
                        <Heading
                            as="h4"
                            size="md"
                            fontWeight="bold"
                            mb={2}
                        >
                            {title} 
                        </Heading>
                    </Flex>
                    <Text color={colorSecondary[colorMode]}>{children}</Text>
                </Stack>
                <Spacer/><ExternalLinkIcon opacity={opacity} fontSize="2xl" />
            </Flex>
        </Link>
    )
}

export default ProjectCard
