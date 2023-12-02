export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0
}

export function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0
}

export const convertArrayToObject = (originalArray) =>
  originalArray.reduce((result, item, currentIndex) => {
    const { __typename, ...rest } = item
    let key = __typename
    if (result[key]) {
      key = `${key}-${currentIndex}`
    }
    result[key] = rest
    return result
  }, {})

export const convertToCamelCase = (inputString) => {
  return inputString.charAt(0).toLowerCase() + inputString.slice(1)
}

export const shortenObjectKeys = (obj, keyword) => {
  const regex = new RegExp(`[^]+${keyword}(.*)`)

  for (const key in obj) {
    const match = key.match(regex)

    if (match) {
      const newKey = convertToCamelCase(match[1])
      obj[newKey] = obj[key]
      delete obj[key]
    }
  }

  return obj
}

export const filterObjectKeys = (obj, keyword) => {
  let newObj = {}

  for (const key in obj) {
    const match = key.includes(keyword)

    if (match) {
      newObj[key] = obj[key]
    }
  }

  return newObj
}

export const iterableObject = (obj) =>
  // eslint-disable-next-line no-unused-vars
  Object.entries(obj).map(([_, value]) => {
    return value
  })
