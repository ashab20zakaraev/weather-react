import { icons } from "@/shared/constants"

const TODAY = "Сегодня"
const TOMORROW = "Завтра"

export function formatWeekly(dt: number, options) {
  const today = new Date().getDate()
  const date = new Date(dt * 1000).getDate()
  const tomorrow = new Date(
    new Date().getTime() + 24 * 60 * 60 * 1000
  ).getDate()

  if (date === today) {
    return TODAY
  } else if (date === tomorrow) {
    return TOMORROW
  }

  return new Date(dt * 1000).toLocaleString("ru-RU", options)
}

export function generateWeatherIcon(ticketWeather) {
  if (!ticketWeather) return

  const { icon } = ticketWeather.at(0)

  return icons[icon]
}