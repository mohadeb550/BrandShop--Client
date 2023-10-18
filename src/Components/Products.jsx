import { useLoaderData } from "react-router-dom";
import Product from "./Product";

export default function Products() {

    const products = useLoaderData();
   

  return (

    <section className="my-8 md:my-16 lg:my-24 px-1 lg:px-0" >
        <h1 className="text-[26px] md:text-3xl lg:text-[40px] text-orange-600 font-bold text-center " > Popular Products </h1>
        <p className="text-center text-sm md:text-lg text-gray-500 mt-0 md:mt-2 mb-10 md:mb-16 lg:mb-20" >Get ready to embrace the future with BrandShop. Our mission is to connect you with the latest trends and breakthroughs in the world of electronics</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center  gap-7">
            {products.map(product => <Product key={product._id} product={product} />)}
        </div>
    </section>
  )
}
