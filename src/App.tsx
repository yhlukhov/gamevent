import { Outlet } from "react-router"
import { Footer, Header, Lang } from "./components"

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Lang />
    </>
  )
}