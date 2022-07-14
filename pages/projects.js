import useSWR from 'swr'
import Head from 'next/head'
import {
    Flex,
    Heading,
    Text,
    Link,
    Stack, 
    useColorMode
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

import ProjectCard from '../components/ProjectCard'
import Container from '../components/Container'

export default function Projects() {

    const url = 'https://abneuro.vercel.app/projects/'
    const title = 'Projects – Abdul-Samad Olagunju'
    const description = 'My Coding Projects.'

    const { colorMode } = useColorMode()
    const iconColor = {
        light: 'gray.600',
        dark: 'gray.300'
    }
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error } = useSWR('/api/github', fetcher)
    if (error) {
        return (
            <Container>
            <Stack
                as="main"
                spacing={8}
                justifyContent="center"
                alignItems="flex-start"
                m="0 auto 4rem auto"
                maxWidth="700px"
                px={2}
            >
                <Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    maxWidth="700px"
                    px={4}
                    className="animate__animated animate__fadeInLeft"
                >
                    <Text>Failed to load projects!</Text>
                </Flex>
            </Stack>
        </Container>
        )
    }
    if (!data) {
        return (
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
                    <Text>Loading...</Text>
                </Flex>
            </Stack>
        </Container>
        )
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
            <Container>
                <Head>
                <title>Projects</title>
                </Head>
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="800px"
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
                            Learn about my Projects ({data.repos.length})
                        </Heading>

                            {
                                data.repos.map((p) => (
                                    <ProjectCard
                                        title={p.name}
                                        href={p.url}
                                        color={iconColor[colorMode]}
                                    >
                                        <Text>{p.language}</Text>
                                        <Text>URL: {p.url}</Text>
                                        <Text>Size: {p.size} KB</Text>
                                    </ProjectCard>
                                ))
                            }

                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

