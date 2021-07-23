export const capitalize = (str: string | undefined) => {
  if (str) return str.charAt(0).toUpperCase() + str.slice(1)
}
