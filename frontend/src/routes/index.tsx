import { createBrowserRouter } from "react-router-dom";
import { Home } from "@pages/Home";
import { ProtectRoute } from "@protectRoute";
import { Login } from "@pages/Login";
import { Signup } from "@pages/Signup";
import { Applications } from "@pages/Applications";

export const router = createBrowserRouter([
    {
        element: <ProtectRoute />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/applications",
                element: <Applications />,
            },
        ],
    },
    {
        element: <ProtectRoute isProtected={false} showHeader={false} />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },
]);
