import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
        <p>Banner</p>
        <p>Navbar</p>
        <main className="min-h-screen">
            <Outlet/>
        </main>
        <p>Footer</p>
        <p>cartsidebar  </p>

    </>
  )
}
