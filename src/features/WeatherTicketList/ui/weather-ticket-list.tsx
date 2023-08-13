import { WeatherTicket } from "@/entities/Weather"
import { CircularProgress } from "@mui/material"
import useWeatherTicketStore from "../store"

const WeatherTicketList: React.FC = () => {
  const { tickets, loading, removeTicket }  = useWeatherTicketStore(
    (state) => ({
      tickets: state.weatherTickets,
      loading: state.loading,
      removeTicket: state.removeWeatherTicket
    })
  )

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