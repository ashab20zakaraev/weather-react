import { WeatherTicket } from "@/entities/WeatherTicket"
import { CircularProgress } from "@mui/material"
import { useWeatherTicketStore } from ".."

const WeatherTicketList: React.FC = () => {
  const tickets = useWeatherTicketStore((state) => state.weatherTickets)
  const loading = useWeatherTicketStore((state) => state.loading)
  const removeTicket = useWeatherTicketStore((state) => state.removeWeatherTicket)

  const handleRemoveTicket = (ticketId: number): void => {
    removeTicket(ticketId)
  }

  return (
    <div className="grid">
      {
        !loading ? (
          tickets.length 
            ? tickets.map((ticket) => <WeatherTicket key={ticket.id} ticket={ticket} onRemoveTicket={handleRemoveTicket} />)
            : <h2>Выберите город!</h2>
        ) : <CircularProgress />
      }
    </div>
  )
}

export default WeatherTicketList