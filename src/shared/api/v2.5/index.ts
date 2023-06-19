/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from "../instance";

const API_KEY = import.meta.env.VIRE_API_KEY
const LANG = "ru"

const ENDPOINTS = {
  weather: "/data/2.5/weather",
  dailyInfo: "/data/2.5/oncall"
}

const loadWeather = (cityName: string): Promise<any> => {
  return instance.get(`${ENDPOINTS.weather}?lang=${LANG}&appid=${API_KEY}&units=metric&q=${cityName}`).then((response) => response.data)
}

const loadWeatherDailyInfo = (coords: { lat: number, lon: number }): Promise<any> => {
  return instance.get(`${ENDPOINTS.dailyInfo}?lang=${LANG}&appid=${API_KEY}&units=metric&lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,alerts`)
  .then((response) => response.data)
}

export {
  loadWeather,
  loadWeatherDailyInfo
}