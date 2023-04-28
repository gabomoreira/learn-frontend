import { Home } from "../pages/private/Home";

export const privateRoutes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "courses",
    element: <div>courses page</div>,
  },
  {
    path: "forum",
    element: <div>forum page</div>,
  },
]