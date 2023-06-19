import "./logo.scss"
import logoIcon from "@/app/assets/images/logo.svg"

const Logo: React.FC = () => {
  return (
    <div  className="logo">
      <div className="logo__img">
        <img src={logoIcon} alt="logo" />
      </div>
      <span>погода</span>
    </div>
  )
}

export default Logo