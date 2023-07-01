import "./input.scss"

interface IInputProps {
  type?: string
  placeholder?: string
  value?: string
  onChange()
}

const Input: React.FC<IInputProps> = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      className="input"
      onInput={props.onChange}
    />
  )
}

export default Input