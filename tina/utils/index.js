import _startCase from 'lodash/startCase'

export const maxLength = (max, isString = false) => {
  return {
    validate: (value) => {
      if (value && value.length > max) {
        return `Cannot be more than ${max} ${isString ? 'characters' : 'items'}`
      }
    },
  }
}

export const minLength = (min, isString = false) => {
  return {
    validate: (value) => {
      if (value && value.length < min) {
        return `Must be more than ${min} ${isString ? 'characters' : 'items'}`
      }
    },
  }
}

export const minMaxLength = ({ min = 0, max, isString = false }) => {
  return {
    validate: (value) => {
      if (value && value.length < min) {
        return `Must be ${max ? 'between' : 'more than'} ${min} ${
          max ? `and ${max}` : ''
        } ${isString ? 'characters' : 'items'}`
      }
      if (value && value.length > max) {
        return `Must be between ${min} and ${max} ${
          isString ? 'characters' : 'items'
        }`
      }
    },
  }
}

export const exactLength = (length, isString = false) => {
  return {
    validate: (value) => {
      if (value && value.length !== length) {
        return `Must be exactly than ${length} ${
          isString ? 'characters' : 'items'
        }`
      }
    },
  }
}

export const createLabels = (template) => {
  const iterate = (obj) => {
    Object.keys(obj).forEach((key) => {
      if (key === 'name' && !obj['label']) {
        obj['label'] = _startCase(obj[key])
      }

      if (typeof obj[key] === 'object' && obj[key] !== null) {
        createLabels(obj[key])
      }
    })
  }
  iterate(template)
}
