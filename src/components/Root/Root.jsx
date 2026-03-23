import { Outlet } from "react-router";
import Navbar from "../Navbar";




function Root () {
    return(
        <div>
           <Navbar/>
           <Outlet/>
        </div>
    )
}
export default Root;