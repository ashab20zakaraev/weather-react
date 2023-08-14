export interface IWeatherDescription {
  description: string
  icon: string
  id: number
  main: string 
}

export interface IWeather {
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
  weather: Array<IWeatherDescription>
}

export interface IWeatherDaily {
  clouds: number
  dew_point: number
  dt: number
  feels_like: {
    day: number
    eve: number
    morn: number
    night: number
  }
  moon_phase: number
  moonrise: number
  moonset: number
  pop: number
  pressure: number
  rain: number
  sunrise: number
  sunset: number
  temp: {
    day: number
    eve: number
    max: number
    min: number
    morn: number
    night: number
  }
  uvi: number
  weather: Array<IWeatherDescription>
  wind_deg: number
  wind_gust: number
  wind_speed: number
}

export interface IMeteoItem {
  icon?: string
  title?: string
  body?: string
}

export interface IWeatherHourly {
  clouds: number
  dew_point: number
  dt: number
  feels_like: number
  humidity: number
  pop: number
  pressure: number
  temp: number
  uvi: number
  visibility: number
  weather: Array<IWeatherDescription>
  wind_deg: number
  wind_gust: number
  wind_speed: number
}