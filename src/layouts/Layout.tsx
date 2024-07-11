import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
    // Outlet это место, куда будут рендерится компоненты страниц
  )
}