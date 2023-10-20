import { createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import AddProduct from "../Pages/AddProduct";
import ProductPage from "../Components/ProductPage";
import ProductDetails from "../Components/ProductDetails";
import Cart from "../Pages/Cart";
import UpdateProduct from "../Components/UpdateProduct";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "./PrivateRoute";


 const router = createBrowserRouter([

    {path: "/", element: <Root/>, errorElement: <ErrorPage/>,  children:[

        {path:'/', element : <Home/>},
        {path: '/login', element: <Login/>},
        {path:'/sign-up', element: <SignUp/>},
        {path:'/add-product', element: <PrivateRoute> <AddProduct/> </PrivateRoute>},
        {path:'/products/:brand_name', loader:({params})=> fetch(`https://brands-shop-server.vercel.app/products/${params.brand_name}`) ,  element: <ProductPage/>},

        {path: '/details/:selected_brand/:id', loader: ({params})=> fetch(`https://brands-shop-server.vercel.app/details/${params.selected_brand}/${params.id}`) , element: <PrivateRoute>  <ProductDetails/> </PrivateRoute> },

        {path : '/my-cart', loader: () => fetch('https://brands-shop-server.vercel.app/cart') ,  element: <PrivateRoute> <Cart/> </PrivateRoute> },
        {path: '/update-product/:selected_brand/:id', loader: ({params}) => fetch(`https://brands-shop-server.vercel.app/details/${params.selected_brand}/${params.id}`) , element: <PrivateRoute> <UpdateProduct/> </PrivateRoute> }
    ]}
  
  ]);
  

export default router;