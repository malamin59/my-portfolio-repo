
import { Outlet } from 'react-router'   // imported from dom
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />                     
      </main>
      <Footer/>
    </>
  )
}
