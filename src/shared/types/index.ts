export interface IWeatherTicket {
  name: string
  id: number
  dt: number
  main: {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
  }
  coord: {
    lat: number
    lon: number
  }
  wind: {
    deg: number
    speed: number
  }
  weather: Array<{ description: string, icon: string }>
}

export interface IMeteoItem {
  icon?: string
  title?: string
  body?: string
}