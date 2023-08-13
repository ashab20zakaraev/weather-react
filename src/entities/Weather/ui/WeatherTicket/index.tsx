import { NavLink } from "react-router-dom"
import { generateWeatherIcon } from "../../lib"
import type { IWeatherTicket } from "@/shared/types"

import { IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import "./weater-ticket.scss"

interface IWeatherTicketProps {
  ticket: IWeatherTicket
  onRemoveTicket: (ticketId: number) => void
}

const WeatherTicket: React.FC<IWeatherTicketProps> = ({ ticket, onRemoveTicket }) => {

  const handleRemoveTicket = (event) => {
    event.preventDefault()

    onRemoveTicket(ticket.id)
  }

  const temp = Math.floor(ticket.main.temp)
  const icon = generateWeatherIcon(ticket.weather)

  return (
    <NavLink to={`/detail/${ticket.id}`}>
      <div className="weather__ticket ticket-weather">
        <div className="ticket-weather__header">
          <div className="ticket-weather__temp">
            <span>{temp}&deg;</span>
          </div>

          <div className="ticket-weather__img">
            <img src={icon} alt="icon" />
          </div>
        </div>

        <ul className="ticket-weather__footer">
          <li>
            <span className="ticket-weather__city">{ ticket.name }</span>
          </li>
        </ul>

        <div className="ticket-weather__close" onClick={handleRemoveTicket}>
          <IconButton size="small">
            <CloseIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </NavLink>
  )
}

export default WeatherTicket