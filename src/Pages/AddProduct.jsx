import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


export default function AddProduct() {

    const [ selectedBrand , setSelectedBrand ] = useState('');

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const type = form.type.value;
        const price = form.price.value;
        const image = form.image.value;
        const rating = form.rating.value;
        const brandName = form.brandName.value;
        const description = form.description.value;


        fetch(`http://localhost:5000/brand/${selectedBrand}`,{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({name, type, price, image, rating, brandName, selectedBrand, description})
        })
        .then(res => res.json())
        .then(data => {
         if(data.insertedId){
          toast.success('Product Added Successfully!')
          form.reset();
         }
        })
        .catch(error => toast.error('Something went wrong!'))
    }


    
    const handleSelect = (e) => {
        setSelectedBrand(e.target.value);
    }

    
  return (
    <div className="hero h-[1000px] lg:h-[1100px] bg-base-200 rounded pb-20 bg-[url('https://i.ibb.co/fDCkK24/luke-chesser-3-POMg-Ljf-Yv0-unsplash.jpg')] max-w-[1300px] mx-auto px-4">
    <div className="hero-content flex-col  w-full gap-0">

    
        <h1 className="text-[27px] lg:text-[32px] text-white/90 font-bold text-center mb-4"> Add New Product !</h1>
        {/* <img src="/11879344_Checklist.jpg" className="w-96"/> */}

      <div className="rounded-lg flex-shrink-0 w-full max-w-[530px]  bg-base-100">
        <div className="p-7">


        <form onSubmit={handleAddProduct}>
            
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name </span>
            </label>
            <input type="text" placeholder="product name" className="input input-bordered" name="name" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Type </span>
            </label>
            <input type="text" placeholder="Type" className="input input-bordered" name="type" />
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text"> Price </span>
            </label>
            <input type="text" placeholder="price" className="input input-bordered" name="price" />
            <span className="text-red-500 text-sm p-1">  </span>
           

            <div className="form-control mb-3">
            <label className="label">
              <span className="label-text"> Product Image </span>
            </label>
            <input type="text" placeholder="product image" className="input input-bordered" name="image" />
          </div>

            <div className="form-control mb-3">
            <label className="label">
              <span className="label-text"> Rating </span>
            </label>
            <input type="text" placeholder="rating" className="input input-bordered" name="rating" />
          </div>

          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text"> Brand Name </span>
            </label>
            <input type="text" placeholder="brand name" className="input input-bordered" name="brandName" />
          </div>

            <div className="form-control mb-3">
            <label className="label">
              <span className="label-text"> Description </span>
            </label>
            <textarea className="border p-2 rounded outline-none" name="description" rows={4} > short description of the product... </textarea>
          </div>

          <select className="select select-error w-full max-w-xs" onChange={handleSelect}>
            <option disabled selected> Brand Selection </option>
             <option value='apple'> Apple </option>
            <option value='xiaomi'> Xiaomi </option>
            <option value='samsung'> Samsung </option>
            <option value='sony'> Sony</option>
            <option value='google'> Google </option>
            <option value='asus'> Asus </option>
            </select>
           
          </div>
          <div className="form-control mt-6">
            <button className="bg-orange-600 py-2 px-3 text-gray-100 rounded font-semibold transition-all hover:bg-orange-700 text-sm md:text-base" type="submit"> Add </button>
          </div>
        </form>


        </div>
      </div>
    </div>
  </div>
  )
}
