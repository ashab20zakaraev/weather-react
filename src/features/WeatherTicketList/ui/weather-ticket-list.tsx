import { WeatherTicket } from "@/entities/WeatherTicket"
import { useWeatherTicketStore } from ".."

const WeatherTicketList: React.FC = () => {
  const tickets = useWeatherTicketStore((state) => state.weatherTickets)
  const removeTicket = useWeatherTicketStore((state) => state.removeWeatherTicket)

  const handleRemoveTicket = (ticketId: number): void => {
    removeTicket(ticketId)
  }

  return (
    <div className="grid">
      { tickets.length 
        ? tickets.map((ticket) => <WeatherTicket key={ticket.id} ticket={ticket} onRemoveTicket={handleRemoveTicket} />)
        : <h2>Выберите город!</h2> }
    </div>
  )
}

export default WeatherTicketList