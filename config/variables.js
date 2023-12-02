const colors = {
  black: '#000000',
  white: '#ffffff',
  green: '#C5FF4A',
  grey: '#3D3D3D',
}

const themes = {
  light: {
    layout: colors.green,
    primary: colors.black,
    secondary: colors.black,
    contrast: colors.white,
    dot: colors.grey,
    'invert-layout': colors.black,
  },
  dark: {
    layout: colors.black,
    primary: colors.black,
    secondary: colors.white,
    contrast: colors.green,
    dot: colors.grey,
    'invert-layout': colors.green,
  },
}

const breakpoints = {
  mobile: '800px',
}

const viewports = {
  mobile: {
    width: '375px',
    height: '650px',
  },
  desktop: {
    width: '1440px',
    height: '816px',
  },
}

module.exports = {
  colors,
  themes,
  breakpoints,
  viewports,
}
