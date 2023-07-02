/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { IWeatherTicket } from "@/shared/types"

interface IWeatherTicketStore {
  loading: boolean
  weatherTickets: Array<IWeatherTicket>
  error: {
    status: boolean,
    message: string
  } | null
  setWeatherTicket: ( WeatherTicket: IWeatherTicket ) => void
}

const useWeatherTicketStore = create<IWeatherTicketStore>()(devtools((set) => ({
  loading: false,
  error: null,
  weatherTickets: [],
  setWeatherTicket: (weatherTicket) => set((state) => ({ weatherTickets: [...state.weatherTickets, weatherTicket] }))
})))

export default useWeatherTicketStore