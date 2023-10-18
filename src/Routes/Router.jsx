import { createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import AddProduct from "../Pages/AddProduct";
import ProductPage from "../Components/ProductPage";
import ProductDetails from "../Components/ProductDetails";


 const router = createBrowserRouter([

    {path: "/", element: <Root/>, errorElement: <ErrorPage/>,  children:[

        {path:'/', element : <Home/>},
        {path:'/add-product', element: <AddProduct/>},
        {path:'/products/:brand_name', loader:({params})=> fetch(`http://localhost:5000/products/${params.brand_name}`) ,  element: <ProductPage/>},

        {path: '/details/:selected_brand/:id', loader: ({params})=> fetch(`http://localhost:5000/details/${params.selected_brand}/${params.id}`) , element: <ProductDetails/> }
    ]}
  
  ]);
  

export default router;