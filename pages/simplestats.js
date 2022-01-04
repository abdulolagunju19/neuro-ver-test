import React, { useState } from 'react'
import Head from 'next/head'
import "animate.css"
import { NextSeo } from 'next-seo'
import {
    Heading,
    Flex,
    Stack,
    Input,
    InputGroup,
    InputRightElement,
    Image,
    useColorMode,
    Box
} from '@chakra-ui/react'

import Container from '../components/Container'
import { getAllFilesFrontMatter } from '../lib/mdx'
import SimpleStatsPost from '../components/SimpleStatsPost'

import { SearchIcon } from '@chakra-ui/icons'

const url = 'https://abneuro.vercel.app/simplestats'
const title = 'Stats Tutorials – Abdul-Samad Olagunju'
const description = 'In this page, I discuss using python to perform some data analysis.'

export default function SimpleStats({ posts }) {
    const [searchValue, setSearchValue] = useState('')

    const filteredBlogPosts = posts
        .sort(
            (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
        )
        .filter((frontMatter) =>
            frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()))
    
    const { colorMode } = useColorMode()
    const colorSecondary = {
        light: 'gray.200',
        dark: 'gray.700'
    } 
    return (
        <>
            <NextSeo
              title={title}
              description={description}
              canonical={url}
              openGraph={{
                url,
                title,
                description
              }}
            />
            <Head>
                <title>Tutorials - Abdul-Samad Olagunju</title>
            </Head>
            <Container>
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                        px={4}
                        className="animate__animated animate__fadeInLeft"
                    >
                        <Heading 
                            letterSpacing="tight" 
                            mb={4} 
                            as="h1" 
                            size="2xl" 
                            transition='all 0.25s'
                            transitionTimingFunction='spring(1 100 10 10)'
                            _hover={{ transform: `translateY(-4px)`}}
                        >
                            Programming Tutorials ({posts.length} posts)
                        </Heading>
                        <InputGroup mb={4} mr={4} w="100%">
                            <Input
                                aria-label="Search by title"
                                placeholder="Search by title"
                                onChange={(e) => setSearchValue(e.target.value)}
                                variant="filled"
                            />
                            <InputRightElement>
                                <SearchIcon color="gray.300" />
                            </InputRightElement>
                        </InputGroup>
                        {!filteredBlogPosts.length && 'No posts found :('}
                        {filteredBlogPosts.map((frontMatter) =>  
                            <>
                                <Box
                                    p="4"
                                    boxShadow='xl'
                                    transition='all 0.25s'
                                    transitionTimingFunction='spring(1 100 10 10)'
                                    _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
                                    width="100%"
                                    borderRadius="2xl"
                                    border='1px solid'
                                    borderColor={colorSecondary[colorMode]}
                                >
                                    <SimpleStatsPost key={frontMatter.title} {...frontMatter} />
                                </Box>
                                <br/>
                            </>
                        )}
                        <br/>
                        <Image
                            src="/images/data_gif.gif"
                            alt="Photo"
                            width={650}
                            height={600}
                            priority
                            align="center"
                        />
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('simplestats')

    return { props: { posts } }
}
