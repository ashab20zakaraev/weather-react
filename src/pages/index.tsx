import { lazy } from "react"
import { Routes, Route } from "react-router-dom"

const homePage = lazy(() => import("./home"))
const detailPage = lazy(() => import("./detail"))

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" Component={homePage} />
      <Route path="/detail/:id" Component={detailPage} />
    </Routes>
  )
}