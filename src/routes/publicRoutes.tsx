import { SignIn } from "../pages/public/SignIn";
import { SignUp } from "../pages/public/SignUp";

export const publicRoutes = [
    {
        path: "login",
        element: <SignIn />,
      },
      {
        path: "register",
        element: <SignUp />
      },
]