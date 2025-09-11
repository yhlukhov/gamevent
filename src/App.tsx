import { Outlet } from "react-router"
import { Header } from "./components"

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}