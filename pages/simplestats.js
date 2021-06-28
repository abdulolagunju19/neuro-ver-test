import React, { useState } from 'react'
import Head from 'next/head'
import {
    Heading,
    Flex,
    Stack,
    Input,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react'

import Container from '../components/Container'
import { getAllFilesFrontMatter } from '../lib/mdx'

import SimpleStatsPost from '../components/SimpleStatsPost'

import { SearchIcon } from '@chakra-ui/icons'

export default function SimpleStats({ posts }) {
  return (
        <>
            <Head>
                <title>Simplistic Statistics - Abdul-Samad Olagunju</title>
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
                    >
                        <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
                            Simplistic Statistics for Scientists ({posts.length} posts)
                        </Heading>
                        <InputGroup mb={4} mr={4} w="100%">
                            <Input
                                aria-label="Search by title"
                                placeholder="Search by title"
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                            <InputRightElement>
                                <SearchIcon color="gray.300" />
                            </InputRightElement>
                        </InputGroup>
                        {!filteredBlogPosts.length && 'No posts found :('}
                        {filteredBlogPosts.map((frontMatter) => <SimpleStatsPost key={frontMatter.title} {...frontMatter} />)}
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
