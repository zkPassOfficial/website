import { Collection } from '../../'
import { exactLength, maxLength, minMaxLength } from '../../../utils'
import { firstLayerBlocks } from '../../blocks'
const { link, textMarquee } = firstLayerBlocks

const hero = {
  name: 'hero',
  type: 'object',
  fields: [
    {
      name: 'header',
      type: 'object',
      fields: [
        {
          name: 'rowOne',
          type: 'string',
          ui: maxLength(16, true),
          required: true,
        },
        {
          name: 'rowTwo',
          type: 'string',
          ui: maxLength(16, true),
          required: true,
        },
        {
          name: 'rowThree',
          type: 'string',
          ui: maxLength(10, true),
          required: true,
        },
        {
          name: 'rowFour',
          type: 'string',
          ui: maxLength(8, true),
          required: true,
        },
      ],
    },
    {
      name: 'bodyLeft',
      type: 'string',
      component: 'textarea',
      required: true,
    },
    {
      name: 'bodyRight',
      type: 'string',
      component: 'textarea',
      required: true,
    },
    {
      name: 'banner',
      type: 'object',
      fields: [
        {
          name: 'icon',
          type: 'image',
        },
        textMarquee({ name: 'marquee' }),
        link({ name: 'cta' }),
      ],
    },
  ],
  ui: {
    defaultItem: {
      header: {
        rowOne: 'Row One',
        rowTwo: 'Row Two',
        rowThree: 'Row Three',
        rowFour: 'Row Four',
      },
      bodyLeft: 'Body Left',
      bodyRight: 'Body Right',
    },
  },
}

const stats = {
  name: 'stats',
  type: 'object',
  fields: [
    {
      name: 'header',
      type: 'object',
      fields: [
        {
          name: 'rowOne',
          type: 'string',
          ui: maxLength(19, true),
          required: true,
        },
        {
          name: 'rowTwo',
          type: 'string',
          ui: maxLength(13, true),
          required: true,
        },
        {
          name: 'rowThree',
          type: 'string',
          ui: maxLength(9, true),
          required: true,
        },
        {
          name: 'rowFour',
          type: 'string',
          ui: maxLength(8, true),
          required: true,
        },
      ],
    },
    {
      name: 'body',
      type: 'rich-text',
      isBody: true,
    },
    {
      name: 'cardsSectionTitle',
      type: 'string',
      required: true,
    },
    {
      name: 'cards',
      type: 'object',
      list: true,
      fields: [
        {
          name: 'title',
          type: 'string',
          required: true,
        },
        {
          name: 'number',
          type: 'string',
          required: true,
        },
      ],
      ui: {
        itemProps: (item) => ({
          label: item?.title || 'Card',
        }),
        defaultItem: () => {
          return {
            title: 'Title',
            number: 'Number',
          }
        },
        ...exactLength(4),
      },
    },
  ],
  ui: {
    defaultItem: {
      header: {
        rowOne: 'Row One',
        rowTwo: 'Row Two',
        rowThree: 'Row Three',
        rowFour: 'Row Four',
      },
      cardsSectionTitle: 'Stats',
    },
  },
}

const howItWorks = {
  name: 'howItWorks',
  type: 'object',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      required: true,
    },
    {
      name: 'cards',
      type: 'object',
      list: true,
      fields: [
        {
          name: 'header',
          type: 'string',
          required: true,
        },
        {
          name: 'subHeader',
          type: 'string',
          required: true,
        },
        {
          name: 'text',
          type: 'string',
          component: 'textarea',
          required: true,
        },
        {
          name: 'illustration',
          type: 'image',
        },
      ],
      ui: {
        itemProps: (item) => ({
          label: item?.header || 'Card',
        }),
        defaultItem: () => {
          return {
            header: 'Title',
            subHeader: 'Number',
            text: 'Number',
          }
        },
        ...minMaxLength({ min: 2, max: 4 }),
      },
    },
  ],
  ui: {
    defaultItem: {
      sectionTitle: 'How it Works',
    },
  },
}

const approach = {
  name: 'approach',
  type: 'object',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      required: true,
    },
    {
      name: 'cards',
      type: 'object',
      list: true,
      fields: [
        {
          name: 'title',
          type: 'string',
          required: true,
        },
        {
          name: 'illustration',
          type: 'image',
        },
        {
          name: 'description',
          type: 'rich-text',
          isBody: true,
        },
        link({ name: 'cta' }),
      ],
      ui: {
        itemProps: (item) => ({
          label: item?.title || 'Card',
        }),
        defaultItem: {
          title: 'Card',
        },
        ...exactLength(3),
      },
    },
  ],
  ui: {
    defaultItem: {
      sectionTitle: 'Approach',
    },
  },
}

const features = {
  name: 'features',
  type: 'object',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      required: true,
    },
    {
      name: 'cards',
      type: 'object',
      list: true,
      fields: [
        {
          name: 'title',
          type: 'string',
          required: true,
        },
        {
          name: 'body',
          type: 'string',
          component: 'textarea',
          required: true,
        },
      ],
      ui: {
        itemProps: (item) => ({
          label: item?.title || 'Card',
        }),
        defaultItem: () => {
          return {
            title: 'Title',
            body: 'Body',
          }
        },
        ...exactLength(5),
      },
    },
  ],
  ui: {
    defaultItem: {
      sectionTitle: 'Features',
    },
  },
}

const hardware = {
  name: 'hardware',
  type: 'object',
  fields: [
    {
      name: 'header',
      type: 'object',
      fields: [
        {
          name: 'rowOne',
          type: 'string',
          ui: maxLength(19, true),
          required: true,
        },
        {
          name: 'rowTwo',
          type: 'string',
          ui: maxLength(16, true),
          required: true,
        },
        {
          name: 'rowThree',
          type: 'string',
          ui: maxLength(14, true),
          required: true,
        },
        {
          name: 'label',
          type: 'string',
          required: true,
        },
        {
          name: 'body',
          type: 'string',
          component: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'cardsSectionTitle',
      type: 'string',
      required: true,
    },
    {
      name: 'cards',
      type: 'object',
      list: true,
      fields: [
        {
          name: 'label',
          type: 'string',
          required: true,
        },
        {
          name: 'body',
          type: 'string',
          component: 'textarea',
          required: true,
        },
      ],
      ui: {
        itemProps: (item) => ({
          label: item?.label || 'Card',
        }),
        defaultItem: {
          label: 'Label',
          body: 'Body',
        },
        ...exactLength(2),
      },
    },
    {
      name: 'table',
      type: 'object',
      list: true,
      fields: [
        {
          name: 'title',
          type: 'rich-text',
          //   required: true,
        },
        {
          name: 'block',
          type: 'rich-text',
          //   required: true,
        },
        {
          name: 'setupTime',
          type: 'rich-text',
          //   required: true,
        },
        {
          name: 'proveTime',
          type: 'rich-text',
          //   required: true,
        },
        {
          name: 'verifyTime',
          type: 'rich-text',
          //   required: true,
        },
        {
          name: 'memory',
          type: 'rich-text',
          required: true,
        },
        {
          name: 'gates',
          type: 'rich-text',
          //   required: true,
        },
      ],
      ui: {
        // itemProps: (item) => ({
        //   label: item?.title || 'Row',
        // }),
        // defaultItem: {
        //   title: 'ZK',
        //   block: 'Block',
        //   setupTime: 'Setup Time',
        //   proveTime: 'Prove Time',
        //   verifyTime: 'Verify Time',
        //   memory: 'Memory',
        //   gates: 'Gates',
        // },
        ...exactLength(4),
      },
    },
  ],
  ui: {
    defaultItem: {
      header: {
        rowOne: 'Row One',
        rowTwo: 'Row Two',
        rowThree: 'Row Three',
        label: 'Label',
        body: 'Body',
      },
      cardsSectionTitle: 'Hardware Setup',
    },
  },
}

const useCases = {
  name: 'useCases',
  type: 'object',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      required: true,
    },
    {
      name: 'cards',
      type: 'object',
      list: true,
      fields: [
        {
          name: 'title',
          type: 'string',
          required: true,
        },
        {
          name: 'header',
          type: 'string',
          required: true,
        },
        {
          name: 'illustration',
          type: 'image',
        },
        {
          name: 'body',
          type: 'string',
          component: 'textarea',
          required: true,
        },
      ],
      ui: {
        itemProps: (item) => ({
          label: item?.title || 'Card',
        }),
        defaultItem: {
          title: 'Title',
          header: 'Header',
          body: 'Body',
        },
        ...minMaxLength({ min: 2 }),
      },
    },
    {
      name: 'cta',
      type: 'object',
      fields: [
        {
          type: 'string',
          label: 'Text',
          name: 'text',
        },
        {
          type: 'string',
          label: 'Url',
          name: 'url',
        },
      ],
    },
  ],
  ui: {
    defaultItem: {
      sectionTitle: 'Use Cases',
    },
  },
}

const partnersAndInvestors = {
  name: 'partnersAndInvestors',
  type: 'object',
  fields: [
    {
      name: 'row',
      type: 'object',
      list: true,
      fields: [
        {
          name: 'sectionTitle',
          type: 'string',
          required: true,
        },
        {
          name: 'body',
          type: 'string',
          required: true,
        },
        {
          name: 'alignment',
          type: 'string',
          component: 'select',
          options: ['Right', 'Left'],
          required: true,
        },
        {
          name: 'cards',
          type: 'object',
          list: true,
          fields: [
            {
              name: 'companyName',
              type: 'string',
              required: true,
            },
            {
              name: 'companyLogo',
              type: 'image',
            },
          ],
          ui: {
            itemProps: (item) => ({
              label: item?.companyName || 'Card',
            }),
            defaultItem: {
              companyName: 'Company Name',
            },
            ...minMaxLength({ min: 3 }),
          },
        },
      ],
      ui: {
        itemProps: (item) => ({
          label: item?.sectionTitle || 'Row',
        }),
        defaultItem: {
          sectionTitle: 'Row',
          body: 'Body',
          alignment: 'Left',
        },
        ...exactLength(2),
      },
    },
  ],
}

const news = {
  name: 'news',
  type: 'object',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      required: true,
    },
    {
      name: 'articles',
      type: 'object',
      list: true,
      fields: [
        {
          name: 'date',
          type: 'datetime',
          required: true,
        },
        {
          name: 'image',
          type: 'image',
        },
        {
          name: 'articleTitle',
          type: 'string',
          required: true,
        },
        {
          name: 'articleURL',
          type: 'string',
          required: true,
        },
      ],
      ui: {
        itemProps: (item) => ({
          label: item?.articleTitle || 'Article',
        }),
        defaultItem: {
          date: new Date().toISOString(),
          articleTitle: 'Article Title',
          articleURL: 'https://studiofreight.com',
        },
        ...exactLength(3),
      },
    },
  ],
  ui: {
    defaultItem: {
      sectionTitle: 'News',
    },
  },
}

const contact = {
  name: 'contact',
  type: 'object',
  fields: [
    {
      name: 'header',
      type: 'object',
      fields: [
        {
          name: 'rowOne',
          type: 'string',
          required: true,
          ui: maxLength(10, true),
        },
        {
          name: 'rowTwo',
          type: 'string',
          required: true,
          ui: maxLength(9, true),
        },
        {
          name: 'rowThree',
          type: 'string',
          required: true,
          ui: maxLength(19, true),
        },
      ],
    },
    link({ name: 'contactCTA', label: 'CTA' }),
  ],
  ui: {
    defaultItem: {
      header: {
        rowOne: 'Row One',
        rowTwo: 'Row Two',
        rowThree: 'Row Three',
      },
      contactCTA: {
        text: 'Contact',
        url: 'mailto:help@zkpass.org',
      },
    },
  },
}

const collection = new Collection(
  'home',
  'Home',
  'tina/content/pages/home',
  'md',
)

collection.setFields = [
  hero,
  stats,
  howItWorks,
  approach,
  features,
  hardware,
  useCases,
  partnersAndInvestors,
  news,
  contact,
]
collection.setUi = () => '/home'

export const homeCollection = collection
