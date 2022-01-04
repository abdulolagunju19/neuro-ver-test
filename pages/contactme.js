import Head from 'next/head'
import Image from 'next/image'
import "animate.css"
import { NextSeo } from 'next-seo'
import { useMediaQuery } from 'react-responsive'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  VStack,
  Box,
  Button
} from '@chakra-ui/react'

import { useRouter } from 'next/router'
import Container from '../components/Container'
import { Subscribe } from '../components/Subscribe';

const url = 'https://abneuro.vercel.app/contactme'
const title = 'Contact Me – Abdul-Samad Olagunju'
const description = 'Contact Me if you have any Further Questions.'

export default function ContactMe() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  const router = useRouter()

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
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
          <title>Want to connect further?</title>
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
            className="animate__animated animate__fadeInLeft"
          >
            <Heading mb={2}>Want to connect further?</Heading>
            <Subscribe/>
          </Flex>
        </Stack> 
          <VStack spacing="15px" p="4">
            <Button
            variant="solid"
            size="lg"
            fontSize="20px"
            onClick={() => router.push('mailto:olagunju@ualberta.ca')}
            >
              Get in touch!
            </Button>
            <br />
            {isDesktopOrLaptop &&
              <VStack>
                <Text color={colorSecondary[colorMode]} fontSize="xl" fontWeight="semibold"> You can also reach me at this email address: olagunju@ualberta.ca </Text>
                <Text color={colorSecondary[colorMode]} fontSize="2xl" fontWeight="semibold">As a send off, click the picture below to see a cool effect!</Text>
                <Text color={colorSecondary[colorMode]} fontSize="2xl" fontWeight="semibold">&darr;</Text>
                <Box borderRadius="lg" overflow="hidden" p={5} w ="100%" h ="650">
                  <iframe width="300%" height="640px" src="https://preview.p5js.org/abdulolagunju19/embed/PYvsqEjBM"></iframe>
                </Box>
              </VStack>
            }
            {isTabletOrMobile &&
              <VStack>
                <Text color={colorSecondary[colorMode]} fontSize="md" fontWeight="semibold"> You can also reach me at this email address: olagunju@ualberta.ca </Text>
                <Text color={colorSecondary[colorMode]} fontSize="md" fontWeight="semibold">As a send off, click the picture below to see a cool effect!</Text>
                <Text color={colorSecondary[colorMode]} fontSize="md" fontWeight="semibold">&darr;</Text>
                <Box borderRadius="lg" overflow="hidden" p={5} w ="70%" h ="150">
                  <iframe width="300%" height="640px" src="https://preview.p5js.org/abdulolagunju19/embed/PYvsqEjBM"></iframe>
                </Box>
              </VStack>
            }
          </VStack>
      </Container>
    </>
  )
}

