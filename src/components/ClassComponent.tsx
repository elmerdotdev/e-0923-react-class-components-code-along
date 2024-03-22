// Class component
import { Component } from 'react'

type Props = {
  firstname: string
}

class ClassComponent extends Component<Props> {
  render() {
    const { firstname } = this.props

    return (
      <div>
        My name is {firstname}. This is a class component.
      </div>
    )
  }
}

export default ClassComponent