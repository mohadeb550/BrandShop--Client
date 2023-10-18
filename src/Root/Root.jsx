import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";

export default function Root() {

  return (
    <>
   <Toaster/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
