import { Outlet } from "react-router-dom"
import Navber from "../Components/Navber/Navber"


function Main() {
  return (
    <div className="max-w-5xl mx-auto">
        <Navber></Navber>
        <Outlet></Outlet>

    </div>
  )
}

export default Main