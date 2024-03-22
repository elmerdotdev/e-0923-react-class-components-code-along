import { Component } from 'react'

type PropTypes = {
  name: string
  age: number
  phone: string
}

class Welcome extends Component<PropTypes> {
  render() {
    const { name, age, phone } = this.props

    return (
      <div style={{ backgroundColor: 'black', padding: '10px' }}>
        <h2>Full name: {name}</h2>
        <h2>Age: {age}</h2>
        <h2>Phone: {phone}</h2>
      </div>
    )
  }
}

export default Welcome