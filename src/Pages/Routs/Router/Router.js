
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Home/Home/Home';
import Main from '../../Layout/Main/Main';
import Products from '../../Services/Products/Products';
// import AddService from '../../Products/AddService/AddService';
// import MyReview from '../../Products/Review/MyReview';
import Blogs from '../../Blogs/Blogs';
import NotFound from '../../NotFound/NotFound';
import Login from '../../Sheard/Login/Login';
import Register from '../../Sheard/Register/Register';
import Productdetails from '../../Services/Productdetails/Productdetails';
// import Review from '../../Products/Review/Review';
import Booking from '../../Services/Booking/Booking';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Categories from '../../Categories/categories/Categories';
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
            // {
            //     path: '/addservice',
            //     element: <PrivateRoute><AddService></AddService></PrivateRoute>
            // },
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
            // {
            //     path: '/myreview',
            //     element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            // },
            {
                path: '/booking/:id',
                element: <PrivateRoute><Booking></Booking></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/booking/${params.id}`)
            },
            // {
            //     path: '/review/:id',
            //     element: <PrivateRoute><Review></Review></PrivateRoute>,
            //     loader: ({ params }) => fetch(`https://trust-kitchens-server.vercel.app/review/${params.id}`)
            // },
            // {
            //     path: '/review',
            //     element: <PrivateRoute><Review></Review></PrivateRoute>,
            //     loader: () => fetch(`https://trust-kitchens-server.vercel.app/review}`)
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