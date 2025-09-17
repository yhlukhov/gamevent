import { Outlet } from "react-router"
import { Footer, Header } from "./components"

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}