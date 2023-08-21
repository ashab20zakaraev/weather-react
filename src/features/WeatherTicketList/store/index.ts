/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import type { IWeather } from "@/shared/types"
import { AxiosError } from "axios"
import { Api } from "@/shared"

const { loadWeather } = Api

interface IWeatherStore {
  loading: boolean
  weatherTickets: Array<IWeather>
  setLoading: (status: boolean) => void
  loadWeatherTicket: (cityName: string) => Promise<void>
  setWeatherTicket: ( weatherTicket: IWeather ) => void
  removeWeatherTicket: (weatherTicketId: number) => void
  hasCity: (cityName: string) => boolean  
  initTickets: () => Promise<void>
}

const useWeatherTicketStore = create<IWeatherStore>()(
  devtools(
    persist((set, get) => ({
      loading: false as boolean,
      weatherTickets: [],
      setLoading: (status) => set({ loading: status }),
      initTickets: async () => {
        const newWeatherTickets = get().weatherTickets.map((ticket) => loadWeather(ticket.name))
        const result = await Promise.all(newWeatherTickets)
        set({ weatherTickets: result })
      },
      setWeatherTicket: (weatherTicket) => set((state) => ({ weatherTickets: [...state.weatherTickets, weatherTicket] })),
      removeWeatherTicket: (weatherTicketId) => set((state) => ({ weatherTickets: state.weatherTickets.filter((ticket) => ticket.id !== weatherTicketId) })),
      hasCity: (cityName) => get().weatherTickets.some((city) => city.name.toUpperCase() === cityName.toUpperCase()),
      loadWeatherTicket: async (cityName) => loadWeather(cityName).then((response) => get().setWeatherTicket(response)),
    }), {
      name: "weather-ticket",
    })
  )
)

export default useWeatherTicketStore