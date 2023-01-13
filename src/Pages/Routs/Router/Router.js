
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
import MyProduct from '../../../Dashboard/MyProduct';
import DashboardLayout from '../../Layout/DashboardLayout'
import Bayers from '../../../Dashboard/Bayers/Bayers';
import Sellars from '../../../Dashboard/Sellars/Sellars';
import AdminRoute from '../../Routs/PrivateRoute/AdminRoute'
import Dashboard from '../../../Dashboard/Dashboard/Dashboard'
import MyOrdurs from '../../../Dashboard/MyOrdurs'
import Users from '../../../Dashboard/Users/Users';


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
                path: '/booking/:id',
                element: <PrivateRoute><Booking></Booking></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/booking/${params.id}`)
            },
            
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

    },
    {
        path:'/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
        {
            path:'/dashboard',
        element: <Dashboard></Dashboard>
        },
        {
            path: '/dashboard/addProduct',
            element: <PrivateRoute><AddAProduct></AddAProduct></PrivateRoute>
        },
        {
            path: '/dashboard/sellar',
            element: <PrivateRoute><Sellars></Sellars></PrivateRoute>
        },
        {
            path: '/dashboard/bayer',
            element: <PrivateRoute><Bayers></Bayers></PrivateRoute>
        },
        {
            path: '/dashboard/myordars',
            element: <PrivateRoute><MyOrdurs></MyOrdurs></PrivateRoute>
        },
        {
            path: '/dashboard/myProduct',
            element: <PrivateRoute><MyProduct></MyProduct></PrivateRoute>
        },
        {
            path:'/dashboard/users',
            element: <AdminRoute><Users></Users></AdminRoute>
        }
        ]
            }
])
export default router;