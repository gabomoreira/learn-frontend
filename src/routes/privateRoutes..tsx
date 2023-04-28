import { Courses } from "../pages/private/Courses";
import { Home } from "../pages/private/Home";

export const privateRoutes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "courses",
    element:  <Courses />,
  },
  {
    path: "forum",
    element: <div>forum page</div>,
  },
]