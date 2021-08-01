import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import "animate.css"
import { motion } from "framer-motion";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react'

import Container from '../components/Container'

export default function Index() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <Container>
      <Head>
        <title>Home - Abdul-Samad Olagunju</title>
      </Head>
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
        >
          <Heading className="animate__animated animate__bounceInLeft" mb={2}>Hi, I'm Abdul-Samad Olagunju</Heading>
          <br />
          <Text className="animate__animated animate__bounceInLeft" color={colorSecondary[colorMode]}> I'm a Neuroscience student at the University of Alberta. This is my personal website, where I write about statistics, neuroscience, and display my projects. I created this website because I believe that complicated ideas should be understandable to the general public. I want to share everything that I have learned, and I hope that it helps you. </Text>
          <br />
          <Text className="animate__animated animate__bounceInLeft" color={colorSecondary[colorMode]}> I want to thank Benjamin Carlson for his personal website tutorial, it helped me get my feet off the ground in web development. </Text>
          <br />
          <div className="animate__animated animate__fadeInUp animate__delay-1s">
            <Image
              src="/images/westbrook.gif"
              alt="Photo"
              width={900}
              height={900}
              priority
              className="next-image"
            />
          </div>
        </Flex>
      </Stack>
    </Container>
  )
}
