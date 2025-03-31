import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../components/ErrorPage";
import AddSchedule from "../assets/Pages/AddSchedule";
import AllSchedule from "../assets/Pages/AllSchedule";
import SignUp from "../assets/Pages/SignUp";
import SignIn from "../assets/Pages/SignIn";
import Home from "../components/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/add-schedule",
                element: <AddSchedule></AddSchedule>
            },
            {
                path: "/all-schedule",
                element: <AllSchedule></AllSchedule>
            },
            {
                path: "/sign-up",
                element: <SignUp></SignUp>
            },
            {
                path: "/sign-in",
                element: <SignIn></SignIn>
            }
        ]
    }
])
