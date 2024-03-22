import { createContext } from 'react'

export type ThemeContextType = {
  theme: string,
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {}
})

export default ThemeContext