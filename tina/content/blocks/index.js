// const { colors } = require('config/variables.js') not working

const colors = ['#D7ABC5', '#00CDC0', '#80FAA3']

const link = ({ label = 'Link', name = 'link' } = {}) => ({
  label,
  name,
  type: 'object',
  ui: {
    itemProps: (item) => ({
      label: `${item?.text}`,
    }),
    defaultItem: {
      text: 'Link Text',
      url: 'https://scrib3-website.vercel.app',
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Text',
      name: 'text',
      required: true,
    },
    {
      type: 'string',
      label: 'Url',
      name: 'url',
      required: true,
    },
  ],
})

const internalLink = ({ label = 'Link', name = 'link', collections }) => ({
  label,
  name,
  type: 'reference',
  collections,
})

const stringList = ({ label = 'String List', name = 'stringList' }) => ({
  label,
  name,
  type: 'string',
  list: true,
  fields: [
    {
      type: 'string',
      label: 'Text',
      name: 'text',
      required: true,
    },
  ],
})

const colorPallete = ({ label = 'Color', name = 'color' }) => ({
  type: 'string',
  label,
  name,
  ui: {
    component: 'color',
    colorFormat: 'hex',
    colors,
    widget: 'block',
  },
})

const media = ({ label = 'Media', name = 'media', required = true } = {}) => ({
  label,
  name,
  type: 'object',
  fields: [
    {
      type: 'string',
      label: 'Caption',
      name: 'caption',
    },
    {
      type: 'image',
      label: 'Source',
      name: 'source',
      required,
    },
  ],
})

const mediaMobileFallback = ({
  label = 'Media',
  name = 'media',
  required = true,
}) => ({
  label,
  name,
  type: 'object',
  // ui: {
  //   validate: (value) => {
  //     if (!value && required) return 'Required'
  //   },
  // },
  fields: [
    {
      type: 'string',
      label: 'Caption',
      name: 'caption',
      required,
    },
    {
      type: 'image',
      label: 'Source',
      name: 'source',
      required,
    },
    {
      type: 'string',
      label: 'Mobile Fallback Caption',
      name: 'mobileCaption',
      required: false,
    },
    {
      type: 'image',
      label: 'Mobile Fallback Source',
      name: 'mobileSource',
      required: false,
    },
  ],
})

const multipleMediaWithFallback = ({
  label = 'Multi-Assets',
  name = 'multipleAssets',
  required = true,
  min = 1,
  limit = 100,
}) => ({
  label,
  name,
  type: 'object',
  list: true,
  ui: {
    validate: (value) => {
      if (typeof value === 'undefined') return 'Cannot be empty'

      if (value && value.length > limit) {
        return `Cannot be more than ${limit} items`
      }

      if (value && value.length < min) {
        return `Cannot be less than ${min} items`
      }
    },
    itemProps: (item) => {
      return {
        label: `${item?.media?.caption}`,
      }
    },
  },
  fields: [mediaMobileFallback({ label: 'Media', name: 'media', required })],
})

const linkWithMedia = ({ label = 'Link', name = 'link' }) => ({
  label,
  name,
  type: 'object',
  fields: [
    {
      type: 'string',
      label: 'Text',
      name: 'text',
      required: true,
    },
    {
      type: 'string',
      label: 'Url',
      name: 'url',
      required: true,
    },
    media({ label: 'Media', name: 'media' }),
  ],
})

const internalLinkWithMedia = ({
  label = 'Link',
  name = 'link',
  collections,
}) => ({
  label,
  name,
  type: 'object',
  fields: [
    internalLink({ collections }),
    media({ label: 'Media', name: 'media' }),
  ],
})

const textMarquee = ({ label = 'Text Marquee', name = 'textMarquee' }) => ({
  name,
  label,
  type: 'object',
  fields: [
    {
      name: 'textEntry',
      label: 'Text',
      type: 'string',
      list: true,
    },
    {
      name: 'reversed',
      label: 'Reversed',
      type: 'boolean',
      component: 'toggle',
    },
  ],
})

export const firstLayerBlocks = {
  link,
  stringList,
  colorPallete,
  media,
  multipleMediaWithFallback,
  mediaMobileFallback,
  linkWithMedia,
  internalLink,
  internalLinkWithMedia,
  textMarquee,
}
