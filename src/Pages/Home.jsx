import { useContext } from "react";
import Banner from "../Components/Banner";
import Brands from "../Components/Brands";
import { AuthContext } from "../AuthProvider/AuthProvider";
import HotDeals from "../Components/HotDeals";


export default function Home() {

    const { companies } = useContext(AuthContext)

  return (
    <section className="max-w-[1300px] mx-auto px-4">

    <Banner/>
    <HotDeals/>
    <Brands companies={companies} />
    </section>
  )
}
