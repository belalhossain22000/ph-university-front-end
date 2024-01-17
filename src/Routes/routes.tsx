import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AdminDashbord from "../pages/admin/AdminDashbord";
import CreateStudents from "../pages/admin/CreateStudents";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";


const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"about",
                element:<About/>
            }
        ]
    },
    {
        path:"/admin",
        element:<App/>,
        children:[
            {
                index:true,
                element:<AdminDashbord/>
            },
            {
                path:"create-student",
                element:<CreateStudents/>
            },
            {
                path:"create-admin",
                element:<CreateAdmin/>
            },
            {
                path:"create-faculty",
                element:<CreateFaculty/>
            },
           
        ]
    },
    {
        path:"login",
        element:<Login/>
    },
    {
        path:"register",
        element:<Registration/>
    }
])

export default router