import { IWeather, IMeteoItem } from "@/shared/types"

import temp from "@/app/assets/images/icons/1.svg"
import press from "@/app/assets/images/icons/2.svg"
import water from "@/app/assets/images/icons/3.svg"
import wind from "@/app/assets/images/icons/4.svg"

const COEFF_FOR_CALC_PRESSURE = 1.333

export const generateMeteoItem = (weather: IWeather | null): Array<IMeteoItem> => {
  if (!weather) return []

  const getTemp = () => Math.floor(weather.main.temp)
  const getFeelsLike = () => Math.floor(weather.main.feels_like)
  const getPressure = () => Math.floor(weather.main.pressure / COEFF_FOR_CALC_PRESSURE)
  const getWater = () => weather.main.humidity
  const getWindSpeed = () => weather.wind.speed.toFixed(1)

  return [
    {
      icon: temp,
      title: "Температура",
      body: `${getTemp()}° - ощущается как ${getFeelsLike()}°`
    },
    {
      icon: press,
      title: "Давление",
      body: `${getPressure()} мм ртутного столба`
    },
    {
      icon: water,
      title: "Влажность",
      body: `${getWater()}%`
    },
    {
      icon: wind,
      title: "Ветер",
      body: `${getWindSpeed()} м/с`
    }
  ]
}