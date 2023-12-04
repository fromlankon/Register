import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/main/MainLayout";
import Home from "./layouts/main/pages/Home";
import About from "./layouts/main/pages/About";
import AuthLayout from "./layouts/auth/AuthLayout";
import Login from "./layouts/auth/pages/Login";
import Register from "./layouts/auth/pages/Register";
import Details from "./layouts/main/pages/Details";
import AuthRoute from "./helpers/AuthRoute";
import { useContext, useEffect } from "react";
import { ProfileCall } from "./layouts/main/services/auth";
import { UserContext } from "./context/AuthContext";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "/home/:id",
                element: <AuthRoute> <Details /> </AuthRoute> ,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "*",
                element:
                    <div className="notFound">
                        <p> 404 Not Found </p>
                    </div>
            }
        ],
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "",
                element: <Login />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    }
]);

export const MainRouter = () => {
    const {setUser} = useContext(UserContext)
    useEffect(() => {
        ProfileCall()
            .then(({data}) => {
                console.log(data.data.client)
                setUser(data.data.client)
            })
            .catch((err) => {
                setUser(false)
            })
    }, [])
    return <RouterProvider router={router} />
}