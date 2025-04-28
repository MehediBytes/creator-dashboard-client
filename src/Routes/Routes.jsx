import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AboutUs from "../Components/AboutUs/AboutUs";
import FAQ from "../Components/FAQ/FAQ";
import PrivateRoute from "./PrivateRoute";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import Dashboard from "../Layouts/Dashboard";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([

    // Main layout routes
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    },

    // Dashboard layout routes
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            // user routes 
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },

            // admin only routes
            {
                path: 'adminHome',
                element: <AdminRoute> <AdminHome></AdminHome> </AdminRoute>
            },
        ]
    }
]);