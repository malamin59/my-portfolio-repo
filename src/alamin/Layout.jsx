
import { Outlet } from 'react-router'   // imported from dom
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ScrollToHashElement from '../Root/ScrollToHashElement'

export default function Layout() {
  return (
    <>
    <ScrollToHashElement/>
      <Navbar />
      <main>
        <Outlet />                     
      </main>
      <Footer/>
    </>
  )
}
