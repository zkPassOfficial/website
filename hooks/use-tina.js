import { convertArrayToObject, shortenObjectKeys } from 'libs/utils'
import { useTina } from 'tinacms/dist/react'

export const useTinaObjects = (input, pageId) => {
  let global = { navigation: {} }
  let sections = {}
  const { data } = useTina({
    ...input,
  })

  if (data[pageId].global) {
    global = convertArrayToObject(data[pageId].global)
    global = shortenObjectKeys(global, 'Global')
  }

  if (data[pageId].sections) {
    sections = convertArrayToObject(data[pageId].sections)
    sections = shortenObjectKeys(sections, 'Sections')
  }

  return { global, sections, data }
}
