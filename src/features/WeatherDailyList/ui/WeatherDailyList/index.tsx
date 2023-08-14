import { WeatherDailyCard } from "@/entities/Weather"
import type { IWeatherDaily } from "@/shared/types"

const WeatherDailyList: React.FC<{ items: Array<IWeatherDaily> }> = ({ items }) => {
  return (
    <div className="cards">
      <ul className="cards__list list__cards weather__block">
        {
          items.map((daily) => <WeatherDailyCard daily={daily} key={daily.dt} />)
        }
      </ul>
    </div>
  )
}

export default WeatherDailyList