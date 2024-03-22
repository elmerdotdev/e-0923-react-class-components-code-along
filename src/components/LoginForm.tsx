import { Component, FormEvent, ChangeEvent } from 'react'

type StateTypes = {
  username: string
  password: string
}

type PropTypes = {
  greeting: string
}

class LoginForm extends Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidMount() { // this is the equivalent of a useEffect
    console.log('Login Form rendered!')
  }

  handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(`Form submitted with these data - Username: ${this.state.username} | Password: ${this.state.password}`)
  }

  render() {
    const { greeting } = this.props
    const { username, password } = this.state

    return (
      <div>
        <p>{greeting}</p>
        <h2>User Login:</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Username:
            <input type="text" value={username} onChange={this.handleUsernameChange} />
          </label>
          <label htmlFor="">
            Password:
            <input type="password" value={password} onChange={this.handlePasswordChange} />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default LoginForm