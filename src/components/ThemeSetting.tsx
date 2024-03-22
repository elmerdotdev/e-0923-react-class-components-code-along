import { Component } from 'react'
import ThemeContext, { ThemeContextType } from '../context/ThemeContext'

type StateTypes = {
  // no states
}

type PropTypes = {
  // no props
}

class ThemeSetting extends Component<PropTypes, StateTypes> {
  static contextType = ThemeContext
  declare context: ThemeContextType

  render() {
    const { theme, toggleTheme } = this.context

    return (
      <div>
        Current Theme: {theme}
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    )
  }
}

export default ThemeSetting