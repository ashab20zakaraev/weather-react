/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import type { IWeatherTicket } from "@/shared/types"
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
  hasCity: (cityName: string) => boolean  
  initTickets: () => Promise<void>
}

const useWeatherTicketStore = create<IWeatherTicketStore>()(
  devtools(
    persist((set, get) => ({
      loading: false as boolean,
      error: null,
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
      name: "weather-ticket",
    })
  )
)

export default useWeatherTicketStore