import { firstLayerBlocks } from '../blocks'
const { stringList } = firstLayerBlocks

export const metadata = {
  name: 'metadata',
  label: 'Metadata',
  type: 'object',
  list: true,
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
      required: true,
    },
    {
      type: 'string',
      label: 'Description',
      name: 'description',
      ui: {
        component: 'textarea',
      },
    },
    stringList({ label: 'Keywords', name: 'keywords' }),
    {
      type: 'image',
      label: 'Image',
      name: 'image',
      required: true,
    },
  ],
  ui: {
    defaultItem: {
      title: 'ZK Pass',
      description: 'ZK Pass description',
      keywords: ['web3'],
      //   image: '/cms/SCRIB3.png',
    },
  },
}
