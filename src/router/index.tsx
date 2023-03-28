import { Navigate } from "react-router-dom";
import Home from "../pages/home";
const router = [
    {
        path:'/home',
        element: <Home/>
    },
    {
        path:'/',
        element:<Navigate to='/home' />
    }
]

export default router