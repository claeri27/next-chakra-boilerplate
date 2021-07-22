import React from 'react'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>**App Title**</title>
        <meta name="description" content="**app description here**" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>stuff goes here</Box>
    </>
  )
}
