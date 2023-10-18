import { useContext, useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Brands from "../Components/Brands";
import { AuthContext } from "../AuthProvider/AuthProvider";


export default function Home() {

    const { companies } = useContext(AuthContext)

  return (
    <section className="max-w-[1300px] mx-auto px-4">

    <Banner/>
    <Brands companies={companies} />
    </section>
  )
}
