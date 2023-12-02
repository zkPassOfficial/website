import { maxLength, minLength } from '../../utils'
import { firstLayerBlocks } from '../blocks'
const { link } = firstLayerBlocks

const header = {
  name: 'header',
  label: 'Header',
  type: 'object',
  fields: [
    {
      type: 'object',
      name: 'linkGroup',
      list: true,
      fields: [
        {
          name: 'groupLabel',
          type: 'string',
          required: true,
        },
        {
          name: 'links',
          type: 'object',
          list: true,
          fields: [
            { name: 'text', type: 'string', required: true },
            { name: 'url', type: 'string' },
          ],
          ui: {
            itemProps: (item) => {
              if (!item) return
              return {
                label: `${item?.text}`,
              }
            },
            ...minLength(1),
            defaultItem: {
              link: {
                text: 'Text',
                url: 'URL',
              },
            },
          },
        },
      ],
      ui: {
        itemProps: (item) => {
          if (!item) return
          return {
            label: `${item?.groupLabel}`,
          }
        },
        ...maxLength(2),
        defaultItem: {
          groupLabel: 'Group Label',
        },
      },
    },
    link({ name: 'cta', label: 'CTA' }),
  ],
}

const footer = {
  name: 'footer',
  label: 'Footer',
  type: 'object',
  fields: [
    {
      name: 'logo',
      type: 'image',
    },
    {
      name: 'topLeftLinks',
      type: 'object',
      fields: [
        {
          name: 'label',
          type: 'string',
          required: true,
        },
        {
          name: 'links',
          type: 'object',
          list: true,
          fields: [link()],
          ui: {
            itemProps: (item) => {
              if (!item) return
              return {
                label: `${item?.link?.text}`,
              }
            },
            ...maxLength(3),
            defaultItem: {
              link: {
                text: 'Text',
                url: 'URL',
              },
            },
          },
        },
      ],
    },
    {
      name: 'topRightLinks',
      type: 'object',
      fields: [
        {
          name: 'label',
          type: 'string',
          required: true,
        },
        {
          name: 'links',
          type: 'object',
          list: true,
          fields: [link()],
          ui: {
            itemProps: (item) => {
              if (!item) return
              return {
                label: `${item?.link?.text}`,
              }
            },
            ...maxLength(7),
            defaultItem: {
              link: {
                text: 'Text',
                url: 'URL',
              },
            },
          },
        },
      ],
    },
    {
      name: 'bottomLinks',
      type: 'object',
      fields: [
        {
          name: 'label',
          type: 'string',
          required: true,
        },
        {
          name: 'links',
          type: 'object',
          list: true,
          fields: [link()],
          ui: {
            itemProps: (item) => {
              if (!item) return
              return {
                label: `${item?.link?.text}`,
              }
            },
            ...maxLength(8),
            defaultItem: {
              link: {
                text: 'Text',
                url: 'URL',
              },
            },
          },
        },
      ],
    },
  ],
}

export const navigation = {
  name: 'navigation',
  label: 'Navigation',
  type: 'object',
  fields: [header, footer],
  ui: {
    defaultItem: {
      header: {
        cta: {
          text: 'Launch App',
          url: 'https://pre.zkpass.org/dashboard',
        },
      },
      footer: {
        topLeftLinks: {
          label: 'About',
        },
        topRightLinks: {
          label: 'Support',
        },
        topLeftLinks: {
          label: 'Connect',
        },
      },
    },
  },
}
