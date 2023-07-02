import type { IWeatherTicket } from "@/entities/WeatherTicket"

import { IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import "./weater-ticket.scss"

import { icons } from "../constants"

interface IWeatherTicketProps {
  ticket: IWeatherTicket
  onRemoveTicket: (ticketId: number) => void
}

const WeatherTicket: React.FC<IWeatherTicketProps> = ({ ticket, onRemoveTicket }) => {
  const generateWeatherIcon = (ticketWeather) => {
    const { icon } = ticketWeather.at(0)

    return icons[icon]
  }

  const handleRemoveTicket = () => {
    onRemoveTicket(ticket.id)
  }

  const temp = Math.floor(ticket.main.temp)
  const icon = generateWeatherIcon(ticket.weather)

  return (
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
  )
}

export default WeatherTicket