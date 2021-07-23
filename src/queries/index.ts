export const getPokemonList = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=893')
  const data = await res.json()
  return data
}

export const getPokemonByName = async (name: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const data = await res.json()
  return data
}
