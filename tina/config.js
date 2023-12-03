import { defineConfig } from 'tinacms'
import { homeCollection } from './content/pages/home'

const branch = process.env.VERCEL_GIT_COMMIT_REF || 'main'

const clientId = '9fd64f97-4de5-408e-9e8a-374b852a9b0e'
const token = 'df98d0a7e72953f929078db391dc3703b06d4e53'
const searchToken = '25830bc973dd308f4ec59c93aef1e79ad54efd61'

export default defineConfig({
  branch,
  clientId: clientId,
  token: token,
  search: {
    tina: {
      indexerToken: searchToken,
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 300,
    maxSearchIndexFieldLength: 300,
  },
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'cms',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [homeCollection],
  },
})
