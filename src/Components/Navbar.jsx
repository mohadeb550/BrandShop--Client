import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
// 
import toast from "react-hot-toast";
import { TbLogout} from 'react-icons/tb'



export default function Navbar() {

  // const { currentUser , logOut } = useContext(AuthContext);
  const [ currentUser , setCurrentUser ] = useState(false)
  const navigate = useNavigate();

  useEffect(()=>{
  
  },[])



  const navLinks = <>
   <li ><NavLink className={({isActive})=> isActive? ' font-semibold bg-orange-600 text-white/95 px-3 py-[3px] rounded ': '' } to='/'> Home </NavLink></li>
   <li ><NavLink className={({isActive})=> isActive? ' font-semibold bg-orange-600 text-white/95 px-3 py-[3px] rounded ': '' } to='/add-product'> Add Product </NavLink></li>
   <li ><NavLink className={({isActive})=> isActive? ' font-semibold bg-orange-600 text-white/95 px-3 py-[3px] rounded ': '' } to='/my-cart'> My Cart </NavLink></li>
   <li ><NavLink className={({isActive})=> isActive? ' font-semibold bg-orange-600 text-white/95 px-3 py-[3px] rounded ': '' } to='/login'> Login </NavLink></li>
  
  </>
    
    const signOut = () => {
      // logOut()
      // .then(result => {
      //   toast.success('Logged Out !')
      //   navigate('/');
      // })
      // .catch(error => {
      
      // })
    }

  return (
    <div className="navbar bg-base-100 max-w-[1300px] mx-auto flex justify-between">
  <div className="navbar-start z-50" data-aos="fade-right">
    <div className="dropdown z-50">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded w-52">
        {navLinks}
      </ul>
    </div>
    <div className="flex items-center gap-1">
    <img src='/pngwing.com (3).png' className="w-9 md:w-12 lg:w-16"/>
    <p className="text-base  md:text-xl lg:text-2xl font-semibold text-rose-600"> BrandShop</p>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex items-center gap-10 menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>

  <div className="dropdown dropdown-end flex items-center justify-center gap-2 z-50" data-aos ="fade-left">
    
        {!currentUser && <Link to='/login'><button className="font-semibold  text-sm md:text-[16px] p-1 px-3 rounded bg-gray-50 hover:bg-gray-100"> Login </button></Link>}
        {currentUser && <h4 className="font-semibold"> {currentUser?.displayName || 'User'}</h4>}
        
        <div className="z-30 lg:w-10 rounded-full p-[2px] border border-gray-500">
          <img tabIndex={0} src={currentUser?.photoURL || '/avatar.jpg' } className="dropdown w-7 md:w-9 cursor-pointer rounded-full" />

          {currentUser && 
         <ul tabIndex={0} className="dropdown-content p-2 shadow bg-base-100 rounded w-52 flex items-center">
         <li className="cursor-pointer transition-all hover:bg-gray-200 p-1 rounded " onClick={()=> signOut() }> Log out</li> 
          <MdOutlineLogout className="text-yellow-600"/> 
        </ul>}
        </div>
     
    </div>

</div>
  )
}
