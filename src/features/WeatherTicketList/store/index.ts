/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import type { IWeatherTicket } from "@/entities/WeatherTicket"
import { Api } from "@/shared"

const { loadWeather } = Api

interface IWeatherTicketStore {
  loading: boolean
  weatherTickets: Array<IWeatherTicket>
  error: {
    status: boolean,
    message: string
  } | null
  setLoading: (status: boolean) => void
  loadWeatherTicket: (cityName: string) => Promise<void>
  setWeatherTicket: ( weatherTicket: IWeatherTicket ) => void
  removeWeatherTicket: (weatherTicketId: number) => void
}

const useWeatherTicketStore = create<IWeatherTicketStore>()(
  devtools(
    persist((set, get) => ({
      loading: false as boolean,
      error: null,
      weatherTickets: [],
      setLoading: (status) => {
        set({ loading: status })
      },
      setWeatherTicket: (weatherTicket) => set((state) => ({ weatherTickets: [...state.weatherTickets, weatherTicket] })),
      removeWeatherTicket: (weatherTicketId) => set((state) => ({ weatherTickets: state.weatherTickets.filter((ticket) => ticket.id !== weatherTicketId) })),
      loadWeatherTicket: async (cityName) => {
        set({ loading: true })
        try {
          const response = await loadWeather(cityName)
    
          get().setWeatherTicket(response)
        } catch (error) {
          console.error(error)
        } finally {
          set({ loading: false })
        }
      },
    }), {
      name: "weather-ticket" 
    })
  )
)

export default useWeatherTicketStore