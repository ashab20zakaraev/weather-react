/* eslint-disable react-refresh/only-export-components */
import { withProviders } from "./providers"
import { Routing } from "@/pages"
import "@/app/assets/scss/style.scss"

import { UI } from "@/widgets"

const { Header } = UI

const App = () => {
  return (
    <main className="main">
      <div className="container">
        <Header></Header>
        <Routing />
      </div>
    </main>
  )
}

export default withProviders(App)
