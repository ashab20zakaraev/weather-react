import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { IWeatherTicket, useWeatherTicketStore } from "@/entities/WeatherTicket"

import { WeatherDetailInfo, WeatherMainInfo } from "@/entities/WeatherInfo"

const WeatherDetail: React.FC = () => {
  const [ cityInfo, setCityInfo ] = useState<IWeatherTicket | null>(null)
  const params = useParams()
  const { weatherTickets } = useWeatherTicketStore((state) => ({
    weatherTickets: state.weatherTickets
  }))

  useEffect(() => {
    const city = weatherTickets.find((ticket) => ticket.id === Number(params.id))

    if (city) {
      setCityInfo(city)
    }
  }, [])

  return (
    <div className="weather__inner">
      <WeatherMainInfo currentWeather={cityInfo} />

      <WeatherDetailInfo />
    </div>
  )
}

export default WeatherDetail