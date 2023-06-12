import { lazy } from "react"
import { Route, redirect, Switch } from "react-router-dom"

const homePage = lazy(() => import("./home"))

/**
 * TODO: 
 * ! Setting routing application
 */

export const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={homePage} />
      <redirect to="/" />
    </Switch>  
  )
}