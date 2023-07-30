import { WeatherTicketList } from "@/features/WeatherTicketList"

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1 className="weather__title">Добавьте город</h1>

      <div className="weather__list">
        <WeatherTicketList />
      </div>
    </div>
  )
}

export default Home