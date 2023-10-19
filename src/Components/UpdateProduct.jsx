import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useParams } from "react-router-dom";


export default function UpdateProduct () {

  const [ render , setRender ]  = useState();

  const {_id, name, type, price, image, rating, brandName, selectedBrand} = useLoaderData();

  // useEffect(()=>{

  // },[])
 

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const type = form.type.value;
        const price = form.price.value;
        const image = form.image.value;
        const rating = form.rating.value;
        const brandName = form.brandName.value;
 

        fetch(`http://localhost:5000/${selectedBrand}/${_id}`,{
            method: "PATCH",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({name, type, price, image, rating, brandName})
        })
        .then(res => res.json())
        .then(data => {
         if(data.modifiedCount){
          console.log(data)
          setRender(render + 1)
          toast.success('Updated Successfully!')
         }
        })
        .catch(error => {
          console.log(error)
          toast.error('Something went wrong!')
        })
    }


    
    
  return (
    <div className="hero h-[900px] lg:h-[950px] bg-base-200 rounded pb-20 bg-[url('https://i.ibb.co/n3nZhkQ/dave-hoefler-PEkf-SAxeplg-unsplash.jpg')] max-w-[1300px] mx-auto px-4">
    <div className="hero-content flex-col  w-full gap-0">

    
        <h1 className="text-[27px] lg:text-[32px] text-white/90 font-bold text-center mb-4"> Edit Your Product !</h1>
        {/* <img src="/11879344_Checklist.jpg" className="w-96"/> */}

      <div className="rounded-lg flex-shrink-0 w-full max-w-[530px]  bg-base-100">
        <div className="p-7">


        <form onSubmit={handleUpdate}>
            
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name </span>
            </label>
            <input type="text" defaultValue={name} placeholder="product name" className="input input-bordered" name="name" />
          </div>

          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text"> Brand Name </span>
            </label>
            <input type="text" defaultValue={brandName} placeholder="brand name" className="input input-bordered" name="brandName" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Type </span>
            </label>
            <input type="text" defaultValue={type} placeholder="Type" className="input input-bordered" name="type" />
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text"> Price </span>
            </label>
            <input type="text" defaultValue={price} placeholder="price" className="input input-bordered" name="price" />
            <span className="text-red-500 text-sm p-1">  </span>
           

            <div className="form-control mb-3">
            <label className="label">
              <span className="label-text"> Product Image URL </span>
              <img className="w-14" src={image}/>
            </label>
            <input type="text" defaultValue={image} placeholder="product image" className="input input-bordered" name="image" />
          </div>

            <div className="form-control mb-3">
            <label className="label">
              <span className="label-text"> Rating </span>
            </label>
            <input type="text" defaultValue={rating} placeholder="rating" className="input input-bordered" name="rating" />
          </div>

           
          </div>
          <div className="form-control mt-6">
            <button className="bg-orange-600 py-2 px-3 text-gray-100 rounded font-semibold transition-all hover:bg-orange-700 text-sm md:text-base" type="submit"> Update Changes </button>
          </div>
        </form>


        </div>
      </div>
    </div>
  </div>
  )
}
