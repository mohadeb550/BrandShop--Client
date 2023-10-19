


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import Rating from 'react-rating';
import { BsCart2, BsStar, BsStarFill } from 'react-icons/bs';
import { GiSelfLove } from 'react-icons/gi';





function UpcomingProducts() {

    const [ deals , setDeals ] = useState([]); 
    
    useEffect(()=> {
      fetch(`/upcoming.json`)
      .then(res => res.json())
      .then(data => setDeals(data))
    }, [])
  


  return (
    <div className="autoplay-slider my-5 lg:my-32  mx-auto md:border px-4 py-5">
        <h1 className="text-[24px] text-center  text-black/60 font-bold border-b mb-5 pb-6"> Upcoming Products </h1>



     <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>

       {deals.map(deal => {
        return (
          <>
           <div className='flex flex-col justify-center items-center gap-3 mx-2 border-r'>

            
       <div className="flex flex-col">

<div className=" flex items-center justify-center relative">
<p className="text-white/90 py-[6px] mb-2 text-xs md:text-sm px-3 w-24 bg-red-600 absolute top-5 right-0"> Upcoming </p>
     <img className="p-4 w-36 h-36 md:w-48 md:h-48 object-contain" src={deal.image}/>
 </div>

 <div className="flex flex-col gap-2 p-4">
     <h2 className="text-sm md:text-[16px] font-semibold"> {deal.name} </h2>
     <h3 className="text-[20px] text-orange-500 font-semibold flex items-center gap-2"> {`$${deal.price}`} <small className='text-black/50'>(expected)</small> </h3>
    

 </div>
</div>

        </div>
          </>
        )
       })}
        </section>        
    
    </div>
  );
}

export default UpcomingProducts;