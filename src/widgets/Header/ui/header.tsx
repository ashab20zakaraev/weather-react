/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import { UI } from "@/shared"
import { Input, IconButton } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

import { useWeatherTicketStore } from "@/entities/WeatherTicket"

const { Logo } = UI

import "./header.scss"
// import themeIcom from "@/app/assets/images/theme.svg"

const Header: React.FC = () => {
  const [ searchValue, setSearchValue ] = useState("")
  const { loadWeatherTicket, hasCity, initTickets } = useWeatherTicketStore((state) => ({
    loadWeatherTicket: state.loadWeatherTicket,
    hasCity: state.hasCity,
    initTickets: state.initTickets,
  }))

  const handleSearchCity = async () => {
    if (!searchValue) return 

    if (!hasCity(searchValue)) {
      await loadWeatherTicket(searchValue)
      setSearchValue("")
    } else {
      setSearchValue("")
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.code === "Enter") {
      handleSearchCity()
    }
  }

  useEffect(() => {
    initTickets()
  }, [])

  return (
    <header className="header">
      <Logo />

      <div className="header__actions">
        <div className="header__select" >
          <Input
            placeholder="Выбрать город"
            style={{fontSize: 16}}
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            onKeyDown={handleKeyDown}
          />

          <IconButton size="large" onClick={handleSearchCity} disabled={!searchValue}>
            <SearchIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </header>
  )
}

export default Header