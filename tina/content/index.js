import { createLabels } from '../utils'
import { metadata } from './metadata'
import { navigation } from './navigation'

export class Collection {
  constructor(name, label, path, format) {
    this.name = name
    this.label = label
    this.path = path
    this.format = format
    this.fields = []
    this.ui = null
    this.match = null
  }

  set setFields(input) {
    createLabels(navigation)
    createLabels(metadata)
    createLabels(input)
    this.fields = [
      {
        name: 'title',
        label: 'Title',
        type: 'string',
        required: true,
        isTitle: true,
        ui: {
          description:
            'this field is for indexing purposes and text will be slugified',
          parse: (val) =>
            val &&
            val
              .toLowerCase()
              .replace(/ /g, '-')
              .replace(/[^\w-]+/g, ''),
        },
      },
      {
        name: 'global',
        label: 'Global',
        type: 'object',
        list: true,
        templates: [navigation, metadata],
        searchable: false,
      },
      {
        name: 'sections',
        label: 'Sections',
        type: 'object',
        list: true,
        templates: [...input],
        searchable: false,
      },
    ]
  }

  set setUi(route) {
    this.ui = { router: route }
  }

  set setMatch(exceptions) {
    this.match = exceptions
  }
}
