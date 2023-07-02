import { useState } from "react"
import { UI } from "@/shared"
import { Input, IconButton } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

import useWeatherTicketStore from "@/features/WeatherTicketList/store"

import { Api } from "@/shared"

const { Logo } = UI
const { loadWeather } = Api

import "./header.scss"
// import themeIcom from "@/app/assets/images/theme.svg"

const Header: React.FC = () => {
  const [ searchValue, setSearchValue ] = useState("")
  const { setWeatherTicket } = useWeatherTicketStore((state) => ({
    setWeatherTicket: state.setWeatherTicket
  }))


  const handleSearchCity = async () => {
    try {
      const response = await loadWeather(searchValue)
      setWeatherTicket(response)

      setSearchValue("")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <header className="header">
      <Logo />

      <div className="header__actions">
        {/* <button className="btn__theme" >
          <img src={themeIcom} alt="theme" />
        </button> */}

        <div className="header__select" >
          <Input
            placeholder="Выбрать город"
            style={{fontSize: 16}}
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />

          <IconButton size="large" onClick={handleSearchCity}>
            <SearchIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </header>
  )
}

export default Header