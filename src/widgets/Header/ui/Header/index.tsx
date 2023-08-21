import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { UI } from "@/shared"
import { Input, IconButton } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

import { useWeatherTicketStore } from "@/features/WeatherTicketList"

const { Logo } = UI

import "./header.scss"
import { AxiosError } from "axios"
// import themeIcom from "@/app/assets/images/theme.svg"

const Header: React.FC = () => {
  const [ searchValue, setSearchValue ] = useState<string>("")
  const [headerError, setHeaderError] = useState<{status: boolean, message: string} | null>(null) 

  const {
    loadWeatherTicket,
    hasCity,
    initTickets,
  } = useWeatherTicketStore((state) => ({
    loadWeatherTicket: state.loadWeatherTicket,
    hasCity: state.hasCity,
    initTickets: state.initTickets,
  }))

  const handleInputChange = (value: string): void => {
    if (headerError?.status) {
      setHeaderError(null)
    }

    setSearchValue(value)
  }

  const handleNotFoundError = (error: AxiosError): void => {
    if (error?.response?.status === 404) {
      setHeaderError({
        status: true,
        message: "Вы ввели не правильный город"
      })
   }
  }

  const handleSearchCity = async (): Promise<void> => {
    if (!searchValue) return 

    if (!hasCity(searchValue)) {
      loadWeatherTicket(searchValue)
        .then(() => setSearchValue(""))
        .catch((error) => handleNotFoundError(error))
    } else {
      setHeaderError({
        status: true,
        message: "Такой город уже добавлен"
      })
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.code === "Enter") {
      handleSearchCity()
    }
  }

  useEffect(() => {    
    initTickets()
  }, [])

  return (
    <header className="header">
      <NavLink to="/">
        <Logo />
      </NavLink>

      <div className="header__actions">
        <div className="header__select" >
          <div className="df ai-c">
            <Input
              placeholder="Выбрать город"
              style={{fontSize: 16}}
              value={searchValue}
              error={headerError?.status}
              onChange={(event) => handleInputChange(event.target.value)}
              onKeyDown={handleKeyDown}
            />

            <IconButton size="large" onClick={handleSearchCity} disabled={!searchValue}>
              <SearchIcon fontSize="large" />
            </IconButton>
          </div>

          <span className="error__label">{ headerError?.message }</span>
        </div>
      </div>
    </header>
  )
}

export default Header