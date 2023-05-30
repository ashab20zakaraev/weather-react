import axios from "axios"

const URL = ""

const instance = axios.create({
  baseURL: URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true
})

export default instance