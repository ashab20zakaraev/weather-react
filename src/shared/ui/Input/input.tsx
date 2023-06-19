import "./input.scss"

interface IInputProps {
  value?: string | number
  type?: string
  placeholder?: string
}

const Input: React.FC = (props: IInputProps) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      className="input"
    />
  )
}

export default Input