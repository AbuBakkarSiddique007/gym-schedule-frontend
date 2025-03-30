import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Root</h1>,
        children: [
            {
                path: "/",
                element: <h1>Home</h1>,
            }
        ]
    }
])
