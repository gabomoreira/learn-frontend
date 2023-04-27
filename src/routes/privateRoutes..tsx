import { Home } from "../pages/private/Home";

export const privateRoutes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "offers",
    element: <div>offers page</div>,
  },
  {
    path: "resources",
    element: <div>resources page</div>,
  },
  {
    path: "section",
    element: <div>section page</div>,
  },
]