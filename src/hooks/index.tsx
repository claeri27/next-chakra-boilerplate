import { useMemo } from 'react'
import { useQuery } from 'react-query'
import { getPokemonByName, getPokemonList } from '@/queries'
import type { Pokemon, PokemonList } from '@/types'

export const useGetPokemonListQuery = () => {
  const res = useQuery<PokemonList, Error>('pokemonList', getPokemonList)
  const sortedPokemonList = useMemo(() => {
    return res.data?.results.sort((a, b) => a.name.localeCompare(b.name))
  }, [res.data])
  return { sortedPokemonList, ...res }
}

export const useGetPokemonByNameQuery = (name: string) => {
  return useQuery<Pokemon, Error>(['pokemon', name], () => getPokemonByName(name))
}
