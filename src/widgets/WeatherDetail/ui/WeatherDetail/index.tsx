import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useWeatherTicketStore } from "@/features/WeatherTicketList"
import type { IWeather, IWeatherDaily } from "@/shared/types"
import { Api } from "@/shared"

import { WeatherMainInfo } from "@/features/WeatherMainInfo"
import { WeatherDailyList } from "@/features/WeatherDailyList"
import { MeteoList, generateMeteoItem } from "@/features/MeteoList"

const { loadWeatherDailyInfo } = Api

const WeatherDetail: React.FC = () => {
  const [ cityInfo, setCityInfo ] = useState<IWeather | null>(null)
  const [ detailInfo, setDetailInfo ] = useState<{ daily?: Array<IWeatherDaily> } | null>(null)
  const params = useParams()
  const { weatherTickets } = useWeatherTicketStore((state) => ({
    weatherTickets: state.weatherTickets
  }))

  const getDailyInfo = async (coords: { lat: number, lon: number } | undefined): Promise<void> => {
    if (!coords) return

    try {
      const response = await loadWeatherDailyInfo(coords)

      setDetailInfo(response)
    } catch (error) {
      console.warn(error)
    }
  }

  useEffect(() => {
    const city = weatherTickets.find((ticket) => ticket.id === Number(params.id))

    if (city) {
      setCityInfo(city)
    }

    getDailyInfo(city?.coord)
  }, [])

  return (
    <div>
      <div className="weather__inner">
        <WeatherMainInfo currentWeather={cityInfo} />

        <MeteoList items={generateMeteoItem(cityInfo)} />
      </div>

      <WeatherDailyList items={detailInfo?.daily || []} />
    </div>
  )
}

export default WeatherDetail