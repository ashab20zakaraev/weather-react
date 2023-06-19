import { UI } from "@/shared"

import "./header.scss"
import themeIcom from "@/app/assets/images/theme.svg"

const { Input, Logo } = UI

const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo />

      <div className="header__actions">
        <button className="btn__theme" >
          <img src={themeIcom} alt="theme" />
        </button>

        <form className="header__select" >
          <Input placeholder="Выбрать город" />
        </form>
      </div>
    </header>
  )
}

export default Header