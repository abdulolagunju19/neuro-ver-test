import Head from 'next/head'
import Image from 'next/image'
import "animate.css"
import Particles from "react-tsparticles";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react'

import TechStack from '../components/TechStack'
import Container from '../components/Container'
import { NextSeo } from 'next-seo'
import Typewriter from 'typewriter-effect';
import { useMediaQuery } from 'react-responsive'
import styled, { keyframes } from 'styled-components'

const url = 'https://abneuro.vercel.app/'
const title = 'Home Page – Abdul-Samad Olagunju'
const description = 'The Personal Website of Abdul-Samad Olagunju.'

export default function Index() {
  
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  const iconColor = {
    light: 'gray.600',
    dark: 'gray.300'
  }
  
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  
  const pulse = keyframes`
    0% {
      transform: rotate(0deg);
    }
    15% {
      transform: rotate(14deg);
    }
    30% {
      transform: rotate(-8deg);
    }
    40% {
      transform: rotate(14deg);
    }
    50% {
      transform: rotate(-4deg);
    }
    60% {
      transform: rotate(10deg);
    }
    70% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  `
  const Bar = styled.div`
    cursor: pointer;
    font-size: 1.5em;
    animation: ${pulse} 1.2s ease-in-out;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
  `
  const particlesInit = (main) => {
    console.log(main);

  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
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
        <div style={{ position: 'relative', overflow: "hidden" }}>
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
            className="animate__animated animate__fadeInLeft"
          >
            <div style={{ position: 'relative'}}>
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{

              particles: {
                number: {
                  value: 5,
                  density: {
                    enable: true,
                    value_area: 600
                  }
                },
                color: {
                    value: "#000000",
                },
                lineLinked: {
                    enable: false,
                },
                move: {
                    bounce: false,
                    enable: true,
                    random: true,
                    speed: 1,
                    straight: false,
                },
                opacity: {
                    animation: {
                        enable: true,
                        minimumValue: 0,
                        speed: 0.5,
                        sync: false,
                    },
                    random: true,
                    value: 1,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    random: true,
                    value: 50,
                },
            },
                detectRetina: true,
              }}
            />
            </div> 
            <Heading className="animate__animated animate__flipInY animate__delay-1s" mb={2}>Hi, I'm Abdul-Samad Olagunju<Bar><span>👋</span></Bar></Heading>
            <br />
            <Flex direction='row'>
              <Text fontSize={['lg', '2xl']}>I am&nbsp;</Text>
              <Text
                as='span'
                fontSize={['lg', '2xl']}
                variant='primary'
                fontWeight='semibold'
                _hover={{ fontWeight: 'bold' }}
              >
                <Typewriter
                  options={{
                    delay: 50,
                    skipAddStyles: true,
                    loop: true,
                    deleteSpeed: 20,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(2000)
                      .typeString('learning about data science.')
                      .pauseFor(2000)
                      .deleteChars(28)
                      .typeString('interested in machine learning.')
                      .pauseFor(2000)
                      .deleteChars(31)
                      .typeString('learning Next.js and React.')
                      .pauseFor(2000)
                      .deleteChars(31)
                      .start();
                  }}
                />
              </Text>
            </Flex>
            <br />
            <Text color={colorSecondary[colorMode]}> I'm a Neuroscience student at the University of Alberta. This is my personal website, where I write about statistics, neuroscience, and display my projects. I created this website because I believe that complicated ideas should be understandable to the general public. I want to share everything that I have learned, and I hope that it helps you. </Text>
            <br />
            <Text color={colorSecondary[colorMode]}> I want to thank Benjamin Carlson for his personal website tutorial, it helped me get my feet off the ground in web development. </Text>
            <br />
            <div>
            <Image
              src="/images/westbrook.gif"
              alt="Photo"
              width={900}
              height={900}
              priority
              className="next-image"
            />
          </div>
          <Heading as="h3" size="lg" pt="8" pb="8">
            My Tech Stack
          </Heading>
          <Text color={colorSecondary[colorMode]} pb="5"> The technology I use to develop my applications.</Text>
          <TechStack
            title="Vercel"
            href="https://vercel.com/"
            src="/images/vercel_icon.jpeg"
            alt='Vercel Logo'
            color={iconColor[colorMode]}
          >
            Vercel is what I use to deploy my websites.
          </TechStack>
          <TechStack
            title="Next.js"
            href="https://nextjs.org/"
            src="/images/nextjs_icon.png"
            alt='Next.js Logo'
            color={iconColor[colorMode]}
          >
            Next.js is a react framework I use to build my websites.
          </TechStack>
          <TechStack
            title="React"
            href="https://reactjs.org/"
            src="/images/react_icon.png"
            alt='React Logo'
            color={iconColor[colorMode]}
          >
            React is a powerful javascript framework I use to build my websites.
          </TechStack>
          <TechStack
            title="VS Code"
            href="https://code.visualstudio.com/"
            src="/images/vscode.png"
            alt='VS Code Logo'
            color={iconColor[colorMode]}
          >
            My Code Editor that allows me to build my applications.
          </TechStack>
          <TechStack
            title="Chakra UI"
            href="https://chakra-ui.com/"
            src="/images/chakra_icon.png"
            alt='React Logo'
            color={iconColor[colorMode]}
          >
            A simple component library that makes my styling easy.
          </TechStack>
          </Flex>
        </Stack>
        </div>
      </Container>
    </>
  )
}
