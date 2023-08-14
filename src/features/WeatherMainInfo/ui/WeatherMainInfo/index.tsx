import { useMemo } from "react"
import { formatWeekly, generateWeatherIcon } from "@/entities/Weather"
import type { IWeather } from "@/shared/types"

interface IWeatherMainInfoProps {
  currentWeather?: IWeather | null
}

const WeatherMainInfo: React.FC<IWeatherMainInfoProps> = ({ currentWeather }) => {
  const temp = useMemo(() => Math.floor(currentWeather?.main?.temp as number), [currentWeather?.main?.temp])
  const cityName = useMemo(() => currentWeather?.name, [currentWeather?.name])
  const description = useMemo(() => currentWeather?.weather.at(0)?.description, [currentWeather?.weather])
  const date = useMemo(() => formatWeekly(currentWeather?.dt as number, { weekday: "long" }), [currentWeather?.dt])
  const icon = generateWeatherIcon(currentWeather?.weather)

  return (
    <div  className="weather__today today__weather weather__block">
      <div className="today__header">
        <div className="today__info">
          <span>{ temp }&deg;</span>
          <h3>{ date }</h3>
        </div>

        <div className="today__img">
          <img src={icon} alt="icon" />
        </div>
      </div>

      <ul className="today__footer">
        <li>
          Город: <span className="city__name">{ cityName }</span>
        </li>
        <li>
          Описание: <span className="city__name">{ description }</span>
        </li>
      </ul>
    </div>
  )
}

export default WeatherMainInfo