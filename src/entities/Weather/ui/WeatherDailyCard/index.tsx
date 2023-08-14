import { useMemo } from "react"
import { generateWeatherIcon, formatWeekly } from "@/entities/Weather"
import type { IWeatherDaily } from "@/shared/types"

const WeatherDailyCard: React.FC<{ daily: IWeatherDaily }> = ({ daily }) => {
  const maxTemp = useMemo(() => Math.floor(daily.temp.max), [])
  const minTemp = useMemo(() => Math.floor(daily.temp.min), [])
  const description = useMemo(() => daily.weather[0].description, [])
  const icon = generateWeatherIcon(daily.weather)
  const weekday = useMemo(() => formatWeekly(daily.dt, { weekday: "short" }), [])
  const date = useMemo(() => formatWeekly(daily.dt, { day: "2-digit", month: "short" }), [])

  return (
    <li className="list__item item__list">
      <div className="item__name">{ weekday }</div>
      <div className="item__date">{ date }</div>
      <div className="item__img">
        <img src={icon} alt="" />
      </div>
      <div className="item__name item__max_temp">{ maxTemp }&deg;</div>
      <div className="item__min_temp">{ minTemp }&deg;</div>
      <div className="item__desc">{ description }</div>
    </li>
  )
}

export default WeatherDailyCard