import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Brands from "../Components/Brands";


export default function Home() {

    const [ services , setServices ] = useState()

    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

  return (
    <section className="max-w-[1300px] mx-auto px-4">

    <Banner/>
    <Brands services={services} />
    </section>
  )
}
