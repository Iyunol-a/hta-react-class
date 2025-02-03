import { Outlet } from "react-router-dom"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"

const Homelayout = () => {
  return (
    <div className="play">
       <Navbar />
       <Outlet /> 
       <Footer />
       
    </div>
  )
}

export default Homelayout