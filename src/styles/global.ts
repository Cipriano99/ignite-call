import { globalCss } from '@ignite-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '#000',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased'
  },

  })