// Function component
type Props = {
  firstname: string
}

const FunctionComponent = ({ firstname }: Props) => {
  return (
    <div>
      My name is {firstname}. This is a function component.
    </div>
  )
}

export default FunctionComponent