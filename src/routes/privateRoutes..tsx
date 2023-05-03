import { Courses } from "../pages/private/Courses";
import { Home } from "../pages/private/Home";
import { Notifications } from "../pages/private/Notifications";
import { Offers } from "../pages/private/Offers";
import { Profile } from "../pages/private/Profile";
import { Resources } from "../pages/private/Resources";
import { Sections } from "../pages/private/Sections";

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
    path: "/courses/:courseId/offers",
    element: <Offers />,
  },
  {
    path: "/courses/:courseId/offers/:offerId",
    element: <Sections />,
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