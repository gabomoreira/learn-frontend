import { Courses } from "../pages/private/Courses";
import { Home } from "../pages/private/Home";
import { Notifications } from "../pages/private/Notifications";
import { Profile } from "../pages/private/Profile";

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
    path: "notifications",
    element: <Notifications />,
  },
  {
    path: "forum",
    element: <div>forum page</div>,
  },
  {
    path: "profile",
    element: <Profile />,
  },
]