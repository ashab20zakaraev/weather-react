import axios from "axios"

const URL = import.meta.env.VITE_BASE_URL

const instance = axios.create({
  baseURL: URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: false
})

export default instance