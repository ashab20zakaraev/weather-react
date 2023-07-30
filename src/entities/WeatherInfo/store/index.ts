import { create } from "zustand"
import { devtools } from "zustand/middleware"

const useWeatherDetailStore = create()(
  devtools((set, get) => {
    return {}
  })
)

export default useWeatherDetailStore