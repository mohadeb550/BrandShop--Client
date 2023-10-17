import { Link } from "react-router-dom";


export default function AddProduct() {
    
  return (
    <div className="hero h-[1000px] bg-base-200 rounded pb-20">
    <div className="hero-content flex-col  w-full gap-0">

    
        <h1 className="text-[27px] lg:text-[32px] text-orange-600 font-bold text-center mb-4"> Add New Product !</h1>
        {/* <img src="/11879344_Checklist.jpg" className="w-96"/> */}

      <div className="rounded-lg flex-shrink-0 w-full max-w-[530px]  bg-base-100">
        <div className="p-7">


        <form >
            
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
              <span className="label-text"> Description </span>
            </label>
            <textarea className="border p-2 rounded outline-none" name="description" rows={4} > short description of the product... </textarea>
          </div>

          <select className="select select-error w-full max-w-xs">
            <option disabled selected> Brand Selection </option>
             <option>Strapi</option>
            <option>Ghost</option>
            <option>Netlify CMS</option>
            <option>Sanity</option>
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
