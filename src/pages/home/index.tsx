import Head from 'next/head'
import { useState } from 'react'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { Flex, Image, Select, Skeleton, Spinner, Text } from '@chakra-ui/react'
import { capitalize } from '@/utils'
import { useGetPokemonByNameQuery, useGetPokemonListQuery } from '@/hooks'
import { getPokemonList } from '@/queries'

export default function Home() {
  const [pokemonName, setPokemonName] = useState('pikachu')
  const { sortedPokemonList } = useGetPokemonListQuery()
  const { data: pokemon, isFetching } = useGetPokemonByNameQuery(pokemonName)

  return (
    <>
      <Head>
        <title>Pokemon!</title>
        <meta name="description" content="**app description here**" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex mx="auto" d="column">
        <Flex h="10rem" justify="center" align="center">
          <Skeleton as={Flex} minW="8rem" justify="center" isLoaded={!isFetching}>
            <Text>{capitalize(pokemon?.name)}</Text>
          </Skeleton>
          <Image
            alt="pokemon picture"
            minW="10rem"
            src={pokemon?.sprites.front_default}
            fallback={
              <Flex minW="10rem" justify="center">
                <Spinner />
              </Flex>
            }
          />
        </Flex>
        <Flex justify="center">
          <Select
            w="20rem"
            onChange={e => e.target.value && setPokemonName(e.target.value)}
            placeholder="Select pokemon">
            {sortedPokemonList?.map(({ name }, idx) => (
              <option key={idx} value={name}>
                {capitalize(name)}
              </option>
            ))}
          </Select>
        </Flex>
      </Flex>
    </>
  )
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('pokemonList', getPokemonList)
  return { props: { dehydratedState: dehydrate(queryClient) } }
}
