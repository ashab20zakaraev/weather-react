import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useWeatherTicketStore } from "@/features/WeatherTicketList"
import type { IWeatherTicket } from "@/shared/types"

import { WeatherMainInfo } from "@/features/WeatherMainInfo"
import { MeteoList, generateMeteoItem } from "@/features/MeteoList"

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

      <MeteoList items={generateMeteoItem(cityInfo)} />
    </div>
  )
}

export default WeatherDetail