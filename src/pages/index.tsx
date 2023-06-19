import { lazy } from "react"
import { Routes, Route } from "react-router-dom"

const homePage = lazy(() => import("./home"))

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" Component={homePage} />
    </Routes>
  )
}