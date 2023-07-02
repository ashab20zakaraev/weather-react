import { WeatherTicket } from "@/entities/WeatherTicket"
import { useWeatherTicketStore } from ".."

const WeatherTicketList: React.FC = () => {
  const tickets = useWeatherTicketStore((state) => state.weatherTickets)
  const loading = useWeatherTicketStore((state) => state.loading)

  return (
    <div className="grid">
      { tickets.length ? tickets.map((ticket) => <WeatherTicket key={ticket.id} ticket={ticket} />) : <h2>Выберите город!</h2> }
    </div>
  )
}

export default WeatherTicketList