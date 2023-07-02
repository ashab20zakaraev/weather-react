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
  setWeatherTicket: ( weatherTicket: IWeatherTicket ) => void,
  removeWeatherTicket: (weatherTicketId: number) => void
}

const useWeatherTicketStore = create<IWeatherTicketStore>()(devtools((set) => ({
  loading: false,
  error: null,
  weatherTickets: [],
  setWeatherTicket: (weatherTicket) => set((state) => ({ weatherTickets: [...state.weatherTickets, weatherTicket] })),
  removeWeatherTicket: (weatherTicketId) => set((state) => ({ weatherTickets: state.weatherTickets.filter((ticket) => ticket.id !== weatherTicketId) }))
})))

export default useWeatherTicketStore