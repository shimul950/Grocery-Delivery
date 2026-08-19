import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

export default function AppLayout() {
  return (
    <>
        <Banner/>
        <Navbar/>
        <main className="min-h-screen">
            <Outlet/>
        </main>
        <p>Footer</p>
        <p>cartsidebar  </p>

    </>
  )
}
