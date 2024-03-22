import { Component } from 'react'
import Welcome from './components/Welcome'
import ThemeSwitcher from './components/ThemeSwitcher'
import FunctionComponent from './components/FunctionComponent'
import ClassComponent from './components/ClassComponent'
import LoginForm from './components/LoginForm'
import ThemeProvider from './context/ThemeProvider'
import ThemeSetting from './components/ThemeSetting'

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <LoginForm greeting="Hello person!" />
        <Welcome name="John Smith" age={50} phone="+1 (123) 123-1234" />
        <ThemeSwitcher />
        <ThemeSetting />
        
        <hr />

        <FunctionComponent firstname="Joe" />
        <ClassComponent firstname="Jenny" />
      </ThemeProvider>
    )
  }
}

export default App