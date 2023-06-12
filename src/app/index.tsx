/* eslint-disable react-refresh/only-export-components */
import { withProviders } from "./providers"
import { Routing } from "@/pages"
import "@/app/assets/scss/style.scss"

const App = () => {
  return (<Routing />)
}

export default withProviders(App)
