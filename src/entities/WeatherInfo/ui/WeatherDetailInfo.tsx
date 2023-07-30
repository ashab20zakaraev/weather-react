import { useMemo } from "react"
import { IWeatherTicket } from "@/shared"

import icon1 from "@/app/assets/images/icons/1.svg"
import icon2 from "@/app/assets/images/icons/2.svg"
import icon3 from "@/app/assets/images/icons/3.svg"
import icon4 from "@/app/assets/images/icons/4.svg"

interface IWeatherMainInfoProps {
  currentWeather?: IWeatherTicket | null
}

const COEFF_FOR_CALC_PRESSURE = 1.333

const WeatherDetailInfo: React.FC<IWeatherMainInfoProps> = ({ currentWeather }) => {
  const temp = useMemo(() => Math.floor(currentWeather?.main.temp as number), [currentWeather?.main.temp])
  const feelLike = useMemo(() => Math.floor(currentWeather?.main.feels_like as number), [currentWeather?.main.feels_like])
  const pressure = useMemo(() => Math.floor(currentWeather?.main.pressure as number / COEFF_FOR_CALC_PRESSURE), [currentWeather?.main.pressure])
  const humidity = useMemo(() => currentWeather?.main.humidity, [currentWeather?.main.humidity])
  const windSpeed = useMemo(() => currentWeather?.wind.speed.toFixed(1), [currentWeather?.wind.speed])
  
  return (
    <div className="weather__detail detail__weather weather__block">
      <ul className="detail__list">
        <li className="detail__item">
          <div className="detail__img">
            <img src={icon1} alt="" />
          </div>
          <h3 className="detail__name">Температура</h3>
          <h2 className="detail__info">
            { temp }° - ощущается как { feelLike }°
          </h2>
        </li>

        <li className="detail__item">
          <div className="detail__img">
            <img src={icon2} alt="" />
          </div>
          <h3 className="detail__name">Давление</h3>
          <h2 className="detail__info">{ pressure } мм ртутного столба</h2>
        </li>

        <li className="detail__item">
          <div className="detail__img">
            <img src={icon3} alt="" />
          </div>
          <h3 className="detail__name">Влажность</h3>
          <h2 className="detail__info">{ humidity }%</h2>
        </li>

        <li className="detail__item">
          <div className="detail__img">
            <img src={icon4} alt="" />
          </div>
          <h3 className="detail__name">Ветер</h3>
          <h2 className="detail__info">{ windSpeed } м/с</h2>
        </li>
      </ul>
    </div>
  )
}

export default WeatherDetailInfo