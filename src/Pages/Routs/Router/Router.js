
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Home/Home/Home';
import Main from '../../Layout/Main/Main';
import Products from '../../Services/Products/Products';
// import AddAProduct from '../../Products/AddAProduct/AddAProduct';

import Blogs from '../../Blogs/Blogs';
import NotFound from '../../NotFound/NotFound';
import Login from '../../Sheard/Login/Login';
import Register from '../../Sheard/Register/Register';
import Productdetails from '../../Services/Productdetails/Productdetails';
// import Product from '../../Products/Product/Product';
import Booking from '../../Services/Booking/Booking';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Categories from '../../Categories/categories/Categories';
import AddAProduct from '../../Services/AddAProduct/AddAProduct';
import MyProduct from '../../Services/Booking/MyProduct';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/Furnitures',
                element: <Products></Products>
            },
            {
                path: '/AddAProduct',
                element: <PrivateRoute><AddAProduct></AddAProduct></PrivateRoute>
            },
            {
                path: '/productdetails/:id',
                element: <PrivateRoute><Productdetails></Productdetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/productdetails/${params.id}`)
            },
            {
                path: '/category/:name',
                element: <PrivateRoute><Categories></Categories></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.name}`)
            },
            {
                path: '/myProduct',
                element: <PrivateRoute><MyProduct></MyProduct></PrivateRoute>
            },
            {
                path: '/booking/:id',
                element: <PrivateRoute><Booking></Booking></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/booking/${params.id}`)
            },
            // {
            //     path: '/Product/:id',
            //     element: <PrivateRoute><Product></Product></PrivateRoute>,
            //     loader: ({ params }) => fetch(`https://trust-kitchens-server.vercel.app/Product/${params.id}`)
            // },
            // {
            //     path: '/Product',
            //     element: <PrivateRoute><Product></Product></PrivateRoute>,
            //     loader: () => fetch(`https://trust-kitchens-server.vercel.app/Product}`)
            // },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            },

        ]

    }
])
export default router;