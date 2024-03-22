import { Component } from 'react'

type StateTypes = {
  isDarkMode: boolean
}

type PropTypes = {
  // no props
}

class ThemeSwitcher extends Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props)
    this.state = {
      isDarkMode: false
    }
  }

  toggleDarkMode = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode
    }))
  }

  render() {
    const { isDarkMode } = this.state

    const containerStyle = {
      backgroundColor: isDarkMode ? 'black' : 'white',
      color: isDarkMode ? 'white' : 'black'
    }

    return (
      <div style={containerStyle}>
        <h2>Theme</h2>
        <button onClick={this.toggleDarkMode}>Toggle Dark Mode</button>
      </div>
    )
  }
}

export default ThemeSwitcher