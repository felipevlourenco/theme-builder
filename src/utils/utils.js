export const mapValues = (obj, property) => {
  return Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      [key]: obj[key][property]
    }),
    {}
  )
}

export const keys = obj => Object.keys(obj)

export const values = obj => Object.values(obj)

export const camelCase = str =>
  str
    .replace(/\s(.)/g, $1 => $1.toUpperCase())
    .replace(/\s/g, '')
    .replace(/^(.)/, $1 => $1.toLowerCase())
