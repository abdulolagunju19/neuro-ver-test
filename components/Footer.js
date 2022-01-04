import React from 'react'
import NextLink from 'next/link'
import { Flex, Link, IconButton, useColorMode, Stack, Spacer } from '@chakra-ui/react'
import { Divider, Box, Button } from "@chakra-ui/react"
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi"


export const Footer = () => {

    const { colorMode } = useColorMode()
    const borderIcon = {
        light: 'gray.400',
        dark: 'gray.500'
    }
    const footerHoverBg = {
        light: 'gray.100',
        dark: 'gray.700',
    }
    return (
        <Flex align="center" mb={4} direction="column" visibility={'hidden', 'visible', 'visible'} display={['none', 'flex', 'flex']}>
            <Divider mb={5} mt={3} w='50%' alignSelf="center" />
            <div>
                <Stack spacing={4} direction="row" align="center">
                    <NextLink href="/simplestats" passHref>
                        <Button 
                            variant="ghost"
                            transition='all 0.25s'
                            transitionTimingFunction='spring(1 100 10 10)'
                            _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
                        >
                            <Link
                                fontSize="md"
                                color="gray.500"
                                minWidth="100px"
                                mr={2}
                                title="Tutorials"
                            >
                                 Tutorials
                            </Link>
                        </Button>
                    </NextLink>
                    <NextLink href="/blog" passHref>
                        <Button 
                            variant="ghost"
                            transition='all 0.25s'
                            transitionTimingFunction='spring(1 100 10 10)'
                            _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
                        >
                            <Link
                                fontSize="md"
                                color="gray.500"
                                minWidth="100px"
                                mr={2}
                                title="Blog"
                            >
                               My Blog Posts
                            </Link>
                        </Button>
                    </NextLink>
                    <NextLink href="/contactme" passHref>
                        <Button 
                            variant="ghost"
                            transition='all 0.25s'
                            transitionTimingFunction='spring(1 100 10 10)'
                            _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
                        >
                            <Link
                                fontSize="md"
                                color="gray.500"
                                minWidth="100px"
                                mr={2}
                                title="Contact Me"
                            >
                                Contact Me
                            </Link>
                        </Button>
                    </NextLink>
                    <Spacer />
                    <Link href="https://twitter.com/SamadOlagunju" title="Twitter" isExternal>
                    <IconButton
                        aria-label="Twitter"
                        icon={<FiTwitter />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                        transition='all 0.25s'
                        transitionTimingFunction='spring(1 100 10 10)'
                        _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
                    />
                    </Link>
                    <Link href="https://github.com/abdulolagunju19" title="GitHub" isExternal>
                    <IconButton
                        aria-label="GitHub"
                        icon={<FiGithub />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                        transition='all 0.25s'
                        transitionTimingFunction='spring(1 100 10 10)'
                        _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
                    />
                    </Link>
                    <Link href="https://www.linkedin.com/in/abdul-samad-olagunju-727877167/" title="Linkedin" isExternal>
                    <IconButton
                        aria-label="Linkedin"
                        icon={<FiLinkedin />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                        transition='all 0.25s'
                        transitionTimingFunction='spring(1 100 10 10)'
                       _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
                    />
                    </Link>
                </Stack>
            </div>
        </Flex>
    )
}
