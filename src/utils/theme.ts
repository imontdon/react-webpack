import * as React from 'react'

export const themes = {
  highlight: {
    background: '#fff',
    color: '#a9a9b3'
  },
  dark: {
    background: '#252627',
    color: '#a9a9b3'
  }
}

export const ThemeContext = React.createContext({
  theme: themes.dark
})

export interface theme {
  background: string,
  color: string
}